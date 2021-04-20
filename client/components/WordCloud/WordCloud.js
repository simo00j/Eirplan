import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Cloud from "react-native-word-cloud";
import randomColor from 'randomcolor';

//Temporaire
/*
const data = [
    { value: 'info', count: 38 },
    { value: 'React', count: 30 },
    { value: 'Nodejs', count: 28 },
    { value: 'Express.js', count: 25 },
    { value: 'HTML5', count: 33 },
    { value: 'MongoDB', count: 18 },
    { value: 'CSS3', count: 20 },
    { value: 'Webpack', count: 22 },
    { value: 'Babel.js', count: 7 },
    { value: 'ECMAScript', count: 25 },
    { value: 'Jest', count: 15 },
    { value: 'Mocha', count: 17 },
    { value: 'React Native', count: 27 },
    { value: 'Angular.js', count: 30 },
    { value: 'TypeScript', count: 15 },
    { value: 'Flow', count: 30 },
    { value: 'NPM', count: 11 },
]
*/
const keywordsArray = [
    {
        keyword: "word1",    // the actual keyword
        frequency: 10,      // the frequency of this keyword
        color: randomColor({
                luminosity: 'dark',
                hue: 'red'})     // the color of the circle that shows this keyword
    },
    {
        keyword: "word2",    // the actual keyword
        frequency: 20,      // the frequency of this keyword
        color: randomColor({
            luminosity: 'dark',
            hue: 'red'})     // the color of the circle that shows this keyword
    },
    {
        keyword: "word3",    // the actual keyword
        frequency: 30,      // the frequency of this keyword
        color: randomColor({
                luminosity: 'dark',
                hue: 'red'})     // the color of the circle that shows this keyword
    },
    {
        keyword: "word2",    // the actual keyword
        frequency: 15,      // the frequency of this keyword
        color: randomColor({
            luminosity: 'dark',
            hue: 'red'})     // the color of the circle that shows this keyword
    }
]


class WordCloud extends Component {
    /*
    constructor(props) {
        super(props);
        this.state = {
            kwords: data,
        };
        //another list,?
        this.tirage();
    }

    tirage()  {
        var dataRestants=data.slice(0);
        var dataAleatoires=[];
        while (dataAleatoires.length<15) 
            dataAleatoires.push(dataRestants.splice(Math.floor(Math.random()*dataRestants.length),1)[0]);
        console.log(this.kwords)
        this.setState({kwords: dataAleatoires})
    }
    */


    //put this in StyleSheet ?
    /*
    customRenderer(tag, size) {
        <Text
            key={tag.value}
            style={{
                fontFamily: 'Roboto, sans-serif',
                //animation: `blinker 10s linear infinite`,
                //animationDelay: `0s`,
                //fontSize: `${size / 2}em`,
                fontSize: '10em',
                padding: '5px',
                display: 'inline-flex',
                color: 'black'
                //randomColor({
                //    luminosity: 'dark',
                //    hue: 'blue'})
            }}
        >
        {tag.value}
        </Text>
    } 
    */

    //method inputkeyword ?

    render() {
        return ( <Cloud 
                    onPress={() => Alert.alert('Simple Button pressed')}
                    keywords={keywordsArray} 
                    scale={200} 
                    largestAtCenter={true} 
                    drawContainerCircle={false} 
                    containerCircleColor={'#345678'}
                    />
        )
    }
}

export default WordCloud;