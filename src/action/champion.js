import { updateChampions } from 'redux/modules/champion';

export function moveChampion(dispatch, id, championData, pos){
  const r = {};
  r.data = championData[id];
  r[id] = {};
  r[id].pos = pos;
  dispatch(updateChampions(r));
}