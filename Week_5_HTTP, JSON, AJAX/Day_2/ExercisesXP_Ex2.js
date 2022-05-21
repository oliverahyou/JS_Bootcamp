let xhr = new XMLHttpRequest();
let url = `https://api.giphy.com/v1/gifs/search?q=sun&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&limit=10`
xhr.open("GET", url, true);
xhr.responseType = "json";
xhr.send();
let data= []
xhr.onload = function(){
    if (xhr.status === 200){
        console.log(xhr.response);
        data = xhr.response.data;
        console.log(data);
        display_data(data);
    }
    else {
        console.log(`Error ${xhr.status}: ${xhr.statusText}`);
    }
}
xhr.onprogress = function(event){
    if (event.lengthComputable){
        alert(`Received ${event.loaded} of ${event.total}`)
    }
}
let body = document.body;
function display_data(data){
    for (let gif of data){
        let div = document.createElement("div");
        let title = document.createElement("h3");
        let iframe = document.createElement("iframe");
        iframe.setAttribute("src", `https://giphy.com/embed/${gif.id}`);
        iframe.width = "240px";
        title.innerText = gif.title;
        title.style.width = "240px"

        div.appendChild(title);
        div.appendChild(iframe);
        body.appendChild(div);
    }
}

