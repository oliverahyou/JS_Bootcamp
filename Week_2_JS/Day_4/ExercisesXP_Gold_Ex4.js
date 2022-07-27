const isOmnipresent = (arr, val) => {
    if (arr.every(i => i.includes(val))) {
        console.log(`${val} is omnipresent.`)
    } else {
        console.log(`${val} is not omnipresent.`)
    }
}

isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1);
isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6);
