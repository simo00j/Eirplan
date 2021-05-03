import React, { Component } from 'react';
import KeywordsCloud from "./lib/cloud";
import randomColor from 'randomcolor';
import {Dimensions, View} from "react-native";
import Styles from '../StyleSheet/Style';


const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

//Temporaire
const keywordsArray = [
    {
        keyword: "Informatique",    // the actual keyword
        frequency: 10,      // the frequency of this keyword
        color: randomColor({
                luminosity: 'dark',
                hue: '#ffe4c4'})     // the color of the circle that shows this keyword
    },
    {
        keyword: "Mathématiques",    // the actual keyword
        frequency: 20,      // the frequency of this keyword
        color: randomColor({
            luminosity: 'dark',
            hue: '#ffe4c4'})     // the color of the circle that shows this keyword
    },
    {
        keyword: "iOs",    // the actual keyword
        frequency: 30,      // the frequency of this keyword
        color: randomColor({
                luminosity: 'dark',
                hue: '#ffe4c4'})     // the color of the circle that shows this keyword
    },
    {
        keyword: "Robotique",    // the actual keyword
        frequency: 15,      // the frequency of this keyword
        color: randomColor({
            luminosity: 'dark',
            hue: '#ffe4c4'})     // the color of the circle that shows this keyword
    },
    {
        keyword: "Aéronautique",    // the actual keyword
        frequency: 15,      // the frequency of this keyword
        color: randomColor({
            luminosity: 'dark',
            hue: '#ffe4c4'})     // the color of the circle that shows this keyword
    },
    {
        keyword: "Innovation",    // the actual keyword
        frequency: 20,      // the frequency of this keyword
        color: randomColor({
            luminosity: 'dark',
            hue: '#ffe4c4'})     // the color of the circle that shows this keyword
    },
    {
        keyword: "Bordeaux",    // the actual keyword
        frequency: 15,      // the frequency of this keyword
        color: randomColor({
            luminosity: 'dark',
            hue: '#ffe4c4'})     // the color of the circle that shows this keyword
    },
    {
        keyword: "Génie logiciel",    // the actual keyword
        frequency: 23,      // the frequency of this keyword
        color: randomColor({
            luminosity: 'dark',
            hue: '#ffe4c4'})     // the color of the circle that shows this keyword
    },
    {
        keyword: "Electronique",    // the actual keyword
        frequency: 15,      // the frequency of this keyword
        color: randomColor({
            luminosity: 'dark',
            hue: '#ffe4c4'})     // the color of the circle that shows this keyword
    }
]

class WordCloud extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            kwords: keywordsArray,
            shownKeyword: this.tirage(keywordsArray)
        };
    }

    tirage(data)  {
        var dataRestants=data.slice(0);
        //console.log(dataRestants)
        var dataAleatoires=[];
        while (dataAleatoires.length<7) 
            dataAleatoires.push(dataRestants.splice(Math.floor(Math.random()*dataRestants.length),1)[0]);
        //console.log(dataAleatoires)
        console.log(keywordsArray[0][0])
        //console.log("END")
        return dataAleatoires;
    }
    
    onChangeHandler() {
        this.setState({shownKeyword:this.tirage(this.state.kwords)})
    }

    render() {
        return ( <View style={Styles.keywordContainer}>
        <KeywordsCloud 
                    keywords={this.state.shownKeyword} 
                    scale={height/2.5}
                    largestAtCenter={true} 
                    drawContainerCircle={false} 
                    containerCircleColor={'#345678'}
                    handler={this.props.OnPressHandler}
                    handlerChange={this.onChangeHandler.bind(this)}
                    />
                </View>
        )
    }

}

export default WordCloud;