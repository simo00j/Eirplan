import React, {Component} from "react";
import { Dimensions, View } from "react-native";
import Svg, {G, Circle} from "react-native-svg";
import Styles from "../StyleSheet/Style";
import Stand from "../Shapes/Stand";
import Wall from "../Shapes/Wall";

const MARGIN = 10;
const vWidth = 800 + MARGIN;
const vHeight = 381 + MARGIN;
const width = Dimensions.get("window").width - 64;
const height = (width * vHeight) / vWidth;

class Plan extends Component {
    constructor(props) {
        super(props);
        this.currFloor = props.currFloor;
        this.keywords = {};
        this.defStandColor = "#FFC27A";
        this.defStorkColor = "black";
        this.state = {
            handler: props.handler,
        };
    }


    drawStand(s) {
        // x && y to add later
        return (
            <Stand id={s._id} name={s.name} d={s.path} key={s._id} fillColor={this.defStandColor} strokeColor={this.defStorkColor} strokeWidth={1} handler={this.props.handler}/>
        );
    }

    drawWall(w) {
        return (
            <Wall id={w._id} d={w.path} key={w._id}/>
        );
    }

    render() {
        return (
          <View onStartShouldSetResponder={() => true}>
            <Svg
              width={width}
              height={height}
              viewBox={[
                -MARGIN / 2,
                -MARGIN / 2,
                vWidth + MARGIN / 2,
                vHeight + MARGIN / 2,
              ].join(" ")}
            >
            <G category="Wall">
                {this.currFloor.planShape.map((wall) => (
                    this.drawWall(wall)
                ))}
            </G>
            <G category="Floor">
                {this.currFloor.stands.map((stand) => (
                    this.drawStand(stand)
                ))}
            </G>

            </Svg>
          </View>
        );
    }
}

export default Plan;