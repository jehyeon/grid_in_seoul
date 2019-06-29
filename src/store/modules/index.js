import { combineReducers } from 'redux';
import pages from './pages';
import map from './map';
import values from './values';

export default combineReducers({
  pages,
  map,
  values,
});
