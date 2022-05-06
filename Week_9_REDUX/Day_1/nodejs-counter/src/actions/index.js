//to increment value
const add = value => {
    return {
        type: "ADD",
        number: value
    }
}

//to decrement value
const substract = value => {
    return {
        type: "SUBSTRACT",
        number: value
    }
}

//we export the two functions
export {
    add,
    substract,
}