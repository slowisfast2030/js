// fetch的例子比youtube的例子好很多
// 如无必要，勿增实体

const url = 'https://www.baidu.com';
fetch(url)
    .then(res => {
        return res.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.error(err)
    })

// promise的then语句相比于回调函数的使用已经简洁了许多
// 但是还可以进一步简化，通过使用async和await

const loadData = async () => {
    try{
        const url = 'https://www.baidu.com';
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
    }catch(err) {
        console.error(err)
    }
}

loadData()