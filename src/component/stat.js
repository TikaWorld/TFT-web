import * as React from 'react';
import styled from 'styled-components'
import Hexagon from 'react-hexagon'

const BarContainer = styled.div` 
  position: absolute;
  bottom: 32.5px;
`
const Bar = styled.div` 
  width: 100px;
  height: 8px;
  background: white;
  font-size: 7px;
`
const Hp = styled(Bar)` 
  background: red;
`
const Mp = styled(Bar)` 
  background: blue;
`
const HexCont = styled.div`
  position: relative;
`


export default function Stat(props) {
  const level = ['','#8B6331', '#d2d2d2','#FFD732'];
  const data = props.data;
  const stat = data.stat;
  return(
    <div>
      <HexCont>
        <Hexagon 
        style={{
          stroke: level[data.level], 
          strokeWidth:30
          }} 
        backgroundImage={"/champions/"+data.id+".png"}/>
      </HexCont>
      <BarContainer>
        <Bar><Hp style={{width: (data.hp/stat.max_hp*100).toString()+"%"}}>{data.hp}</Hp></Bar>
        <Bar><Mp style={{width: (data.mp/stat.max_mp*100).toString()+"%"}}>{data.mp}</Mp></Bar> 
      </BarContainer>
    </div>
  )
}
