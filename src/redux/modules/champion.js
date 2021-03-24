// Actions
const LOAD   = 'my-app/widgets/LOAD';
const CREATE = 'my-app/widgets/CREATE';
const UPDATE = 'my-app/widgets/UPDATE';
const REMOVE = 'my-app/widgets/REMOVE';

const initialState = {};
// Reducer
export default function reducer(state = initialState, action = {}) {
  console.log(action);
  
  switch (action.type) {
    // do reducer stuff
    case UPDATE: return { ...state, ...action.champion };
    default: return state;
  }
}

// Action 생성자
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