import { updateChampionPos, updateChampionData } from 'redux/modules/champion';

const MOVE = "MOVE";
const ATTACK = "BASIC_ATTACK";
const SKILL = "SKILL";
const DEATH = "DEATH";
const MOVE_CANCELED = "MOVE_CANCELED";


export function actionChampion(dispatch, log, champions){
  const id = log.champion.uuid
  switch (log.action) {
    case MOVE: return moveChampion(dispatch, id, log.champion, log.target_cell);
    case MOVE_CANCELED: return moveChampion(dispatch, id, log.champion, log.start_cell);
    default: return defaultAction(dispatch, id, log.champion);
  }
}

function moveChampion(dispatch, id, championData, pos){
  const r = {};
  r.pos = {x:pos%7 ,y: Math.trunc(pos/7)};
  r.id = id
  dispatch(updateChampionPos(r));
}

function defaultAction(dispatch, id, championData){
  const r = {};
  r.data = championData;
  r.id = id
  dispatch(updateChampionData(r));
}