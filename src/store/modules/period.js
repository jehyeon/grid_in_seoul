// Imports
import data from '../MOCK_DATA.json';

// Actions
const SET_PERIOD = 'period/SET_PERIOD';
const SELECT_PERIOD = 'period/SELECT_PERIOD';
const NEXT_PERIOD = 'period/NEXT_PERIOD';
const PREVIOUS_PERIOD = 'period/PREVIOUS_PERIOD';

// Action Creators
export const setPeriod = period => ({ type: SET_PERIOD, period });
export const selectPeriod = periodId => ({ type: SELECT_PERIOD, periodId });
export const nextPeriod = () => ({ type: NEXT_PERIOD });
export const previousPeriod = () => ({ type: PREVIOUS_PERIOD });

// Initial State
const initialState = {
  cursor: 0,
  period: data.period,
};

// Reducer
export default function period(state = initialState, action) {
  switch (action.type) {
    case SET_PERIOD:
      return {
        ...state,
        pages: action.period,
      };
    case SELECT_PERIOD:
      if (action.periodId >= 0 && action.periodId <= state.period.length - 1) {
        return {
          ...state,
          cursor: action.periodId,
        };
      } return state;
    case NEXT_PERIOD:
      if (state.cursor < state.period.length - 1) {
        return {
          ...state,
          cursor: state.cursor + 1,
        };
      } return state;
    case PREVIOUS_PERIOD:
      if (state.cursor > 0) {
        return {
          ...state,
          cursor: state.cursor - 1,
        };
      } return state;
    default:
      return state;
  }
}
