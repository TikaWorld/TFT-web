import mockData from 'MOCK_DATA'


const LOAD   = 'timeline/LOAD';
const CREATE = 'timeline/CREATE';
const UPDATE = 'timeline/UPDATE';
const REMOVE = 'timeline/REMOVE';

const initialState = [];

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case UPDATE: return action.timeline;
    default: return state;
  }
}


export function loadTimeline() {
  return { type: LOAD };
}

export function createTimeline(timeline) {
  return { type: CREATE, timeline };
}

export function updateTimeline(timeline) {
  return { type: UPDATE, timeline };
}

export function removeChampions(timeline) {
  return { type: REMOVE, timeline };
}