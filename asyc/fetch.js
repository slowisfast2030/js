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
        

    }catch(err) {

    }

}