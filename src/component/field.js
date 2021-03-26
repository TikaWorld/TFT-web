import * as React from 'react';
import styled from 'styled-components'
import Champion from 'container/champion.js'
import { createChampions } from 'redux/modules/champion';
import { useDispatch } from 'react-redux';
import mockData from 'MOCK_DATA'

const Hexa = styled.div` 
  display: inline-block;
  width: 100px;
  height: 55px;
  background: pink;
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
      border-bottom: 25px solid pink;
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
      border-top: 25px solid pink;
  }
`

class Cell extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
        <Hexa>
       </Hexa>
    )
  }  
}

const mock_champion_data = mockData.field;

const style ={
  position: "absolute",
  width:"700px",
  height:"1000px",
};
export function Field() {
  const dispatch = useDispatch();
  const cell = {};
      
  const getCellRow = (i) => {
    const isOdd = i%2
    let style = {paddingTop: "25px", width:"700px", height:"55px"}
    if (isOdd){style = {paddingTop: "25px", paddingLeft: "50px", width:"700px", height:"55px"}}
    return <div style={style} key={i}>{[1,2,3,4,5,6,7].map((j) => {
      const index = j+i*7;
      cell[index-1] = {x:j-1, y:i};
      return (<Cell id={index} key={index}/>);
      })}</div>
  }
  const createChampion = (c, data) => {
    const r = {};
    r[data["uuid"]]={pos: cell[c], data: data};
    dispatch(createChampions(r));
    return <Champion key={data["uuid"]} id={data["uuid"]}/>
  };
  
  return(
    <div>
      <div style ={style}>{[0,1,2,3,4,5,6,7].map((i) => {return (getCellRow(i));})}</div>
      {Object.keys(mock_champion_data).map((key) => {return createChampion(key, mock_champion_data[key])})}   
    </div>
  )
  
}