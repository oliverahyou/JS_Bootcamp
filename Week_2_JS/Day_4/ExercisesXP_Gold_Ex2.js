let str = "Robin Singh";

const abbrevName = () => {
    let regex = /^[A-Za-z]+\s[A-Z]([a-z]+)/g
    let match = regex.exec(str);
    
    if (match) {
        let surname = match[1];
        let res = str.replace(surname, ".");
        console.log(res);
    } else {
        console.log("Ooops. Something went wrong.");
    }
}
abbrevName(str);
