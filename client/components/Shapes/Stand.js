import React, {Component} from "react";
import { Path, G} from "react-native-svg";


class Stand extends Component {
    constructor(props) {
        super(props);
        this.id = props.id; // id of the stand
        this.name = props.name; // name of the stand
        this.respo = props.respo; // name of the stand manager
        this.starthour = props.starthour; // hour of opening of the stand
        this.endhour = props.endhour; // hour of end of the stand
        this.keywords = props.keywords; // keywords link to the stand
        this.resume = props.resume; // brief resume of the stand topic
        this.d = props.d; //delineation of the stand
        this.fillColor = props.fillColor; //color of the stand
        this.onSelected = "#32a852"; // color of the stand when selected
        this.strokeColor = props.strokeColor; //color of the stand stroke
        this.strokeWidth = props.strokeWidth; //width of the stand stroke
        this.state = {
            handler: props.handler, //handler called when pressing the stand
            isSelected: false, //boolean , false when not selected, true otherwise
        };
    }
    //return a component path drawing the stand thanks to their characteristics 
    render() {
        return (
                <Path 
                    key={this.id}
                    d={this.d}
                    fill={(this.props.isSelected) ? this.onSelected : this.fillColor} //{this.fillColor} 
                    stroke={this.strokeColor} 
                    strokeWidth={this.strokeWidth}
                    onPress={() => {this.props.handler({id:this.props.id,
                                                        name:this.props.name,
                                                        respo:this.props.respo,
                                                        starthour:this.props.starthour,
                                                        endhour:this.props.endhour,
                                                        keywords:this.props.keywords,
                                                        resume:this.props.resume
                                                        },
                                                        )}}
                />
        );
    }
}

export default Stand;