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
                <h1> Search for the event  </h1>
                <form   className="main-form">
                        <label htmlFor="eventname">Event id :</label>
                        <input type="text" name="eventId" id="event name" className="form-control">
                    </input>
                        <button onClick={this.send} type="submit" className="btn btn-secondary btn-lg">search</button>

    </form>
    </div>
    );

}
}