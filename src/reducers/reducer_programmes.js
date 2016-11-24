import { GET_PROGRAMMES } from '../actions/index';

const INITIAL_STATE = {}

export default function(state=INITIAL_STATE, action) {
  switch(action.type) {
    case GET_PROGRAMMES:
      const { count, page, per_page } = action.payload.data.atoz_programmes;
      const more_pages = (count > page*per_page);
      return {...state, programmes: action.payload.data.atoz_programmes.elements, more_pages};
    default:
      return state;
  }
}
