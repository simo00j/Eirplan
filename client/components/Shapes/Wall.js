import React, {Component} from "react";
import { Path} from "react-native-svg";
//import Styles from "../StyleSheet/Style";


class Wall extends Component {
    constructor(props) {
        super(props);
        this.id = props.id;
        this.name = "Wall";
        this.d = props.d;
        this.fillColor = "transparent";
        this.strokeColor = "black";
        this.strokeWidth = 5;
    }


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
