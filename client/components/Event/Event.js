import React, {Component} from "react";
import { Dimensions, View, Text } from "react-native";
import Svg, {G, Circle} from "react-native-svg";
import event from "./Svg";
import WordCloud from "../WordCloud/WordCloud";

import Plan from "../Plan/Plan";
import Searchbar from "../SearchBar/SearchBar";

class Event extends Component {
    constructor(props) {
        super(props);
        this.currFloor = null;
        this.currentFloorId = null;
        this.state = {
            infoShown: false,
            standShown: undefined,
            isLoading: true , 
            event:undefined 
        }
    }

    OnPressStandHandler(s) {
        this.setState({infoShown: true});
        this.setState({standShown: s})
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

    getDesciption(s) {
        return 'Id:'+s.id+', Name: '+s.name;
    }

    drawPlan() {
        let floor =this.getFloor(this.currentFloorId);
        return (
            <Plan currFloor={floor} handler={this.OnPressStandHandler.bind(this)}/>
        );
    }

    showInfo() {
        if (this.state.infoShown) {
            return (
                <Text> {this.getDesciption(this.state.standShown)} </Text>
            );
        }
        return (
            <Text> Select a Stand to see more Info </Text>
        );
    }

    
    componentWillMount(){
        fetch("http://23.251.135.209:3001/send")
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
            <>    
                {this.drawPlan()}
                {this.showInfo()} 
                <Searchbar /> 
            </>
            );
    }
}

export default Event;