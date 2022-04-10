let inventory = [
    { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
    { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
    { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
    { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
    { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
];
// Part I
    function getCarHonda(carInventory){
        let getCar = inventory.filter(value => value.car_make === "Honda");
        getCar.map(value => {
            console.log(`This is a ${value.car_make} ${value.car_model} from ${value.car_year}.`)
        })
    }
    getCarHonda(inventory);

// Part II
function sortCarInventoryByYear(carInventory){
  inventory.sort(function (x, y){
    let a = new Date(x.car_year),
    b = new Date(y.car_year);
    return a-b;
  });
}
sortCarInventoryByYear(inventory);
console.log(inventory);