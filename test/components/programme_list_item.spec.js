import ProgrammeListItem from '../../src/components/programme_list_item';
import { renderComponent } from '../test_helper';

describe('(Component) ProgrammeListItem', function() {

  it('renders as a <div>', () => {
    let rootComponent = renderComponent(ProgrammeListItem);
    expect(rootComponent.is("div")).to.eql(true);
  });

  describe("given a valid programme as params", function() {
    let rootComponent;
    beforeEach(function() {
      let programmeData = {
        id: "1",
        title: "Eastenders",
        images: {
          standard: "http://ichef.bbci.co.uk/images/ic/{recipe}/p017mqg6.jpg"
        }
      };
      rootComponent = renderComponent(ProgrammeListItem, programmeData);
    });

    it("displays the programme title", function() {
      expect(rootComponent.text()).to.include("Eastenders");
    });

    it("displays the programme image", function() {
      expect(rootComponent.find('img').length).to.eql(1);
    });

  });



});
