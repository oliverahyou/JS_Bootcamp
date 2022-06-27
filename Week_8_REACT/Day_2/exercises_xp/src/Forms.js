import React from "react";
import "./Forms.css";

class Forms extends React.Component {
    constructor () {
        super();
        this.state = {
            username: "",
            age: null,
            errormessage: "",
            selectedValue: "",
            title: "",
            author: "",
            genre: "",
            year: "",
            successmessage: ""
        }
        this.mySubmitHandler = this.mySubmitHandler.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.onAgeChange = this.onAgeChange.bind(this);
        this.bookSubmit = this.bookSubmit.bind(this);
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
    bookSubmit (event) {
        this.setState({successmessage: "Data sent!"})
        console.log(`{Title: ${this.state.title}, Author: ${this.state.author}, Genre: ${this.state.genre}, Year: ${this.state.year}.}`)
        event.preventDefault();
    }
    render () {
        let header;
        if (this.state.username && this.state.age) {
            header = <h1>Hello {this.state.username} {this.state.age}</h1>
        }
        return (    
            <div className="forms">
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

                <form className="book" onSubmit={this.bookSubmit}>
                    <h1>New Book</h1>
                    <div>{this.state.successmessage}</div>
                    <label>Title</label>
                    <input type="text" onChange={(event) => {this.setState({title: event.target.value})}}></input><br/>
                    <label>Author</label>
                    <input type="text" onChange={(event) => {this.setState({author: event.target.value})}}></input><br/>
                    <label>Genre</label>
                    <input type="text" onChange={(event) => {this.setState({genre: event.target.value})}}></input><br/>
                    <label>Year Published</label>
                    <input type="text" onChange={(event) => {this.setState({year: event.target.value})}}></input><br/>
                    <input type="submit" value="Submit"></input>
                </form>

                <form className="formThree">
                    <h1 className="welcome">Welcome!</h1>
                    <p>Please provide your information below.</p>
                    <input type="text" placeholder="First Name"></input><br/>
                    <input type="text" placeholder="Last Name"></input><br/>
                    <input type="tel" placeholder="Phone Number"></input><br/>
                    <input type="email" placeholder="Email Address"></input><br/>
                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        )
    }
}
export default Forms;