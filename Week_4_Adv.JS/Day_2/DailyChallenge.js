let client = "John";

let groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        payed : true,
        meansOfPayment : ["cash", "creditCard"]
    }

}
// Part 1
const displayGroceries = () => {
    groceries.fruits.forEach((e) => {
        console.log(e);
    })
}
displayGroceries();

// Part 2
const cloneGroceries = () => {
    let user = client;
    console.log(user);

    client = "Betty"
    user = client;
    console.log(user); //Since user is a made a copy from client after client is changed to Betty, user will also be Betty.

    let shopping = groceries;
    groceries.totalPrice = "35$"
    console.log(shopping); //Since groceries is an object, it is pass by reference and any change to groceries will result in a change in shopping.

    groceries.other.payed = false;
    console.log(shopping); //Since groceries is an object, it is pass by reference and any change to groceries will result in a change in shopping. 
}
cloneGroceries();