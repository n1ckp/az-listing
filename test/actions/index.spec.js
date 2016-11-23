import { getProgrammes, GET_PROGRAMMES } from '../../src/actions';

describe("(Actions)", function() {

  describe("getProgrammes", function() {

    it("should return correct action type", function() {
      expect(getProgrammes("A", 1).type).to.eql(GET_PROGRAMMES);
    });

  });

});
