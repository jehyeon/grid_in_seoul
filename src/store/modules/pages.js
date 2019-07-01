// Imports
import data from '../MOCK_DATA.json';

// Actions
const SET_PAGES = 'pages/SET_PAGES';
const SELECT_PAGE = 'pages/SELECT_PAGE';
const NEXT_PAGE = 'pages/NEXT_PAGE';
const PREVIOUS_PAGE = 'pages/PREVIOUS_PAGE';

// Action Creators
export const setPages = pages => ({ type: SET_PAGES, pages });
export const selectPage = pageId => ({ type: SELECT_PAGE, pageId });
export const nextPage = () => ({ type: NEXT_PAGE });
export const previousPage = () => ({ type: PREVIOUS_PAGE });

// Initial State
const initialState = {
  cursor: 0,
  pages: data.pages,
  pageName: data.pages[0],
};

// Reducer
export default function pages(state = initialState, action) {
  switch (action.type) {
    case SET_PAGES:
      return {
        ...state,
        pages: action.pages,
      };
    case SELECT_PAGE:
      if (action.pageId >= 0 && action.pageId <= state.pages.length - 1) {
        return {
          ...state,
          cursor: action.pageId,
          pageName: data.pages[action.pageId],
        };
      } return state;
    case NEXT_PAGE:
      if (state.cursor < state.pages.length - 1) {
        return {
          ...state,
          cursor: state.cursor + 1,
          pageName: data.pages[state.cursor + 1],
        };
      } return state;
    case PREVIOUS_PAGE:
      if (state.cursor > 0) {
        return {
          ...state,
          cursor: state.cursor - 1,
          pageName: data.pages[state.cursor - 1],
        };
      } return state;
    default:
      return state;
  }
}
