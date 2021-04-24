import React, { Component } from 'react';
import Styles from "../StyleSheet/Style";
import AnimatedLoader from "react-native-animated-loader";

export default class Loader extends Component {
  render() {
    return (
      <AnimatedLoader
        visible={true}
        overlayColor="rgba(255,255,255,0.75)"
        source={require("./template.json")}
        animationStyle={Styles.loader}
        speed={1}
      />
    );
  }
}
