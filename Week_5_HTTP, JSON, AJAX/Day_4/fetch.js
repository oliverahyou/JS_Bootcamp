//Fetch - another way to send a request
let url = "https://swapi.dev/api/people/1";

fetch(url) //Pass the url as a parameter
.then(function(response){ 
    //Use the data from response (Resolve)
    console.log(response);
    
    console.log(response.text());
    console.log(response.json());
    
}
)
.catch(function(response){
//Handle the errors(Rejected)
    console.log("An error occured");
    console.log(response);
   }
)