// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 3000, 'foo');
// });

Promise.all([
    new Promise(resolve => setTimeout(() => resolve(3), 1000)),
    new Promise(resolve => setTimeout(() => resolve(42), 2000)),
    new Promise(resolve => setTimeout(()=> resolve("foo"), 3000))
]).then(console.log("Promise resolved!"));