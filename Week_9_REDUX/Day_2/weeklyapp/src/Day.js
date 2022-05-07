import React from "react";
import './Day.css';
import { connect } from 'react-redux';


// use props from the mapStateToProps function
const Day = (props) => {

    //here should be the handleSubmit function not represented in this example


    return (
        <>
            //new
            <h1 data-day={props.weekday}>Today is <span>{props.weekday}</span></h1>
            //here should be the buttons not represented in this example
        </>
    );
};

//new : extract weekday from the state
const mapStateToProps = (state) => {
    return { weekday: state.weekday };
};

//new
export default connect(mapStateToProps)(Day);
