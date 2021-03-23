// Actions
const LOAD   = 'my-app/widgets/LOAD';
const CREATE = 'my-app/widgets/CREATE';
const UPDATE = 'my-app/widgets/UPDATE';
const REMOVE = 'my-app/widgets/REMOVE';

// Reducer
export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    // do reducer stuff
    default: return state;
  }
}

// Action 생성자
export function loadChampions() {
  return { type: LOAD };
}

export function createChampionst(widget) {
  return { type: CREATE, widget };
}

export function updateChampions(widget) {
  return { type: UPDATE, widget };
}

export function removeChampions(widget) {
  return { type: REMOVE, widget };
}