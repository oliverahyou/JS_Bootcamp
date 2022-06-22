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
        let header;
        if (this.state.username) {
            header = <h1>Hello {this.state.username}</h1>
        }
        return (    
            <div className="form">
                <form className="potato">
                <div>{header}</div>
                <p>Enter your name:</p>
                <input type="text" name="name" onChange={(event) => {this.onInputChange(event)}}></input>
                <input type="submit" value="Submit"></input>
                </form>
            </div>
        )
    }
}
export default Forms;