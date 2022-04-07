const gameInfo = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
   ];
   
   let winners = [];
   let score = 0;

//  Add exclamation point to each username
   let usernames = [];

   gameInfo.forEach((player) => {
    //1 
    usernames.push(`${player.username}!`);
    //2 
    player.score > 5 ? winners.push(player.username) : "below 5";
    //3 Get total score
    score += player.score;

})

console.log(usernames);
console.log(winners);
console.log(score);