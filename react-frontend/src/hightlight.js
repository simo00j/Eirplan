import React, { Component } from 'react';
import { ReactComponent as ReactLogo } from './plan.svg'
import styled, { keyframes } from 'styled-components'
//https://medium.com/@dimaiv/animating-complex-svg-in-react-c555630f15cd
//https://www.youtube.com/channel/UC806fwFWpiLQV5y-qifzHnA

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const StyledLogo = styled(ReactLogo)`
animation: ${rotate} infinite 20s linear;
height:25rem;
width:25rem;
display:block;
margin:auto;
`

class Stand extends Component {
    render() {
      return (
        <StyledLogo />
      );
    }
  }
  
  export default Stand;