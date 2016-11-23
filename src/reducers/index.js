import { combineReducers } from 'redux';
import MyGlobalStateReducer from './reducer_global';

const rootReducer = combineReducers({
  myGlobalStateVar: MyGlobalStateReducer
});

export default rootReducer;
