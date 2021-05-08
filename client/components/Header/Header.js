import React, { Component } from 'react';
import Styles from "../StyleSheet/Style";
import { View, Text, Image } from "react-native";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            eventName: props.eventName, //props containing the name of the event 
            urlHostLogo : props.host + props.logoHostPath, //url containing the path to the host logo
            urlEventLogo : props.host+ props.logoEventPath //url containing the path to the event logo
        };
    }
    
    /*returna View containing the logos and the title
    */
    render() {
        return(
            <View style={Styles.header}>
                <Image style={Styles.tinyLogo1} source={{uri:this.state.urlEventLogo}} />
                <View>
                    <Text style={Styles.headerText}> {this.state.eventName} </Text>
                </View>
                <Image style={Styles.tinyLogo2} source={{uri:this.state.urlHostLogo}} />

            </View>
        );
    }
}

export default Header;