import * as React from 'react';
import { Motion, spring } from "react-motion";
import styled from 'styled-components'
import Stat from 'component/stat'

const Cont = styled.div` 
  display: inline-block;
  width: 100px;
  height: 119.09px;
  opacity: 1;
  transition: opacity 300ms;
  position: absolute;
  top: -25px;
`

function posConvert(x, y) {
  const convert = {x:x*100, y:y*86.5};
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
    this.id = props.uuid;
  }
  render(){
    const champion = this.props.data;
    const pos = posConvert(champion.pos.x, champion.pos.y);
    const alive = Number(this.props.alive);
    return(
      <Motion defaultStyle={{x: pos.x, y: pos.y}} style={{x: spring(pos.x), y: spring(pos.y)}}>
        {({x, y}) => 
        <div style={getStyle(x, y)}>
          <Cont style={{opacity: alive}}><Stat data={champion.data}/></Cont>
        </div>}
      </Motion>
    )
  }  
}
