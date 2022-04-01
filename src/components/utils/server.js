import { O2S } from "./fns";
export function Request_(method, url, body = {}) {

    return new Promise((res, rej) => {
        const ajax = new XMLHttpRequest();
        ajax.onload = function() {
            if (this.status === 200)
                res(this.response)
            else
                rej(this.response)
        }
        ajax.onerror = rej;
        ajax.open(method, url, true);
        ajax.setRequestHeader('Content-Type', 'application/json');
        ajax.send(O2S(body));
    })
}