// Imports
import data from '../MOCK_DATA.json';

// Actions
const GET_VALUES = 'values/GET_VALUES';

// Action Creators
export const getValues = options => ({ type: GET_VALUES, options });

// Initial State
const initialState = {
  options: {},
};

// Functions
// function searchTheValues(options) {
//   const TypesOfAll = data.values.map(value => value.type);

//   // Object.keys(options).map(optionName => (
//   //   data.values.type[optionName] === options[optionName]
//   // ));
// }

// Reducers
export default function values(state = initialState, action) {
  switch (action.type) {
    case GET_VALUES:
      return searchTheValues(action.options);
      // action.options의 값이 없는 경우 -> return state;
    default:
      return state;
  }
}
