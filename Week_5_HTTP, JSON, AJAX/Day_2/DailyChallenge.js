let gifs = document.getElementById("gifs");
let searchForm = document.forms[0];
let searchButton = document.getElementById("searchButton");
let deleteAll = document.getElementById("deleteAll");

deleteAll.addEventListener("click", function(){
    let arr = gifs.children;
    for (let index of arr){
        console.log(index);
        gifs.removeChild(gifs.lastElementChild);
    }
})

searchForm.addEventListener("click", (event) =>{
    event.preventDefault();
})

searchButton.addEventListener("click", function() {
    searchResult = searchForm.search.value;
    getData(searchResult);
})

let searchResult;
function getGif(){
    searchResult = searchForm.search.value;
    getData(searchResult);
}

function getData(searchResult){
    let xhr = new XMLHttpRequest();
    xhr.open("GET", `https://api.giphy.com/v1/gifs/search?q=${searchResult}&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`)
    xhr.responseType = "json";
    xhr.send();

    xhr.onload = () => {
        if (xhr.status === 200){
            console.log(xhr.response);
            let data = xhr.response.data[0];
            console.log(data);
            displayData(data);
        }
        else {
            console.log(`Error: ${xhr.status} - ${xhr.statusText}`);
        }
    }

}
function displayData(data){
    let div = document.createElement("div");
    let title = document.createElement("h3");
    let iframe = document.createElement("iframe");
    let deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";

    iframe.setAttribute("src", "https://giphy.com/embed/" + data.id);
    iframe.width = "240px";
    title.innerText = `Category: ${searchResult}`;

    // Delete button
    deleteButton.addEventListener("click", function () {
        gifs.removeChild(div);
    })
    div.appendChild(title);
    div.appendChild(iframe);
    div.appendChild(deleteButton);
    gifs.appendChild(div);
}
