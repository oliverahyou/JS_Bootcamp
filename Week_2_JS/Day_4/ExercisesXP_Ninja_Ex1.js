let random = Math.floor(Math.random() * 100) + 1;
console.log(random);
let arr = []

for (let i = random; i > 0; i--) {
    if (i % 2 === 0) {
        arr.push(i);
    } else {
        console.log(`${i} is an odd number.`);
    }
}
console.log(arr)