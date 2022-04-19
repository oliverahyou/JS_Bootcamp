function addOperator(x, y){
    console.log ('Addition:', x + y) ;
}
function divideOperator(x, y){
    console.log('Divivion:', x / y); 
}

module.exports = {
    add: addOperator,
    divide: divideOperator
}