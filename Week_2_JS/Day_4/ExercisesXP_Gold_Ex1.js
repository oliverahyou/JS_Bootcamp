// let str = "potato";
let str = "";
const isBlank = () => {
    let regex = /^$/g;
    let blank = regex.test(str);
    console.log(blank);
}
isBlank(str);