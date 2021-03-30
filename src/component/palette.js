/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styled from 'styled-components';
import championsData from 'data/champions';
import { useDrag } from 'react-dnd';
import { ItemTypes } from 'itemType';

const Cont = styled.div` 
  width: 100%;
  height: 0px;
  transition: height 300ms;
`;

const PaletteCont = styled.div` 
  position: fixed;
  width: 100%;
  height: 300px;
  background: #222222;
  box-shadow: 0 0 0 5px #808080 inset; 
  transition: bottom 300ms;
  bottom: -5px;
`;

const ChampionListCont = styled.div` 
  margin: 10px;
`;

const ChampionCont = styled.div`
  margin: 0 2px;
  display: inline-block;
  width: 50px;
  height: 50px;
  border-radius: 5px;
  z-index: 2;
`;

const ChampionImg = styled.img`
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 2px;
  z-index: 1;
`;

const ChampionText = styled.div`
  width: 100%;
  height: 14px;
  text-align: center;
  position: absolute;
  color: white;
  top: 37px;
  font-size: 9px;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  overflow: hidden;
  z-index: 2;
`;

const ChampionPrice = styled.div` 
  position: absolute;
  width: 15px;
  height: 10px;
  border-radius: 0 2px 0 0;
  background: #222222;
  top: -1px;
  right: -1px;
  text-align: center;
  font-size: 7px;
  color: white;
  z-index: 2;
`;

const Button = styled.div`
  position: absolute;
  top: -30px;
  border-radius: 5px 5px 0 0;
  width: 100px;
  height: 30px;
  background: #808080;
`;

export default function Palette(props) {
  const [paletteSlide, setPaletteSlide] = useState(false);
  const onSlide = () => {
    setPaletteSlide(!paletteSlide);
  };
  const pos = paletteSlide ? -5 : -300;
  const extraHeight = paletteSlide ? 300 : -0;
  return (
    <Cont style={{ height: extraHeight }}>
      <PaletteCont style={{ bottom: pos }}>
        <Button onClick={() => onSlide()} />
        <ChampionListCont>
          {championsData.map(d => <Champion key={d.championId} data={d} />)}
        </ChampionListCont>
      </PaletteCont>
    </Cont>
  );
}

function Champion(props) {
  const costColor = ['', '#7c7c7c', '#11b288', '#207ac6', '#c13fd7', '#feb83f'];
  const { data } = props;
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.CHAMPION,
    item: { id: data.championId },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <ChampionCont ref={drag} style={{ border: `3px solid ${costColor[data.cost]}` }}>
      <div style={{ position: 'relative' }}>
        <ChampionImg src={`/champions/${data.championId}.png`} />
        <ChampionPrice style={{ background: costColor[data.cost] }}>{`$${data.cost}`}</ChampionPrice>
        <ChampionText>{data.name}</ChampionText>
      </div>
    </ChampionCont>
  );
}
