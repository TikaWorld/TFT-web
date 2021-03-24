import * as React from 'react';
import styled from 'styled-components'
import Champion from 'container/champion.js'
import { updateChampions } from 'redux/modules/champion';
import { useSelector, useDispatch } from 'react-redux';

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

const mock_champion_data = [{"name": "a", "uuid": "11a4af6c-1783-4771-990f-1ec543c0752b", "id": "TFT4_Yasuo", "level": 3, "team": "2884440678480", "traits": ["Set4_Exile", "Duelist"], "skill": "striking_steel", "state": [], "hp": 1782, "mp": 0, "stat": {"max_hp": 1782, "max_mp": 45, "mp": 0, "heist": 825.0, "attack_damage": 162, "spell_power": 100, "critical_strike_chance": 25, "critical_strike_damage": 150, "range": 1, "armor": 30, "magic_resistance": 20, "attack_speed": 0.7, "dodge_chance": 0, "damage_reduce": 0, "damage_increase": 0}, "barrier": 891.0},
  {"name": "a", "uuid": "2", "id": "TFT4_Yasuo", "level": 3, "team": "2884440678480", "traits": ["Set4_Exile", "Duelist"], "skill": "striking_steel", "state": [], "hp": 1782, "mp": 0, "stat": {"max_hp": 1782, "max_mp": 45, "mp": 0, "heist": 825.0, "attack_damage": 162, "spell_power": 100, "critical_strike_chance": 25, "critical_strike_damage": 150, "range": 1, "armor": 30, "magic_resistance": 20, "attack_speed": 0.7, "dodge_chance": 0, "damage_reduce": 0, "damage_increase": 0}, "barrier": 891.0}]

export function Field() {
  const dispatch = useDispatch();
  const style ={
    position: "absolute",
    width:"700px",
    height:"1000px",
  };
  const getCellRow = (i) => {
    const isOdd = i%2
    let style = {paddingTop: "25px", width:"700px", height:"50px"}
    if (isOdd){style = {paddingTop: "25px", paddingLeft: "50px", width:"700px", height:"50px"}}
    return <div style={style} key={i}>{[1,2,3,4,5,6,7].map((j) => {return (<Cell id={j+i*7} key={j+i*7}/>);})}</div>
  }
  let x = 0;
  const createChampion = (data) => {
    const r = {};
    r[data["uuid"]]={x: x, y: 0};
    x = x+1;
    dispatch(updateChampions(r));
    return <Champion key={data["uuid"]} id={data["uuid"]}/>
  };
    
  return(
    <div>
      <div style ={style}>{[0,1,2,3,4,5,6,7].map((i) => {return (getCellRow(i));})}</div>
      {mock_champion_data.map((data) => {return createChampion(data)})}   
    </div>
  )
  
}