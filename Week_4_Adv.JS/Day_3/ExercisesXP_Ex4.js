let student = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];

// Part 1
let studentPassed = student.filter(value => value.isPassed === true);
console.log(studentPassed);

// Part 2
let congratulations = studentPassed.map(value =>{
    console.log(`Good job ${value.name}, you passed the course in ${value.course}.`);
})