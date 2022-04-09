let numberOfChildren = prompt("What is the number of children you have?");
let partnerName = prompt("What is the name of your partner?");
let geographicLocation = prompt("In which country do you live?");
let jobTitle = prompt("What is your job title?");

(function (numberOfChildren, partnerName, geographicLocation, jobTitle){
    console.log(`You will be ${jobTitle} in ${geographicLocation}, married to ${partnerName} with ${numberOfChildren} kids.`)
})(numberOfChildren, partnerName, geographicLocation, jobTitle)