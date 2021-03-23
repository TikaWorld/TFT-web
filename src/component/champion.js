import * as React from 'react';
import { Motion, spring } from "react-motion";
import styled from 'styled-components'

const Hexa = styled.div` 
  display: inline-block;
  width: 100px;
  height: 55px;
  background: black;
  position: relative;
  
  &::before {
      content: "";
      position: absolute;
      top: -25px;
      left: 0;
      width: 0;
      height: 0;
      border-left: 50px solid transparent;
      border-right: 50px solid transparent;
      border-bottom: 25px solid black;
    }
  &::after {
      content: "";
      position: absolute;
      bottom: -25px;
      left: 0;
      width: 0;
      height: 0;
      border-left: 50px solid transparent;
      border-right: 50px solid transparent;
      border-top: 25px solid black;
  }
`

const getStyle = (x, y) => ({
    transform: `translate3d(${x}px, ${y}px, 0)  rotate(${0}deg)`,
    position: "absolute",
  });

export default class Champion extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <Motion defaultStyle={{x: 0, y: 0}} style={{x: spring(100), y: spring(100)}}>
        {({x, y}) => <div style={getStyle(x, y)}> <Hexa/></div>}
      </Motion>
    )
  }  
}
