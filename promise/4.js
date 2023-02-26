// 虽然then()函数能够处理rejected状态的Promise的回调函数，
// 但是并不推荐这么做，而是推荐将它交给下面要讲的catch()函数来处理。

const promise = new Promise((resolve, reject) => {
    //resolve(1);
    reject(2);
    //throw new Error('test');
});

promise
    .then((result) => {
        console.log(result);  // 1
    })
    .then(() => {
        throw new Error('test')
    })
    .catch((err) => {
        console.log(err); 
    });

// 我们知道promise的链式调用，那么问题来了，catch函数捕获的是哪一个promise的错误呢？
// 最合理的设计：这一连串的promise是一连串的二分选择，then路是一直正确的路，
// 如果链条中任何一环出错，就会会catch捕捉。
// 所以，then函数作用的是局域，catch函数作用的是全局。

