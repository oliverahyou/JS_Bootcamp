let url = "http://api.openweathermap.org/data/2.5/forecast?lat=32.109333&lon=34.855499&appid=bf8bdc6ff3f8af3bd4bad0fa482bfc3c";
fetch(url)
.then(function(response){
    console.log(response);
    console.log(response.json());
})
.catch(function(response){
    console.log("Ooops. An error occured");
    console.log(response);
})
async function get_city(){
    let city = await fetch(url);
    let data = await city.json();
    console.log(data);
    return data;
}
let city = get_city()
console.log(city.name);