import { useSelector } from 'react-redux';
import Champion from 'component/champion'
import React from 'react';


function ChampionContainer(props) {
    const championData = useSelector(state => state.champion);
    
    return (
      <Champion uuid={props.id} data={championData[props.id]} alive={championData[props.id].alive}/>
    );
}

export default React.memo(ChampionContainer)