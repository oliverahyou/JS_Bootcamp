import React from "react";

class Forms extends React.Component {
    constructor(){
        super();
    }
    render(){
        return(
            <div>
                <h1>Hello</h1>
                <p>Enter your name:</p>
                <input type="text" name="name"></input>
            </div>
        )
    }
}
export default Forms;