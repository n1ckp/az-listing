import { GET_PROGRAMMES } from '../actions/index';

const INITIAL_STATE = { page_letter: "A", page_number: 1 };

export default function(state=INITIAL_STATE, action) {

  switch(action.type) {
    case GET_PROGRAMMES: {
      const {count, page, per_page, character} = action.payload.data.atoz_programmes;
      const page_letter = character;
      const page_number = page;
      return {...state, programmes: action.payload.data.atoz_programmes.elements, count, page_number, per_page, page_letter};
    }
    default:
      return state;
  }
}
