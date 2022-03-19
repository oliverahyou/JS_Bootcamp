// Part 1
let pattern = 
[
    "*", 
    "*",
    "*",
    "*",
    "*",
    "*"
];
let empty = " ";
for (let i = 0; i < pattern.length; i++)
{
    console.log(empty += pattern[i]);
}

// Part 2
pattern =
[
    ["*"],
    ["**"],
    ["***"],
    ["****"],
    ["*****"],
    ["******"]
]
for (let i = 0; i < pattern.length; i++)
{
    for (let j = 0; j < pattern[i].length; j++)
    {
       console.log(pattern[i][j]);
    }
}