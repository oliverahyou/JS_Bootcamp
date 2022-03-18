// Part 1
let sentence = "The movie is not that bad, I like it.";

// Part 2
// wordNot = 13
let wordNot = sentence.indexOf("not");
console.log(wordNot);

// Part 3 
// wordBad = 22
let wordBad = sentence.indexOf("bad");
console.log(wordBad);

// part 4
let sentenceSplit = sentence.split("");
console.log(sentenceSplit);
if (wordBad > wordNot)
{
    sentenceNew = sentenceSplit.splice(13, 12, "good");
}
else 
{
    console.log(sentence);
}  

