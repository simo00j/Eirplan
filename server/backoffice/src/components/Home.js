import React from "react";
import API from "../utils/API";

import "./Home.css"

export class Home extends React.Component{

    home = ()=>{
        API.home();
        window.location = "/";
    };
render(){
    return (
        <div className="Home">
        <h4> Back office Interface </h4>

        <form method="GET" action="/add">
          <button type="Add">Add an event</button>
        </form>
        </div>
        );


}


}