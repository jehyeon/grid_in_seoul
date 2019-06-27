// Imports
import data from '../MOCK_DATA.json';

// Actions
const GET_MAP_DATA = 'GET_MAP_DATA';
// const SET_MAP_DATA = 'SET_MAP_DATA';

// Action Creators
export const getMapData = () => ({ type: GET_MAP_DATA });

// Functions
// function fromMOCK() {
//   return data.area.value;
// }

// Initial State
const initialState = {
  mapID: data.area.id,
  mapData: data.area.value,
};

// Reducer
export default function map(state = initialState, action) {
  switch (action.type) {
    case GET_MAP_DATA:
      return {
        mapID: data.area.id,
        mapData: data.area.value,
      };
    default:
      return state;
  }
}
