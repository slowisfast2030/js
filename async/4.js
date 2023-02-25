function a(){
    p = new Promise(function(resolve, reject){
        resolve('hello');
    });
    return p
}

a().then(console.log);
console.log(1);