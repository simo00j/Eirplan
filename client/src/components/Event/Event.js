import React, {Component} from "react";
import { Dimensions, View } from "react-native";
import Svg, {G, Circle} from "react-native-svg";


import Plan from "../Plan/Plan";

class Event extends Component {
    constructor(props) {
        super(props);
        this.currFloor = null;
        this.currentFloorId = "606c6d509130ba960a027d43";
        this.state = {
            infoShown: false,
            isLoading: true , 
            event:undefined 
        }
    }
    getFloor(_id) {
        let floor = null;
        for (let f of this.state.event.floors) {
            if (f._id === _id) {
                floor = f;
                break;
            }
        }
        return floor;
        
    }

     drawPlan() {
        let floorr =this.getFloor(this.currentFloorId);
        return (
            <Plan  currFloor={floorr}/>
        );
    }
    componentWillMount(){
        fetch("http://localhost:3001/send")
        .then(response => response.json())
        .then(responseJson => {
             this.setState({event: responseJson.data[0]}); 
             this.setState({isLoading: false});
       }).catch(err=> {console.log(err)})
    }
    render() {
        const {isLoading,event} = this.state;
        if(isLoading)
            return <div >Loading...</div>;
        return (
           this.drawPlan()
        );
    }
}

export default Event;