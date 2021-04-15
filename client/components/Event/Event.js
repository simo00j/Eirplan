import React, {Component} from "react";
import { Dimensions, View, Text } from "react-native";
import Svg, {G, Circle} from "react-native-svg";


import Plan from "../Plan/Plan";

class Event extends Component {
    constructor(props) {
        super(props);
        this.currFloor = null;
        this.currentFloorId = null;
        this.state = {
            infoShown: false,
            isLoading: true , 
            event:undefined 
        }
    }
    getFloor(_id) {
        let floor = null;
        if(_id == null)
            floor=this.state.event.floors[0]
        else
        {
        for (let f of this.state.event.floors) {
            if (f._id === _id) {
                floor = f;
                break;
            }
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
        fetch("http://192.168.43.69:3001/send")
        .then(response => response.json())
        .then(responseJson => {
             this.setState({event: responseJson.data[0]}); 
             this.setState({isLoading: false});
       }).catch(err=> {console.log(err)})
    }
    render() {
        const {isLoading,event} = this.state;
        if(isLoading)
            return (
            <View>
                <Text >Loading...</Text>
            </View>
            );
        else 
            return (
            this.drawPlan()
            );
    }
}

export default Event;