import { combineReducers } from 'redux';
import pages from './pages';
import map from './map';
import values from './values';
import period from './period';

export default combineReducers({
  pages,
  period,
  map,
  values,
});
