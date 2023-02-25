const url = 'https://www.baidu.com'
fetch(url)
    .then(res => {
        return res.json()
    })
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.error(err)
    })