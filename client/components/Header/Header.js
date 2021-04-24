import React, { Component } from 'react';
import Styles from "../StyleSheet/Style";
import { View, Text, Image } from "react-native";

export default function Header() {
    return(
        <View style={Styles.header}>
            <Image style={Styles.tinyLogo} source={require('./logo1.png')}></Image>
            <View>
                <Text style={Styles.headerText}> EIRPLAN </Text>
            </View>
            <Image style={Styles.tinyLogo} source={require('./logo2.png')}></Image>
        </View>
    )
}