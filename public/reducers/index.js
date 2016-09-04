import { combineReducers } from 'redux';
import viewCard from './viewCard';
import searchFilter from './searchFilter';

const cardApp = combineReducers({
  viewCard,
  searchFilter
});

export default cardApp;