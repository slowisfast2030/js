
fun1 = function(resolve, reject) {
    console.log('Promise init'); // 一般而言，是一个比较耗时的操作
    resolve('resolved');
}

fun2 = function(res) {
    console.log(res); // 一般而言，是一个比较耗时的操作
    a = -1;
    if (a > 0){
        return 'a > 0';
    } else {
        return 'a <= 0';
    }
}

// Promise类初始化的时候需要的是一个函数，函数需要两个参数：resolve和reject。这两个也是函数。
p1 = new Promise(fun1);

// then函数的参数也是一个函数。then函数的返回值是另一个Promise对象。
p2 = p1.then(fun2);

// 如果有一个执行很耗时的函数，就可以将其当做Promise对象的初始化参数，生成一个Promise对象。