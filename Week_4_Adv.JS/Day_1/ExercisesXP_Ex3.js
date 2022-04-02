let isString = (input) => {
    return typeof(input) === "string" ? true : false;
}
console.log(isString("hello"));
console.log(isString([1, 2, 4, 0]));