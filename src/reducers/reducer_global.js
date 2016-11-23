import { SET_GLOBAL_STATE_VAR } from '../actions/index';

const INITIAL_STATE = {}

export default function(state=INITIAL_STATE, action) {
  switch(action.type) {
    case SET_GLOBAL_STATE_VAR:
      return {...state, ...action.payload}
    default:
      return state;
  }
}
