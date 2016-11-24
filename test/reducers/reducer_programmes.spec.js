import reducer from '../../src/reducers';
import { GET_PROGRAMMES } from '../../src/actions';

describe("(Reducer) ProgrammeReducer", function() {

  it("makes no changes to state if unknown action type", function() {
    let initialState = {foo: "bar"};
    let action = {
      type: "blah",
      payload: "blah"
    };
    expect(reducer(initialState, action)).to.eql(initialState);
  });

  describe("GET_PROGRAMMES",function() {
    let action;
    beforeEach(function() {
      action = {
        type: GET_PROGRAMMES,
        payload: { data: { atoz_programmes: {
          count: 2,
          page: 1,
          per_page: 20,
          elements: [
            "Eastenders", "Another Programme"
          ]
        }}}};
    });

    it("sets the global state for programmes", function() {
      const initialState = {};
      expect(reducer(initialState, action).programmes).to.eql(["Eastenders", "Another Programme"]);
    });

  });

});
