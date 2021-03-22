import * as React from 'react';

export class Cell extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    const style ={
      width:"100px",
      border: '2px solid #000',
      height:"100px",
      display:"inline-block"
    };
    
    return(
        <div style ={style}>
       </div>
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
      width:"1000px",
      height:"1000px",
    };
    
    return(
        <div style ={style}>
        <Cell/>
        <Cell/>
        <Cell/>
        <Cell/>
        <Cell/>
        <Cell/>
        <Cell/>
        <Cell/>
        <Cell/>
        <Cell/>
        <Cell/>
       </div>
    )
  }  
}