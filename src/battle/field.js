import * as React from 'react';
import styled from 'styled-components'

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

export class Cell extends React.Component {
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

export class Field extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    const style ={
      position: "absolute",
      width:"700px",
      height:"1000px",
      top: "70%",
      left: "50%",
      transform: "translate(-50%, -50%)"
    };
    const getCellRow = (i) => {
      const isOdd = i%2
      console.log(isOdd, i)
      let style = {paddingTop: "25px", width:"700px", height:"50px"}
      if (isOdd){
        style = {paddingTop: "25px", paddingLeft: "50px", width:"700px", height:"50px"}
      }

      return <div style={style}>
        <Cell id={1+i*7}/>
        <Cell id={2+i*7}/>
        <Cell id={3+i*7}/>
        <Cell id={4+i*7}/>
        <Cell id={5+i*7}/>
        <Cell id={6+i*7}/>
        <Cell id={7+i*7}/>
      </div>
    }
    
    return(
        <div style ={style}>
          {getCellRow(0)}  
          {getCellRow(1)}  
          {getCellRow(2)}  
          {getCellRow(3)}  
          {getCellRow(4)}  
          {getCellRow(5)}  
          {getCellRow(6)}  
          {getCellRow(7)}  
       </div>
    )
  }  
}