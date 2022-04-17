// 1
class Video {
    constructor(title, uploader, time){
        this.title = title;
        this.uploader = uploader;
        this.time = time;
    }
    watch(){
        console.log(`${this.uploader} watched all ${this.time} of ${this.title}!`);
    }
}

// 3
let potato = new Video("How to peel a potato", "ChubbyBunny", 190 + "seconds");
potato.watch();

// 4
let potatoTwo = new Video("How to boil a potato", "ChubbyBunny", 210 + "seconds");
potatoTwo.watch();

// 5
const arrayOfPotatoes = [
    ["How to peel boiled potato", "ChubbyBunny", 360 + "seconds"],
    ["How to cut potato", "ChubbyBunny", 240 + "seconds"],
    ["How to fry potato", "ChubbyBunny", 288 + "seconds"],
    ["How to bake potato", "ChubbyBunny", 180 + "seconds"],
    ["How to plant potato" , "ChubbyBunny", 120 + "seconds"]
];

// 6
arrayOfPotatoes.forEach(function (value){
    console.log(`${value[1]} watched all ${value[2]} of ${value[0]}!`)

})




