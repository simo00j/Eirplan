import React, {Component} from "react";
import { Path, G} from "react-native-svg";


class Stand extends Component {
    constructor(props) {
        super(props);
        this.id = props.id;
        this.name = props.name;
        this.respo = props.respo;
        this.starthour = props.starthour;
        this.endhour = props.endhour;
        this.keywords = props.keywords;
        this.resume = props.resume;
        this.d = props.d;
        this.fillColor = props.fillColor;
        this.onSelected = "#32a852";
        this.strokeColor = props.strokeColor;
        this.strokeWidth = props.strokeWidth;
        this.state = {
            handler: props.handler,
            isSelected: false,
            isOnMouse: false,
        };
    }

    render() {
        return (
                <Path 
                    key={this.id}
                    d={this.d}
                    fill={this.state.isSelected || this.state.isOnMouse ? this.onSelected : this.fillColor} //{this.fillColor} 
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
                    onMouseMove={() => {this.setState({ isOnMouse: true })}}
                    onMouseLeave={() => {this.setState({ isOnMouse: false })}}
                />
        );
    }
}

export default Stand;