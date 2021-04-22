import React from "react";
import API from "../utils/API";


import "./Add.css";
export class Add extends React.Component{
    state ={
        name:"",
        logoEvent:"",
        logoHost:"",
        floor:"",
        numberFloor:0,
    };
    
    send = async ()=>{
        const { name,logoEvent,logoHost,floor,numberFloor} = this.state;
        if (!name||name.length===0) {return ;}
        /*if (!logoEvent|| logoEvent.length===0) {return ;}
        if (!logoHost|| logoHost.length===0) {return ;}
        if (!floor||floor.length===0) {return ;}
    */
    try{
        const {data} = await API.addEvent(name,logoHost,logoEvent,floor,numberFloor);
        localStorage.setItem("token",data.token);
        window.location="/add"
        }
    catch(error){
        console.error(error);
    }
    };
    printFloor=(event)=>{
        var i = this.state.numberFloor;
        var c="";
        console.log(this.state.floor);
        while(i>0){
            c= c + " " +this.state.floor[i];
            i--;
        }
        console.log(c);
        return c;
    };
    handleChange=(event)=>{
        this.setState({
            [event.target.id] : event.target.value
        });
        console.log(event.target.value);
        console.log(this.state.floor);
   };
    handleChangefloorNumber=(event)=>{
        
        //console.log(event.target.value);
        this.setState({
            [event.target.id] : [event.target.id] + [event.target.value],
            [event.target.id]: [...this.state.floor,event.target.value],
        });
        this.state.numberFloor++;
        console.log(this.state.floor);
       console.log(this.state.numberFloor + "number");

    };


    render(){
        console.log(this.state.floor.length);

        const {name,logoEvent,logoHost,floor,numberFloor} =  this.state;
        return(
            <form action="/event"  encType="multipart/form-data"  className="main-form">

        <div className="add">
        <div>
        <h1>Back Office</h1>
        <h2>Add an event</h2>
        </div> 

            <div className="form-group row">
                <label htmlFor="Eventname" className="col-sm-2 col-form-label">Event name</label>
                <div className="col-sm-10">
                    <input type="text" name="eventname" id="name" className="form-control "
                        aria-describedby="validationTooltipUsernamePrepend" required value={name} onChange={this.handleChange}>
                </input>
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="logopath">Event logo path </label>
                <input type="file" name="logopath" className="form-control-file" id="logoEvent" value={logoEvent} onChange={this.handleChange}>
                </input>            <div className="text-center">
                <button  className="btn btn__primary btn__lg" > Add Floor</button>
            </div>
            </div>

            <div className="form-group">
                <label htmlFor="hostpath">Host logo path    </label>
                    <input type="file" name="hostpath" className="form-control-file" id="logoHost" value={logoHost} onChange={this.handleChange}>
                </input>
            </div>

            <div className="form-group">
                <label htmlFor="floorpath">Floor paths  </label>
                <input type="file" name="1" className="form-control-file" id="floor" value={floor} onChange={this.handleChange}>
            
            </input>
            
            </div>

                <button  onClick={this.send} type="submit"  >Submit</button>
        
        </div>
        </form>
        );
    }



}