// Action 타입 정의
const UPDATE_LAST_PAGE_ID = 'pages/UPDATE_LAST_PAGE_ID';
const NEXT_PAGE = 'pages/NEXT_PAGE';
const PREVIOUS_PAGE = 'pages/PREVIOUS_PAGE';
const SELECT_PAGE = 'pages/SELECT_PAGE';

// Action 생성함수 정의
export const updateLastPageId = lastPageId => ({ type: UPDATE_LAST_PAGE_ID, lastPageId });
export const nextPage = () => ({ type: NEXT_PAGE });
export const previousPage = () => ({ type: PREVIOUS_PAGE });
export const selectPage = pageId => ({ type: SELECT_PAGE, pageId });

// InitialStore 정의
const initialStore = {
  pageId: 0,
  lastPageId: 1,
};

// Reducer 작성
export default function pages(state = initialStore, action) {
  switch (action.type) {
    case UPDATE_LAST_PAGE_ID:
      return {
        ...state,
        lastPageId: action.lastPageId,
      };
    case NEXT_PAGE:
      if (state.pageId < state.lastPageId) {
        return {
          ...state,
          pageId: state.pageId + 1,
        };
      } return state;
    case PREVIOUS_PAGE:
      if (state.pageId > 0) {
        return {
          ...state,
          pageId: state.pageId - 1,
        };
      } return state;
    case SELECT_PAGE:
      if (action.pageId >= 0 && action.pageId <= state.lastPageId) {
        return {
          ...state,
          pageId: action.pageId,
        };
      } return state;
    // Not expected action type
    default:
      return state;
  }
}
