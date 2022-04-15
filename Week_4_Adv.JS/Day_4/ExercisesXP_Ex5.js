class Dog {
    constructor(name) {
      this.name = name;
    }
};
console.log(Dog);
1
class Labrador extends Dog {
  constructor(name, size) {
    this.size = size;
  }
};
console.log(Labrador);

// 2 - THIS ONE!
class Labrador extends Dog {
    constructor(name, size) {
      super(name);
      this.size = size;
    }
};
console.log(Labrador);

// 3
class Labrador extends Dog {
  constructor(size) {
    super(name);
    this.size = size;
  }
};
console.log(Dog);

// 4
class Labrador extends Dog {
    constructor(name, size) {
      this.name = name;
      this.size = size;
    }
}; 
console.log(Dog);
