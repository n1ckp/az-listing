import React from 'react';
import App from '../../src/components/app';
import ProgrammeList from '../../src/components/programme_list';
import { renderComponent } from '../test_helper';

describe('(Component) ProgrammeList', function() {
  let state;

  beforeEach(function() {
    state = { page_letter: "a", page_number: 1 };
  });

  it('renders as a <div>', () => {
    let rootComponent = renderComponent(ProgrammeList, {}, state);
    expect(rootComponent.is("div")).to.eql(true);
  });

  describe("url params", function() {

    it("redirects to global state page_letter if a different capital letter is passed as params", function() {
      let rootComponent = renderComponent(ProgrammeList, {params: {letter: "g"}}, state);
      expect(window.location.pathname).to.eql("/a-z/a");
    });

    it("Redirects to 'not_found' if invalid letter param", function() {
      let rootComponent = renderComponent(ProgrammeList, {params: {letter: "abc"}}, state);
      expect(window.location.pathname).to.eql("/not_found");
    });

  });

  describe("rendering programmes", function() {

    it("renders given programmes", function() {
      let programmes = [
        {
          id: "1",
          title: "Eastenders",
          images: {
            standard: "http://ichef.bbci.co.uk/images/ic/{recipe}/p017mqg6.jpg"
          }
        },
        {
          id: "2",
          title: "Another Programme",
          images: {
            standard: "http://ichef.bbci.co.uk/images/ic/{recipe}/p017mqg6.jpg"
          }
        },
      ];
      state.programmes = programmes;
      let rootComponent = renderComponent(ProgrammeList, {}, state);
      expect(rootComponent.find(".programme-list-item").length).to.eql(2);
    });

  });

  describe("pagination", function() {

    it("doesn't show a 'next page' button if no more pages", function() {
      state.count = 2;
      state.page_number = 1;
      state.per_page = 2;
      let rootComponent = renderComponent(ProgrammeList, {}, state);
      expect(rootComponent.find(".next-page").length).to.eql(0);
    });

    it("shows 'next page' buttons if there are more pages", function() {
      state.count = 4;
      state.page_number = 1;
      state.per_page = 2;
      let rootComponent = renderComponent(ProgrammeList, {}, state);
      expect(rootComponent.find(".next-page").length).to.eql(2);
    });

    it("doesn't show a 'prev page' button if current page == 1", function() {
      state.page_number = 1;
      let rootComponent = renderComponent(ProgrammeList, {}, state);
      expect(rootComponent.find(".prev-page").length).to.eql(0);
    });

    it("shows 'previous page' buttons if current page > 1", function() {
      state.page_number = 2;
      let rootComponent = renderComponent(ProgrammeList, {}, state);
      expect(rootComponent.find(".prev-page").length).to.eql(2);
    });

  });

});
