let epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

// Part 1
let epicStr = epic.reduce((acc, val)=>{
    return acc + " " + val;
})
console.log(epicStr);