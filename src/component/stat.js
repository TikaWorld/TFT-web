/* eslint-disable react/prop-types */
import * as React from 'react';
import styled from 'styled-components'
import Hexagon from 'react-hexagon'

const BarContainer = styled.div` 
  position: absolute;
  width: 88.5px;
  bottom: 7.5px;
  left: 6px;
`
const HexCont = styled.div`
  overflow: hidden;
  position: relative;
`
const Hp = styled(HexCont)`
  clip-path: inset(0% 50% 0% 0%);
`
const Mp = styled(HexCont)` 
  clip-path: inset(0% 0% 0% 50%);
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
          strokeWidth:30,
          }}/>
      </HexCont>
      <BarContainer>
        <HexCont>
          <Hexagon 
          style={{
            stroke: 'white', 
            strokeWidth:30,
            }} 
          backgroundImage={"/champions/"+data.id+".png"}/>
        </HexCont>
      </BarContainer>
      <BarContainer>
        <Hp>
          <Hexagon 
          style={{
            stroke: 'red', 
            strokeWidth:30,
            strokeDashoffset: 750/(750/((data.hp/stat.max_hp)*750))+750,
            strokeDasharray: 750
            }}/>
        </Hp>
      </BarContainer>
      <BarContainer>
        <Mp>
          <Hexagon 
          style={{
            stroke: data.mp?'blue':'unset', 
            strokeWidth:30,
            strokeDashoffset: 750/(750/-((data.mp/stat.max_mp)*750)),
            strokeDasharray: 750
            }}/>
        </Mp>
      </BarContainer>
    </div>
  )
}
