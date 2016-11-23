import React from 'react';
import App from '../../src/components/app';
import ProgrammeList from '../../src/components/programme_list';
import { renderComponent } from '../test_helper';

describe('(Component) ProgrammeList', function() {

  it('renders as a <div>', () => {
    let rootComponent = renderComponent(ProgrammeList);
    expect(rootComponent.is("div")).to.eql(true);
  });

  describe("url params", function() {

    it("Doesn't redirect if a valid capital letter", function() {
      let rootComponent = renderComponent(ProgrammeList, {params: {letter: "A"}});
      expect(window.location.pathname).to.eql("/");
    });

    it("Doesn't redirect if a valid lowercase letter", function() {
      let rootComponent = renderComponent(ProgrammeList, {params: {letter: "g"}});
      expect(window.location.pathname).to.eql("/");
    });

    it("Doesn't redirect if '0-9'", function() {
      let rootComponent = renderComponent(ProgrammeList, {params: {letter: "0-9"}});
      expect(window.location.pathname).to.eql("/");
    });

    it("Redirects to 'not_found' if invalid letter param", function() {
      let rootComponent = renderComponent(ProgrammeList, {params: {letter: "abc"}});
      expect(window.location.pathname).to.eql("/not_found");
    });

  });

});
