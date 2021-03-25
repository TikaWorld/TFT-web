const LOAD   = 'my-app/champions/LOAD';
const CREATE = 'my-app/champions/CREATE';
const UPDATE = 'my-app/champions/UPDATE';
const REMOVE = 'my-app/champions/REMOVE';

const initialState = {};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // do reducer stuff
    case UPDATE: return { ...state, ...action.champion };
    default: return state;
  }
}

export function loadChampions() {
  return { type: LOAD };
}

export function createChampions(champion) {
  return { type: CREATE, champion };
}

export function updateChampions(champion) {
  return { type: UPDATE, champion };
}

export function removeChampions(champion) {
  return { type: REMOVE, champion };
}