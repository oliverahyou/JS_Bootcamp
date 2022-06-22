import React from "react";
import "./Forms.css";

class Forms extends React.Component {
    constructor () {
        super();
        this.state = {
            username: ""
        }
    }
    onInputChange(event){
        this.setState({
            username: event.target.value
        })
    }
    render() {
        return (
            <div className="form">
                <h1>Hello {this.state.username}</h1>
                <p>Enter your name:</p>
                <input type="text" name="name" onChange={(event) => {this.onInputChange(event)}}></input>
            </div>
        )
    }
}
export default Forms;