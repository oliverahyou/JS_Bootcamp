// 1
const users = { user1: 18273, user2: 92833, user3: 90315 };

let usersArray = Object.entries(users);
console.log(usersArray);

// 2
usersArrayTimesTwo =[
    [usersArray[0][0], (usersArray[0][1] * 2)],
    [usersArray[1][0], (usersArray[1][1] * 2)],
    [usersArray[2][0], (usersArray[2][1] * 2)]
];
console.log(usersArrayTimesTwo);