import React, {Component} from "react";
import { Path} from "react-native-svg";
//import Styles from "../StyleSheet/Style";


class Wall extends Component {
    constructor(props) {
        super(props);
        this.id = props.id; //id of the wall
        this.name = "Wall"; //name of the object wall
        this.d = props.d; //delineation of the wall object
        this.fillColor = "transparent"; //fill color of the object wall
        this.strokeColor = "black";//stroke color of the object wall
        this.strokeWidth = 5; //width of the stroke
    }

    /*  draw the wall as a path component
    */
    render() {
        return (
                <Path 
                    key={this.id}
                    d={this.d}
                    fill={this.fillColor} 
                    stroke={this.strokeColor} 
                    strokeWidth={this.strokeWidth}
                />
        );
    }
}

export default Wall;
