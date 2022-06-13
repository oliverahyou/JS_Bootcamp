import React from "react";
import "./Card.css";

const Card = () => {
    return (
        <div className="container">
            <div className="section">
                <div className="small-div">
                    <i class="fa-solid fa-building fa-8x"></i>
                </div>
                <div className="big-div">
                    <span className="div-title">About the Company</span><br/>
                    <span className="div-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</span>
                </div>
            </div>
            <div className="section bg-grey">
                <div className="small-div">
                    <i class="fa-solid fa-earth-africa fa-8x"></i>
                </div>
                <div className="big-div">
                    <span className="div-title">Our Values</span><br/>
                    <span className="div-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</span>
                </div>
            </div>
            <div className="section">
                <div className="small-div">
                    <i class="fa-solid fa-building-columns fa-8x"></i>
                </div>
                <div className="big-div">
                    <span className="div-title">Our Mission</span><br/>
                    <span className="div-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</span>
                </div>
            </div>
            
        </div>
    )
}
export default Card;