import React, {Component} from "react";
import { Dimensions, View, Text, Pressable } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"; 
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons"; 
import Svg, {G, Circle} from "react-native-svg";
import Styles from "../StyleSheet/Style";
import Stand from "../Shapes/Stand";
import Wall from "../Shapes/Wall";

const MARGIN = 10;
const vWidth = 600 + MARGIN;
const vHeight = 300 + MARGIN;
const width = Dimensions.get("window").width - 250;
const height = (width * vHeight) / vWidth;

class Plan extends Component {
    constructor(props) {
        super(props);
        this.keywords = {};
        this.defStandColor = "#FFC27A";
        this.defStorkColor = "black";
        this.state = {
            currFloor: props.currFloor,
            handler: props.handler,
            upHandler: props.upHandler,
            downHandler: props.downHandler
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

    drawUpArrow() {
        if (this.props.showUpArr)
            return (
                <Pressable onPress={() => this.state.upHandler()}>
                    <FontAwesomeIcon icon={faAngleUp} size={250}/>
                </Pressable>
            );
        else 
            return (
                <FontAwesomeIcon icon={faAngleUp} size={250} color="transparent"/>
            );
    }

    drawDownArrow() {
        if (this.props.showDownArr)
        return (
            <Pressable onPress={() => this.state.downHandler()}>
                <FontAwesomeIcon icon={faAngleDown} size={250}/>
            </Pressable>
        );
    else 
        return (
            <FontAwesomeIcon icon={faAngleDown} size={250} color="transparent"/>
        );
    }

    render() {
        return (
          <View style={{flexDirection:'row',alignItems:'center',alignContent:'center'}}>
            <View style={{alignItems:'center'}} onStartShouldSetResponder={() => true}>
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
                        {this.state.currFloor.planShape.map((wall) => (
                            this.drawWall(wall)
                        ))}
                    </G>
                    <G category="Floor">
                        {this.state.currFloor.stands.map((stand) => (
                            this.drawStand(stand)
                        ))}
                    </G>
                </Svg>
            </View>
            <View style={{flexDirection:'column',alignItems:'center',justifyContent:'space-around'}}>
                {this.drawUpArrow()}
                <Text style={{fontSize:50}}> {this.props.floorId} </Text>
                {this.drawDownArrow()}
            </View> 
          </View>
        );
    }
}

export default Plan;