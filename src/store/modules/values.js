// Imports
import data from '../MOCK_DATA.json';

// Actions
const GET_VALUES = 'values/GET_VALUES';

// Action Creators
export const getValues = options => ({ type: GET_VALUES, options });

// Initial State
const initialState = {
  options: {
    page: 0,
    period: 0,
  },
  values: [],
};

// Reducers
export default function values(state = initialState, action) {
  switch (action.type) {
    case GET_VALUES: {
      const index = data.values.map(value => value.type.page === action.options.page && value.type.period === action.options.period).indexOf(true);
      
      if (index > -1) {
        return {
          ...state,
          values: data.values[index].value,
        };
      }
      return state;
    }
    default:
      return state;
  }
}
