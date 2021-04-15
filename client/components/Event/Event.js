import React, {Component} from "react";
import { Dimensions, View } from "react-native";
import Svg, {G, Circle} from "react-native-svg";
import event from "./Svg";

import Plan from "../Plan/Plan";

class Event extends Component {
    constructor(props) {
        super(props);
        this.event = event;
        //this.defaultFloor = {props.defaultFloor === undefined ? 0 : props.defaultFloor};
        this.currentFloorId = "605cc8da2fb39e95d879e6b6";
        this.currFloor = this.getFloor(this.currentFloorId);
        this.state = {
            infoShown: false
        }
    }

    getFloor(_id) {
        let floor = null;
        for (let f of this.event.floors) {
            if (f._id.$oid === _id) {
                floor = f;
                break;
            }
        }
        return floor;
    }

    drawPlan() {
        return (
            <Plan currFloor={this.currFloor}/>
        );
    }

    render() {
        return (
            this.drawPlan()
        );
    }
}

export default Event;