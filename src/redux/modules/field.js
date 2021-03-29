const LOAD   = 'field/LOAD';
const CREATE = 'field/team/CREATE';
const UPDATE = 'field/champion/UPDATE';
const REMOVE = 'field/REMOVE';

const initialState = {};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case UPDATE: return { ...state, ...action.champion };
    default: return state;
  }
}

export function loadField() {
  return { type: LOAD };
}

export function createFieldTeam(team) {
  return { type: CREATE, team };
}

export function updateFieldChampion(champion) {
  return { type: UPDATE, champion };
}

export function removeField(champion) {
  return { type: REMOVE, champion };
}