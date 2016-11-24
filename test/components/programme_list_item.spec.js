import ProgrammeListItem from '../../src/components/programme_list_item';
import { renderComponent } from '../test_helper';

describe('(Component) ProgrammeListItem', function() {

  it('renders as a <div>', () => {
    let rootComponent = renderComponent(ProgrammeListItem);
    expect(rootComponent.is("div")).to.eql(true);
  });

  describe("given a valid programme as params", function() {
    let rootComponent;
    let programmeData;
    beforeEach(function() {
      programmeData = {
        id: "1",
        title: "Eastenders",
        images: {
          standard: "http://ichef.bbci.co.uk/images/ic/{recipe}/p017mqg6.jpg"
        }
      };
      rootComponent = renderComponent(ProgrammeListItem, { programme: programmeData, img_size: "large" });
    });

    it("displays the programme title", function() {
      expect(rootComponent.text()).to.include("Eastenders");
    });

    it("displays the programme image", function() {
      expect(rootComponent.find('img').src).to.eql("http://ichef.bbci.co.uk/images/ic/560x315/p017mqg6.jpg");
    });

    it("displays an image with small size", function() {
      rootComponent = renderComponent(ProgrammeListItem, { programme: programmeData, img_size: "small" });
      expect(rootComponent.find('img').src).to.eql("http://ichef.bbci.co.uk/images/ic/192x108/p017mqg6.jpg");
    });

    it("displays an image with medium size", function() {
      rootComponent = renderComponent(ProgrammeListItem, { programme: programmeData, img_size: "medium" });
      expect(rootComponent.find('img').src).to.eql("http://ichef.bbci.co.uk/images/ic/406x228/p017mqg6.jpg");
    });

  });



});
