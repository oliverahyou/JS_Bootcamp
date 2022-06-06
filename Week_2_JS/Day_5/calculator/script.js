const number = (num) => {
    let a = document.getElementById("display").value += num;
    return a;
};
const operator = (operator) => {
    let a = document.getElementById("display").value += operator;
    return a;
};
const equal = () => {
    let a = document.getElementById("display").value;
    let b = eval(a);
    document.getElementById("display").value = b;
    return b;   
};
const reset = () => {
    let a = document.getElementById("display").value = " ";
    return a;
};
const clear = () => {
    let a = document.getElementById("display").value;
    document.getElementById("display").value = a.substring(0, a.length - 1);
};