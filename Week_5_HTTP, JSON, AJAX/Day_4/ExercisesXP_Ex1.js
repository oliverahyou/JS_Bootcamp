async function getShip(){
    let fetchStarships = await fetch("https://www.swapi.tech/api/starships/9/");
    let response = await fetchStarships.json();
    return response;
}
getShip().then(result => {
    console.log(result);
})