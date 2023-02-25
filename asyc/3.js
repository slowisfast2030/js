function f() {
    console.log(3)
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("done!"), 2000)
    });
  
    promise.then(console.log);
  }
  
  console.log(1)
  f();
  console.log(2)