// let gradeList = [76, 44, 56, 89, 90, 69];
let gradeList = [40, 23, 43, 33, 54];
console.log(gradeList);

const findAvg = (gradeList) => {
    let total = 0;
    for (i = 0; i < gradeList.length; i++){
        total += gradeList[i];
    }
    let avg = total / gradeList.length;
    console.log(avg);
    if (avg > 65) {
        console.log("Congratulations! You have passed!")
    }
    else {
        console.log("You have failed and must repeat the course.")
    }
    
};
findAvg(gradeList);
