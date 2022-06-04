let users = [{
    Firstname: 'Isaias',
    Lastname: 'Glover',
    StreetName: 'Sterling Island',
    Country: 'Nigeria'
},
{
    Firstname: 'Brown',
    Lastname: 'Lind',
    StreetName: 'Shields Way',
    Country: 'Burundi'
},
{
    Firstname: 'Blaise',
    Lastname: 'Wiza',
    StreetName: 'Casandra Mission',
    Country: 'Anguilla'
},
{
    Firstname: 'Cierra',
    Lastname: 'Veum',
    StreetName: 'Hane Ways',
    Country: 'Iran'
},
{
    Firstname: 'Marquise',
    Lastname: 'Schmidt',
    StreetName: 'Erdman Knoll',
    Country: 'Saint Barthelemy'
},
{
    Firstname: 'Brandt',
    Lastname: 'Gerhold',
    StreetName: 'Windler Hill',
    Country: 'Canada'
},
{
    Firstname: 'Deangelo',
    Lastname: 'Fahey',
    StreetName: 'Jakubowski Vista',
    Country: "Democratic People's Republic of Korea"
},
{
    Firstname: 'Adelle',
    Lastname: 'Farrell',
    StreetName: 'Sabrina Springs',
    Country: 'Indonesia'
},
{
    Firstname: 'Randi',
    Lastname: 'Volkman',
    StreetName: 'Wintheiser Spring',
    Country: 'Sri Lanka'
},
{
    Firstname: 'Marian',
    Lastname: 'Halvorson',
    StreetName: 'Vaughn Glens',
    Country: 'Solomon Islands'
}];

const faker = require("faker");
for (let i=0; i<10; i++){
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const streetName = faker.address.streetName();
    const country = faker.address.country();
    
    console.log({
        Firstname: firstName,
        Lastname: lastName,
        StreetName: streetName,
        Country: country
    });
};
console.log(users);
// const faker = require("faker");


// const firstName = faker.name.firstName();
// const lastName = faker.name.lastName();
// const streetName = faker.address.streetName();
// const country = faker.address.country();


// const users= [
// {
//     Firstname: firstName,
//     Lastname: lastName,
//     Streetname: streetName,
//     Country: country
// },
// {
//     Firstname: firstName,
//     Lastname: lastName,
//     Streetname: streetName,
//     Country: country
// },
// {
//     Firstname: firstName,
//     Lastname: lastName,
//     Streetname: streetName,
//     Country: country
// },
// ];
   
// console.log(users);


    

