import React, {Component} from "react";
import { Dimensions, View, Pressable , Text} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"; 
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons"; 
import Svg, {G, Text as SText} from "react-native-svg";
import Styles from "../StyleSheet/Style";
import Stand from "../Shapes/Stand";
import Wall from "../Shapes/Wall";

const MARGIN = 10;
const vWidth = 600 + MARGIN;
const vHeight = 300 + MARGIN;
const width1 = Dimensions.get("window").width;
const width = width1 - width1*0.22 ;
const height = (width * vHeight) / vWidth;

class Plan extends Component {
    constructor(props) {
        super(props);
        this.keywords = {};
        this.defStandColor = "#FFC27A";
        this.defStorkColor = "black";
        console.log(props.currFloor.names)
        this.state = {
            currFloor: props.currFloor,
            handler: props.handler,
            upHandler: props.upHandler,
            downHandler: props.downHandler
        };
    }

    drawText(t) {
        return (
            <SText key={t.label+"_"+t.x+"_"+t.y} fill="white" fontSize={(t.fontSize != undefined) ? t.fontSize : 20}  x={t.x}  y={t.y} >{t.label}</SText>
        );
    }

    drawStand(s) {
        if (this.props.clickedStandId == s._id) {
            return (
                <Stand id={s._id} name={s.name} d={s.path} key={s._id} keywords={s.keywords} starthour={s.starthour} endhour={s.endhour} respo={s.respo} resume={s.resume} fillColor={this.defStandColor} strokeColor={this.defStorkColor} strokeWidth={1} handler={this.props.handler} isSelected={true}/>
            );
        } else {
            return (
                <Stand id={s._id} name={s.name} d={s.path} key={s._id} keywords={s.keywords} starthour={s.starthour} endhour={s.endhour} respo={s.respo} resume={s.resume} fillColor={this.defStandColor} strokeColor={this.defStorkColor} strokeWidth={1} handler={this.props.handler} isSelected={false}/>
            ); 
        }
    }

    drawWall(w) {
        return (
            <Wall id={w._id} d={w.path} key={w._id}/>
        );
    }

    drawUpArrow() {
        if (this.props.showUpArr)
            return (
                <View style={Styles.bottomFloor}>
                <Pressable onPress={() => this.props.upHandler()}>
                    <FontAwesomeIcon icon={faAngleUp} size={width/5}/>
                </Pressable>
                </View>
            );
        else 
            return (
                <FontAwesomeIcon icon={faAngleUp} size={width/5}/>
            );
    }

    drawDownArrow() {
        if (this.props.showDownArr)
            return (
                <Pressable onPress={() => this.props.downHandler()}>
                    <FontAwesomeIcon icon={faAngleDown} size={width/5}/>
                </Pressable>
            );
        else 
            return (
                <FontAwesomeIcon icon={faAngleDown} size={width/5}/>
            );
    }

    render() {
        console.log(this.props.currFloor)
        return (
          <View style={{flexDirection:'row',alignItems:'center',alignContent:'center'}}>
            <View style={{flex: 4, alignItems:'center'}} onStartShouldSetResponder={() => true}>
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
                        {this.props.currFloor.planShape.map((wall) => (
                            this.drawWall(wall)
                        ))}
                    </G>
                    <G category="Floor">
                        {this.props.currFloor.stands.map((stand) => (
                            this.drawStand(stand)
                        ))}
                    </G>
                    <G category="Name">
                        {this.props.currFloor.names.map((name) => (
                            this.drawText(name)
                        ))}
                    </G>
                </Svg>
            </View>
            <View style={{flex: 1, flexDirection:'column', alignItems:'center',justifyContent:'space-around'}}>
                {this.drawUpArrow()}
                <Text style={Styles.buttonFloor}> {this.props.floorId} </Text>
                {this.drawDownArrow()}
            </View> 
          </View>
        );
    }
}

export default Plan;