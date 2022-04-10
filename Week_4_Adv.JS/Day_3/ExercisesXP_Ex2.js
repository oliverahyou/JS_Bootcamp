let users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

// Part 1
let usersPrompt = prompt("What is your firstname?");
let newUsers = users.map((value)=>{
    console.log(`Hello ${value.firstName}`);
})

// Part 2
let fullStackResidents = users.filter(value => value.role === "Full Stack Resident");
console.log(fullStackResidents);

// Part 3
fullStackResidents.map(value => {
    console.log(`Good job ${value.firstName}`);
})
