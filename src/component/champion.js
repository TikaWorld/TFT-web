import * as React from 'react';
import { Motion, spring } from "react-motion";
import styled from 'styled-components'

const Hexa = styled.div` 
  display: inline-block;
  width: 100px;
  height: 55px;
  background: black;
  position: absolute;
  
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

const Stat = styled.div` 
  width: 100px;
  height: 10px;
  background: white;
  font-size: 10px;
`

function posConvert(x, y) {
  const convert = {x:x*100, y:y*80};
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
    let champion = this.props.data
    const id = this.id
    const move = this.props.move
    
    const pos = posConvert(champion.pos.x, champion.pos.y)
    return(
      <Motion defaultStyle={{x: pos.x, y: pos.y}} style={{x: spring(pos.x), y: spring(pos.y)}}>
        {({x, y}) => 
        <div style={getStyle(x, y)}> 
          <Hexa onClick={()=> move(id, champion.pos.x, champion.pos.y+1)}>
            <Stat>{champion.data.hp}</Stat>
          </Hexa>
        </div>}
      </Motion>
    )
  }  
}
