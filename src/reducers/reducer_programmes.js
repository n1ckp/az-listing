import { GET_PROGRAMMES } from '../actions/index';

const INITIAL_STATE = {}

export default function(state=INITIAL_STATE, action) {
  switch(action.type) {
    case GET_PROGRAMMES:
      return {...state, programmes: action.payload.data.atoz_programmes.elements}
    default:
      return state;
  }
}
