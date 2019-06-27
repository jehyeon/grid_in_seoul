// Imports
import data from '../MOCK_DATA.json';

// Actions
const GET_VALUES = 'values/GET_VALUES';

// Action Creators
export const getValues = options => ({ type: GET_VALUES, options });

// Initial State
const initialState = {
  options: {
    pages: 1,
    period: 0,
  },
};

// Functions
function searchTheValues(options) {
  if (JSON.stringify(options) === JSON.stringify({})) {
    return -1;
  }
  const TypesOfAll = data.values.map(value => value.type);

  // Fast and limited -> to be update
  TypesOfAll.map(type => JSON.stringify(type) === JSON.stringify(options));

  return TypesOfAll.indexOf(true);
}

// Reducers
export default function values(state = initialState, action) {
  switch (action.type) {
    case GET_VALUES:
      // eslint-disable-next-line no-case-declarations
      const indexOfValue = searchTheValues(action.options);
      console.log(indexOfValue);
      if (indexOfValue > 0) {
        return data.values[indexOfValue].value;
      }
      return state;
    default:
      return state;
  }
}
