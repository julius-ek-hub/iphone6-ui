import { Request_ } from "../../utils/server";
import Validator from "../../utils/validate";

const _get = async url => {
    try {
        return await Request_('get', `http://localhost/247-dev/get_file.php?url=${url}`);

    } catch (err) {
        return false;
    }
}
export const getAppInfo = async(url) => {

    if (!Validator.URL(url)) return { error: 1, message: 'Invalid URL' }
    url = new URL(url).pathname.endsWith('/') ? url : url + '/';
    const content = await _get(url);
    if (!content) return { error: 1, message: 'Could not fetch details from the URL' };

    const Dom = new DOMParser().parseFromString(content, 'text/html');

    const tags = elName => [].slice.call(Dom.documentElement.querySelectorAll(elName));

    let INFO = [{ type: 'url', url }];
    INFO = INFO.concat(
        tags('link')
        .filter(el => ['apple-touch-icon', 'icon'].includes(el.rel))
        .map(el => { return { type: el.rel, url: el.getAttribute('href') } })
    );

    INFO = INFO.concat(
        tags('meta')
        .filter(el => !el.name && Validator.IMAGE_URL(el.content))
        .map(el => { return { type: 'og:image', url: el.content } })
    );

    INFO = INFO.concat(
        tags('title')
        .slice(0, 2)
        .map(el => { return { type: 'title', content: el.innerText } })
    );

    INFO = INFO.concat(
        tags('meta')
        .filter(el => el.name && ['og:description', 'description', 'theme-color'].includes(el.name.toLowerCase()))
        .map(el => { return { type: el.name, content: el.content } })
    );

    const manifestURL =
        tags('link')
        .filter(el => el.rel === 'manifest')
        .map(el => el.href);

    if (manifestURL.length !== 0) {
        const manifestContent = await _get(manifestURL[0]) || [];
        INFO = INFO.concat([{
            type: "manifest",
            content: JSON.parse(manifestContent)
        }])
    }

    return INFO;

}

export const uniqueAppInfo = allInfo => {
    const find = key => allInfo.find(info => info.type === key);
    const url = find('url').url;
    let appName = ((find('title') || { content: url }).content) || '';
    appName = appName.length > 10 ? appName.substring(0, 10) + '...' : appName;
    let logo = find('apple-touch-icon');
    const description = (find('description') || { content: '' }).content;
    const themecolor = (find('theme-color') || { content: 'white' }).content;
    const manifest = (find('manifest') || { content: '' }).content
    if (!logo)
        logo = find('icon');
    if (!logo)
        logo = find('og:image');
    if (!logo)
        logo = find('image');

    logo = (logo || { url: 'no-image' }).url;
    if(logo.startsWith('/'))
        logo = new URL(url).origin + logo;
    return {
        logo,
        appName,
        description: description,
        url,
        themecolor,
        manifest,
        _id: Date.now()
    }
}

export const saveApp = appInfo => {
    let allApps = JSON.parse(localStorage.getItem('saved_apps') || '[]');
    if(allApps.some(app => app.find(t => t.type === 'url').url === appInfo.find(t => t.type === 'url').url))
        throw Error('App already exists')
    allApps.push(appInfo);
    localStorage.setItem('saved_apps', JSON.stringify(allApps));
}