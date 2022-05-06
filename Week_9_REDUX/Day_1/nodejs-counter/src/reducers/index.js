const reducer = (state, action) => {
    let new_value;

    console.log(action.number);

    switch (action.type) {
    
        //if we want to add 1 to current value
        case "ADD":
            //some logic about the array above
            new_value = Number(action.number) + 1;
            return {
                ...state, //copying the original state
                value: new_value, //update the value key from the state
            }

        //if we want to substract 1 to current value
        case "SUBSTRACT":
            //some logic about the array above
            new_value = Number(action.number) - 1;
            return {
                ...state, //copying the original state
                value: new_value, //update the value key from the state
            }

        default:
            return state; //Otherwise, return the existing state unchanged
    }
}

export { reducer };