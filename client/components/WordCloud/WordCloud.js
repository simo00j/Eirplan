import React, { Component } from 'react';
import KeywordsCloud from "./lib/cloud";
import randomColor from 'randomcolor';


//Temporaire

// const data = [
//     { value: 'info', count: 38 },
//     { value: 'React', count: 30 },
//     { value: 'Nodejs', count: 28 },
//     { value: 'Express.js', count: 25 },
//     { value: 'HTML5', count: 33 },
//     { value: 'MongoDB', count: 18 },
//     { value: 'CSS3', count: 20 },
//     { value: 'Webpack', count: 22 },
//     { value: 'Babel.js', count: 7 },
//     { value: 'ECMAScript', count: 25 },
//     { value: 'Jest', count: 15 },
//     { value: 'Mocha', count: 17 },
//     { value: 'React Native', count: 27 },
//     { value: 'Angular.js', count: 30 },
//     { value: 'TypeScript', count: 15 },
//     { value: 'Flow', count: 30 },
//     { value: 'NPM', count: 11 },
// ]

const data = [
    { text: 'info', value: 38 },
    { text: 'React', value: 30 },
    { text: 'Nodejs', value: 28 },
    { text: 'Express.js', value: 25 },
    { text: 'HTML5', value: 33 },
    { text: 'MongoDB', value: 18 },
    { text: 'CSS3', value: 20 },
    { text: 'Webpack', value: 22 },
    { text: 'Babel.js', value: 7 },
    { text: 'ECMAScript', value: 25 },
    { text: 'Jest', value: 15 },
    { text: 'Mocha', value: 17 },
    { text: 'React Native', value: 27 },
    { text: 'Angular.js', value: 30 },
    { text: 'TypeScript', value: 15 },
    { text: 'Flow', value: 30 },
    { text: 'NPM', value: 11 },
]

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
        keyword: "word4",    // the actual keyword
        frequency: 15,      // the frequency of this keyword
        color: randomColor({
            luminosity: 'dark',
            hue: 'red'})     // the color of the circle that shows this keyword
    }
]

class WordCloud extends Component {
    
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         kwords: keywordsArray,
    //     };
    //     //another list,?
    //     this.tirage(keywordsArray);
    // }

    // tirage(data)  {
    //     var dataRestants=data.slice(0);
    //     var dataAleatoires=[];
    //     while (dataAleatoires.length<15) 
    //         dataAleatoires.push(dataRestants.splice(Math.floor(Math.random()*dataRestants.length),1)[0]);
    //     console.log(this.kwords)
    //     this.setState({kwords: dataAleatoires})
    // }
    


    //put this in StyleSheet ?
    
    // customRenderer(tag, size) {
    //     <Pressable
    //     onPress={() => {
    //       alert("hello");
    //     }}>
    //         <Text
    //             key={tag.value}
    //             style={{
    //                 fontFamily: 'Roboto, sans-serif',
    //                 //animation: `blinker 10s linear infinite`,
    //                 //animationDelay: `0s`,
    //                 //fontSize: `${size / 2}em`,
    //                 fontSize: '10em',
    //                 padding: '5px',
    //                 display: 'inline-flex',
    //                 color: 'black'
    //                 //randomColor({
    //                 //    luminosity: 'dark',
    //                 //    hue: 'blue'})
    //             }}
    //         >
    //         {tag.value}
    //         </Text>
    //     </Pressable>
    // } 
    

    //method inputkeyword ?

    render() {
        return ( <KeywordsCloud 
                    keywords={keywordsArray} 
                    scale={200} 
                    largestAtCenter={true} 
                    drawContainerCircle={false} 
                    containerCircleColor={'#345678'}
                    handler={this.props.OnPressHandler}
                    />
        )
    }

}

export default WordCloud;