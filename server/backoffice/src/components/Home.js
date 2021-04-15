import React from "react";
import API from "../utils/API";


export class Home extends React.Component{

    home = ()=>{
        API.home();
        window.location = "/";
    };
render(){
    return (
        <div>
        <h1> BackOffice Interface </h1>
        <form method="GET" action="/add">
          <button type="submit">add an event</button>
        </form>
        </div>
        );


}


}