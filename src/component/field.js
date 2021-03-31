import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import Champion from 'container/champion.js'
import { createChampions } from 'redux/modules/champion';
import { updateFieldChampion } from 'redux/modules/field';
import { useDispatch, useSelector } from 'react-redux';
import { postField } from 'api/field'
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
  const item = props.item
  const position = props.pos.y<4?'red':'blue'
  const dispatch = useDispatch();
  const [, drop] = useDrop(
    () => ({
      accept: ItemTypes.CHAMPION,
      drop: item => {
        const r = {};
        r[props.id] = {
          championId:item.id, 
          pos:props.pos, 
          level: item.level?item.level:1, 
          team: position
        };
        dispatch(updateFieldChampion(r));},
      collect: monitor => ({
        isOver: !!monitor.isOver(),
      })
    }))
  return(
    <HexCont ref={drop} >
      <Hexagon style={{fill: '#222222', stroke: '#111111', strokeWidth: 20}}/>
    </HexCont>
  )
}  


const style ={
  position: 'absolute',
  width:"700px",
  height:"750px",
};
export default function Field() {
  const dispatch = useDispatch();
  const field = useSelector(state => state.field);
  const champions = useSelector(state => state.champion);
  const cell = {};

  useEffect(async () => {
    const r = await postField(field)
    const dispatchResult = championsData =>{
      Object.keys(championsData).map(key => {
      const r = {};
      const data = championsData[key]
      r[data["uuid"]]={pos: cell[key], data: data, alive: true};
      dispatch(createChampions(r));
    })}
    dispatchResult(r.blue.champions)
    dispatchResult(r.red.champions)
    
  }, [field]);
  
  const getCellRow = i => {
    const isOdd = i%2
    let style = {width:"700px", height:"86.5px"}
    if (isOdd){style = {paddingLeft: "50px", width:"700px", height:"86.5px"}}
    return <div style={style} key={i}>{[1,2,3,4,5,6,7].map(j => {
      const index = j+i*7;
      cell[index-1] = {x:j-1, y:i};
      return (<Cell id={index} pos={{x:j-1, y:i}} key={index}/>);
      })}</div>
  }
  const createChampion = championData => {
    const data = championData.data
    return <Champion key={data.uuid} id={data.uuid}/>
  };
  return(
    <FieldCont>
      <div style ={style}>{[0,1,2,3,4,5,6,7].map(i => {return (getCellRow(i));})}</div>
      {Object.keys(champions).map(key => {return createChampion(champions[key])})}   
    </FieldCont>
  )
}