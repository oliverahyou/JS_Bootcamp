import React, { Component } from 'react';
import CardList from '../components/CardList';
import { robots } from "../robots";
import SearchBox from "../components/SearchBox";



class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: robots,
            searchfield: ""
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }
    
    render() {
        const filteredRobots = this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return (
    
            <div className='tc'>
                <SearchBox searchChange={this.onSearchChange} />
                <h1>RoboFriends</h1>
                <CardList robots={filteredRobots} />
            </div>
        )
    }
}

export default App;