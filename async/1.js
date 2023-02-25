async function f() {
  console.log(3)
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 2000)
  });

  let result = await promise; // 等待，直到 promise resolve (*)

  console.log(result); // "done!"
}

console.log(1)
f();
console.log(2)