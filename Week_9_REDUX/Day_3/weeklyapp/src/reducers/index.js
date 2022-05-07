const reducer = (state, action) => {
    switch (action.type) {
        case "FORWARD_DAY":
            console.log("IN THE REDUCER - case FORWARD_DAY")
            return state;
        case "BACKWARD_DAY":
            console.log("IN THE REDUCER - case BACKWARD_DAY")
            return state;
        default:
            return state;
    }
}

export { reducer };
