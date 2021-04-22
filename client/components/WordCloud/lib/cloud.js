import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import Canvas from 'react-native-canvas';
import {Svg, Circle, G} from 'react-native-svg';
import { generateCircles, calcPositions, drawCirclesOnCanvas } from './utils';

class KeywordsCloud extends React.Component {

  constructor(props) {
    super(props);
    const { keywords,scale, largestAtCenter, drawContainerCircle,containerCircleColor } = this.props;
    const center = { x: 300 / 2, y: 300 / 2 };
    const circles = generateCircles(
        keywords, center, scale, largestAtCenter);
    calcPositions(circles);
    this.state = {
      circles : circles,
    };
  }

  selectTab = tabName => () => {
    this.setState({ selectedTab: tabName });
  }

  handleCanvas = (canvas) => {
    const { keywords,scale, largestAtCenter, drawContainerCircle,containerCircleColor } = this.props;
    if (canvas) {
      canvas.width = 300 
      canvas.height = 300 
      drawCirclesOnCanvas(this.state.circles, canvas, drawContainerCircle, containerCircleColor);
    }
  }

  render() { 
    return (
      <View>
        <View style={{justifyContent:'center',alignItems:'center', width:300, height:300}}>
          <Canvas ref={canvas => {this.handleCanvas(canvas);}} />
        </View>
        <View style={{justifyContent:'center',alignItems:'center',position: 'absolute', width:300, height:300}}>
          <Svg>
            <G category="Wall"> 
              {this.state.circles.map((c) => {
                return (
                  <Circle cx={c.x} cy={c.y} key={c.label} r={c.size} color="transparent" onPress={() => {this.props.handler(c)}}/>
                );
              })}
            </G>
          </Svg> 
        </View>
      </View> 
    );
  }
}

KeywordsCloud.defaultProps = {
    scale: 250,
    largestAtCenter: true,
    drawContainerCircle: false,
    containerCircleColor: '#FF000030'
};

KeywordsCloud.propTypes = {
  keywords: PropTypes.arrayOf(PropTypes.shape(
    { keyword: PropTypes.string, frequency: PropTypes.number, color: PropTypes.string },
  )).isRequired,
  scale: PropTypes.number,
  largestAtCenter: PropTypes.bool,
  drawContainerCircle: PropTypes.bool,
  containerCircleColor: PropTypes.string
};

export default KeywordsCloud;
 