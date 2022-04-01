export const systemapps = [{ _id: 'settings' }, { _id: 'browser' }, { _id: 'appstore' }, { _id: 'dial' }];
export const allApps = () => systemapps.concat(JSON.parse(localStorage.getItem('saved_apps') || '[]').map((sa, k) => {return { _id: `app_${k}`, info: sa}}));