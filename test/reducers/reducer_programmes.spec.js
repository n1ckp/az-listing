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

    it("sets the global state for programmes", function() {
      let initialState = {};
      let action = {
        type: GET_PROGRAMMES,
        payload: { data: { atoz_programmes: {
          elements: [
            "Eastenders", "Another Programme"
          ]
        }}}};
      expect(reducer(initialState, action)).to.eql({programmes:["Eastenders", "Another Programme"]});
    });

  });

});
