// 封装原生get类型Ajax请求
function ajaxGetPromise(url) {
    const promise = new Promise(function (resolve, reject) {
        const handler = function () {
            if (this.readyState !== 4) {
                return;
            }
            // 当状态码为200时，表示请求成功，执行resolve()函数
            if (this.status === 200) {
            // 将请求的响应体作为参数，传递给resolve()函数
                resolve(this.response);
            } else {
                // 当状态码不为200时，表示请求失败，reject()函数
                reject(new Error(this.statusText));
            }
        };
        // 原生Ajax请求操作
        const client = new XMLHttpRequest();
        client.open("GET", url);
        client.onreadystatechange = handler;
        client.responseType = "json";
        client.setRequestHeader("Accept", "application/json");
        client.send();
    });
    return promise;
}

ajaxGetPromise('/testUrl').then((response) => {
    console.log(response);
});