import React, { Component } from 'react';
import KeywordsCloud from "./lib/cloud";
import randomColor from 'randomcolor';
import {Dimensions, View} from "react-native";
import Styles from '../StyleSheet/Style';


const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const color = {luminosity: 'dark', hue: '#ffe4c4'}


class WordCloud extends Component {
    
    constructor(props) {
        super(props);
        this.props.keywordsArray.forEach(function (element) {
            element.color = randomColor(color);
          });        
        this.state = {
            keywordsArray: props.keywordsArray,
            kwords: this.props.keywordsArray,
            shownKeyword: this.tirage(this.props.keywordsArray)
        };
    }

    tirage(data)  {
        var dataRestants=data.slice(0);
        var dataAleatoires=[];
        while (dataAleatoires.length<7) 
            dataAleatoires.push(dataRestants.splice(Math.floor(Math.random()*dataRestants.length),1)[0]);
        return dataAleatoires;
    }
    
    onChangeHandler() {
        this.setState({shownKeyword:this.tirage(this.state.kwords)})
    }

    render() {
        return ( <View style={Styles.keywordContainer}>
        <KeywordsCloud 
                    keywords={this.state.shownKeyword} 
                    scale={height/300}
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