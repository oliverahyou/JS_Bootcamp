console.log("AJAX");

// Create XMLHTTPRequest
let xhr = new XMLHttpRequest();

// Specify timeout
xhr.timeout = 500; //Value in ms

// Initialize
xhr.open("GET", "http://time.jsontest.com", true) 
//Parameters: Method, url, async, user and password(authentification if required)

// Send the request
// xhr.send([body]) //Body is optional (GET request does not have body)

xhr.send();

// Onload - Executed after reponse has been received
xhr.onload = function(){
    if (xhr.status === 200){
        console.log("OK");
    }
    else{
        console.log("Error!");
    }
    alert(`Status code: ${xhr.status} - ${xhr.statusText}`);
}

// Onprogress - when transmitting data
xhr.onprogress = function(event){
    if (event.lengthComputable){
        console.log(`Received ${event.loaded} of ${event.total} bytes`);
    }
    else {
        console.log(`Received ${event.loaded} bytes`);
    }
}

// Onerror - when you have an error
xhr.onerror = function(){
    alert("Request failed!")
}

// Specify timeout
xhr.timeout = 100; //Value in ms

//Ontimeout - when response take too long to return
xhr.ontimeout = function(){
    alert("Timeout ! No response received in time.");
}

// Parameters
let url_search = new URL ("https://www.google.com/search");
url_search.searchParams.set("q", "potato");

// Update request
xhr.open("GET", url_search, true);
xhr.send();