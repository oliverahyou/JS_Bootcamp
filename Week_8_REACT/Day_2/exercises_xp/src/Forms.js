import React from "react";
import "./Forms.css";

class Forms extends React.Component {
    constructor () {
        super();
        this.state = {
            username: "",
            age: null,
            errormessage: "",
            selectedValue: ""
        }
        this.mySubmitHandler = this.mySubmitHandler.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.onAgeChange = this.onAgeChange.bind(this);
    }
    onInputChange (event) {
        this.setState({username: event.target.value});
    }
    mySubmitHandler (event) {
        this.setState({username: event.target.value});
        alert(`You are submitting ${this.state.username}.`);
        event.preventDefault();
    }
    onAgeChange (event) {
        this.setState({age: event.target.value});
        if (isNaN(this.state.age)){
            this.setState({errormessage: "Your age must be a number"});
        }
    }
    render () {
        let header;
        if (this.state.username && this.state.age) {
            header = <h1>Hello {this.state.username} {this.state.age}</h1>
        }
        return (    
            <div className="form">
                <form className="potato" onSubmit={this.mySubmitHandler}>
                <div>{header}</div>
                <label htmlFor="name">Enter your name:</label><br/>
                <input type="text" name="name" onChange={(event) => {this.onInputChange(event)}}></input><br/>
                <label htmlFor="age">Enter your age:</label><br/>
                <input type="text" name="age" onChange={(event) => {this.onAgeChange(event)}}></input><br/>
                <h3>{this.state.errormessage}</h3>
                <textarea value="The content of a textarea goes in the value attribute"></textarea><br/>
                <input type="submit" value="Submit" id="submitbtn"></input><br/>
                <select onChange={(event) => {this.setState({selectedValue: event.target.value})}}>
                    <option>Ford</option>
                    <option>Volvo</option>
                    <option>Fiat</option>
                </select>
                </form>
            </div>
        )
    }
}
export default Forms;