import { updateChampionPos, updateChampionData, updateChampionAlive } from 'redux/modules/champion';

const MOVE = "MOVE";
const ATTACK = "BASIC_ATTACK";
const SKILL = "SKILL";
const DEATH = "DEATH";
const MOVE_CANCELED = "MOVE_CANCELED";


export function actionChampion(dispatch, log){
  const id = log.champion.uuid
  console.log(log)
  switch (log.action) {
    case MOVE: return moveChampion(dispatch, id, log.target_cell);
    case MOVE_CANCELED: return moveChampion(dispatch, id, log.start_cell);
    case DEATH: return setAliveChampion(dispatch, id, false);
    default: return defaultAction(dispatch, id, log.champion);
  }
}

function moveChampion(dispatch, id, pos){
  const r = {};
  r.pos = {x:pos%7 ,y: Math.trunc(pos/7)};
  r.id = id
  dispatch(updateChampionPos(r));
}

function setAliveChampion(dispatch, id, alive){
  const r = {};
  r.alive = alive;
  r.id = id
  dispatch(updateChampionAlive(r));
}

function defaultAction(dispatch, id, championData){
  const r = {};
  r.data = championData;
  r.id = id
  console.log(r)
  dispatch(updateChampionData(r));
}