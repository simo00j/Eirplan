import React, { Component } from 'react';
import Styles from "../StyleSheet/Style";
import { View, Text, Image } from "react-native";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            eventName: props.eventName
        };
    }

    render() {
        return(
            <View style={Styles.header}>
                <Image style={Styles.tinyLogo1} source={require('./logo1.png')}></Image>
                <View>
                    <Text style={Styles.headerText}> {this.state.eventName} </Text>
                </View>
                <Image style={Styles.tinyLogo1} source={require('./logo2.png')}></Image>
            </View>
        )
    }
}

export default Header;