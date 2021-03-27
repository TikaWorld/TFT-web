import * as React from 'react';
import styled from 'styled-components'

const BarContainer = styled.div` 
  position: absolute;
  bottom: 0;
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
const ChampImg = styled.img` 
  position: absolute;
  top: -5px;
  left: 17.5px;
`

export default function Stat(props) {
  const data = props.data;
  const stat = data.stat;
  return(
    <div>
    <ChampImg src={"/champions/"+data.id+".png"}/> 
    <BarContainer>
      <Bar><Hp style={{width: (data.hp/stat.max_hp*100).toString()+"%"}}>{data.hp}</Hp></Bar>
      <Bar><Mp style={{width: (data.mp/stat.max_mp*100).toString()+"%"}}>{data.mp}</Mp></Bar> 
    </BarContainer>
    </div>
  )
}
