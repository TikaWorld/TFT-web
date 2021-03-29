import * as React from 'react';
import styled from 'styled-components'
import Champion from 'container/champion.js'
import { createChampions } from 'redux/modules/champion';
import { updateFieldChampion } from 'redux/modules/field';
import { useDispatch } from 'react-redux';
import mockData from 'MOCK_DATA'
import Hexagon from 'react-hexagon'
import { useDrop } from 'react-dnd'
import { ItemTypes } from 'itemType'

const HexCont = styled.div` 
  width: 100px;
  height: 115.09px;
  display: inline-block;
`

const FieldCont = styled.div`
  height: 750px;
`

function Cell(props) {
  const dispatch = useDispatch();
  const [, drop] = useDrop(
    () => ({
      accept: ItemTypes.CHAMPION,
      drop: (item) => {dispatch(updateFieldChampion(item)); console.log(item)},
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      })
    }))
  return(
    <HexCont ref={drop} >
      <Hexagon style={{fill: '#222222', stroke: '#111111', strokeWidth: 20}}/>
    </HexCont>
  )
}  


const mock_champion_data = {};

const style ={
  position: 'absolute',
  width:"700px",
  height:"750px",
};
export default function Field() {
  const dispatch = useDispatch();
  const cell = {};
      
  const getCellRow = (i) => {
    const isOdd = i%2
    let style = {width:"700px", height:"86.5px"}
    if (isOdd){style = {paddingLeft: "50px", width:"700px", height:"86.5px"}}
    return <div style={style} key={i}>{[1,2,3,4,5,6,7].map((j) => {
      const index = j+i*7;
      cell[index-1] = {x:j-1, y:i};
      return (<Cell id={index} key={index}/>);
      })}</div>
  }
  const createChampion = (c, data) => {
    const r = {};
    r[data["uuid"]]={pos: cell[c], data: data, alive: true};
    dispatch(createChampions(r));
    return <Champion key={data["uuid"]} id={data["uuid"]}/>
  };
  
  return(
    <FieldCont>
      <div style ={style}>{[0,1,2,3,4,5,6,7].map((i) => {return (getCellRow(i));})}</div>
      {Object.keys(mock_champion_data).map((key) => {return createChampion(key, mock_champion_data[key])})}   
    </FieldCont>
  )
}