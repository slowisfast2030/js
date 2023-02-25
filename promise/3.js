// 链式调用
const promise = new Promise((resolve, reject) => {
    console.log('promise init')
    resolve(1);
});
// then()函数链式调用
promise.then((result) => {
   console.log(result);  // 1
   return 2;
}).then((result) => {
   console.log(result);  // 2
   return 3;
}).then((result) => {
   console.log(result);  // 3
   return 4;
}).then((result) => {
   console.log(result);  // 4
});