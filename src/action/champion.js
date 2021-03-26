import { updateChampions } from 'redux/modules/champion';

const MOVE = "MOVE";
const ATTACK = "BASIC_ATTACK";
const SKILL = "SKILL";
const DEATH = "DEATH";
const MOVE_CANCELED = "MOVE_CANCELED";


export function actionChampion(dispatch, log, champions){
  const id = log.champion.uuid
  switch (log.action) {
    case MOVE: return moveChampion(dispatch, id, champions[id], log.target_cell);
    case MOVE_CANCELED: return moveChampion(dispatch, id, champions[id], log.start_cell);
    default: return;
  }
}

function moveChampion(dispatch, id, championData, pos){
  const r = {};
  r[id] = {};
  r[id].data = championData;
  r[id].pos = {x:pos%7 ,y: Math.trunc(pos%7)};
  
  dispatch(updateChampions(r));
}