const input = document.getElementById("display");

const number = (num) => {
    let a = input.value += num;
    return a;
};
const operator = (operator) => {
    let a = input.value += operator;
    return a;
};
const equal = () => {
    let a = input.value;
    let b = eval(a);
    document.getElementById("display").value = b;
    return b;   
};
const reset = () => {
    let a = input.value = " ";
    return a;
};
function dlt() {
    input.value = input.value.slice(0, -1);
};