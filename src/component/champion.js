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

function posConvert(x, y) {
  const convert = {x:x*100, y:y*75};
  if (y%2===1){
    convert.x = convert.x+50;
  }
  return convert;
}

const getStyle = (x, y) => ({
    transform: `translate3d(${x}px, ${y+25}px, 0)  rotate(${0}deg)`,
    position: "absolute",
  });

export default class Champion extends React.Component {
  constructor(props){
    super(props);
    this.id = props.uuid
  }
  render(){
    let data = this.props.data
    const id = this.id
    const move = this.props.move
    
    if (!(data.hasOwnProperty(this.id))){
      console.log(data)
      data[id] = {x:0,y:0}
    }
    const pos = posConvert(data[id].x, data[id].y)
    return(
      <Motion defaultStyle={{x: pos.x, y: pos.y}} style={{x: spring(pos.x), y: spring(pos.y)}}>
        {({x, y}) => 
        <div style={getStyle(x, y)}> 
          <Hexa onClick={()=> move(id, data[id].x, data[id].y+1)}/>
        </div>}
      </Motion>
    )
  }  
}
