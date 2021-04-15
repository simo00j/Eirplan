import React from "react";
import API from "../utils/API";


export class Event extends React.Component {
    send=()=>{
        API.eventid();
        window.location="/event"
    }
    render() {



        return (
            <div>
                <h1> base added successfully </h1>
                <h2> search by event id </h2>
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