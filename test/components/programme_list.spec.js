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
      let rootComponent = renderComponent(ProgrammeList, {params: {letter: "A"} }, { programmes: programmes });
      expect(rootComponent.find(".programme-list-item").length).to.eql(2);
    });

  });

  describe("pagination", function() {

    it("doesn't show a 'next page' button if 'more_pages' is false", function() {
      let rootComponent = renderComponent(ProgrammeList, {params: {letter: "A"} }, { more_pages: false });
      expect(rootComponent.find(".next-page").length).to.eql(0);
    });

    it("shows a 'next page' button if 'more_pages' is true", function() {
      let rootComponent = renderComponent(ProgrammeList, {params: {letter: "A"} }, { more_pages: true });
      expect(rootComponent.find(".next-page").length).to.eql(1);
    });

    it("doesn't show a 'prev page' button if current page == 1", function() {
      let rootComponent = renderComponent(ProgrammeList, {params: {letter: "A"}});
      expect(rootComponent.find(".prev-page").length).to.eql(0);
    });

    it("shows a 'previous page' button if current page > 1", function() {
      let rootComponent = renderComponent(ProgrammeList, {params: {letter: "A"}}, {more_pages: true});
      rootComponent.find('.next-page').simulate("click");
      expect(rootComponent.find(".prev-page").length).to.eql(1);
    });

  });

});
