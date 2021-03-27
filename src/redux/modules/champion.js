const LOAD   = 'champions/LOAD';
const CREATE = 'champions/CREATE';
const UPDATE_POS = 'champions/UPDATE/POS';
const UPDATE_DATA = 'champions/UPDATE/DATA';
const UPDATE_ALIVE = 'champions/UPDATE/ALIVE';
const REMOVE = 'champions/REMOVE';

const initialState = {};

export default function reducer(state = initialState, action = {}) {
  const champion = action.champion
  
  switch (action.type) {
    // do reducer stuff
    case CREATE: return { ...state, ...action.champion };
    case UPDATE_DATA: 
      state[champion.id].data = champion.data;
      return { ...state };
    case UPDATE_POS:
      state[champion.id].pos = champion.pos;
      return { ...state };
    case UPDATE_ALIVE:
      state[champion.id].alive = champion.alive;
      return { ...state };
    default: return state;
  }
}

export function loadChampions() {
  return { type: LOAD };
}

export function createChampions(champion) {
  return { type: CREATE, champion };
}

export function updateChampionPos(champion) {
  return { type: UPDATE_POS, champion };
}

export function updateChampionData(champion) {
  return { type: UPDATE_DATA, champion };
}

export function updateChampionAlive(champion) {
  return { type: UPDATE_ALIVE, champion };
}

export function removeChampions(champion) {
  return { type: REMOVE, champion };
}