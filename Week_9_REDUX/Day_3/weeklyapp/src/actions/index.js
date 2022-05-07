const forward = weekday => {
    console.log("IN ACTION - forward")
    return {
        type: "FORWARD_DAY",
        day: weekday
    }
}

const backward = weekday => {
    console.log("IN ACTION - backward")
    return {
        type: "BACKWARD_DAY",
        day: weekday
    }
}


export {
    forward,
    backward,
}