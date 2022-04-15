// 1
[2] === [2] //False
let a = [2] === [2];
console.log(a);
// Answer: False
let b = {} === {} //False
console.log(b);
// Answer: False

// 2
const object1 = { number: 5 }; // Value: 5 
const object2 = object1; // Value: 4
const object3 = object2; //Value: 4
const object4 = { number: 5}; // Value: 5
object1.number = 4;

//3
class Animal {
    constructor(name, type, color){
        this.name = name;
        this.type = type;
        this.color = color;
    }
}

// 4
class Mamal extends Animal {
    constructor(name, type, color){
        super (name);
        this.type = type;
        this.color = color;
    }
    sound(sound){
        return (`${this.name}, ${this.type}, ${this.color} and ${sound}`);
    }
}