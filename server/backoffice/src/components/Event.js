import React from "react";
import API from "../utils/API";
import "./Event.css";


export class Event extends React.Component {
    send=()=>{
        API.eventid();
        window.location="/event"
    }
    render() {



        return (
            <div className="Event">
                <h1> Base added successfully </h1>
                <h3> Search for the event  </h3>
                <form   className="main-form">
                    <div className="form-group">
                        <label htmlFor="eventname">Event id :</label>
                        <input type="text" name="eventId" id="event name" className="form-control">
                    </input>
                    </div>
                        <button onClick={this.send} type="submit" className="btn btn-secondary btn-lg">search</button>

    </form>
    </div>
    );

}
}