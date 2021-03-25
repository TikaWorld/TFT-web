import mockData from 'MOCK_DATA'


const LOAD   = 'my-app/timeline/LOAD';
const CREATE = 'my-app/timeline/CREATE';
const UPDATE = 'my-app/timeline/UPDATE';
const REMOVE = 'my-app/timeline/REMOVE';

const initialState = mockData.log;

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