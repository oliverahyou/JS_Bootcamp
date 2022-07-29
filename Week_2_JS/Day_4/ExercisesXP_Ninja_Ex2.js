const capitalize = (str) => {
    let arr = [str.split("")];
    for (let i of arr) {
        if (i % 2 === 0) {
            console.log(arr[i].toUpperCase());
        } 
    }
    console.log(arr);
};
capitalize("abcdef");