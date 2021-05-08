import React, { Component } from 'react';
import KeywordsCloud from "./lib/cloud";
import randomColor from 'randomcolor';
import {Dimensions, View} from "react-native";
import Styles from '../StyleSheet/Style';


const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const color = {luminosity: 'dark', hue: '#ffe4c4'} //color added to the list of keywords


class WordCloud extends Component {
    
    constructor(props) {
        super(props);
        this.props.keywordsArray.forEach(function (element) {
            element.color = randomColor(color);
          }); //this function allow to add a field color to each element of keywordsArray        
        this.state = {
            keywordsArray: props.keywordsArray, //props containing the keywords of the database
            kwords: this.props.keywordsArray, //list containing the keywords of the db with the field color
            shownKeyword: this.tirage(this.props.keywordsArray) // list containing the keywords randomly chosen with the tirage function
        };
    }
    /* return a list with objects from kwords randomly chosen
    */
    tirage(data)  {
        var dataRestants=data.slice(0);
        var dataAleatoires=[];
        while (dataAleatoires.length<7) 
            dataAleatoires.push(dataRestants.splice(Math.floor(Math.random()*dataRestants.length),1)[0]);
        return dataAleatoires;
    }
    /*handler called when a keyword from the cloud is pressed, it called the tirage function of kwords
    */
    onChangeHandler() {
        this.setState({shownKeyword:this.tirage(this.state.kwords)})
    }

    /* return a view containing the component Keywordscloud
    */
    render() {
        return ( <View style={Styles.keywordContainer}>
        <KeywordsCloud 
                    keywords={this.state.shownKeyword} 
                    scale={height/100}
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