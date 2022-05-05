const reducer = (state, action) => {
    let new_value;
    
    console.log(action, value);


    switch (action.type) {

        //if we want to get the next day
        case "ADD":
            //some logic about the array above
            new_value = Number(action.number) + 1;
            return {
                ...state, //copying the original state
                value: new_value  
            }

        //if we want to get the previous day
        case "SUBSTRACT":
            //some logic about the array above
            new_value = Number (action.number) - 1;
            return {
                ...state, //copying the original state
                value: new_value, //update value key from the state
            }
        default:
            return state; //Otherwise, return the existing state unchanged
    }
}

export { reducer };