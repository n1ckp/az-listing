import AToZMenu from '../../src/components/a_to_z_menu';
import { renderComponent } from '../test_helper';

describe("(Component) AToZMenu", function() {
  let rootComponent;
  beforeEach(function() {
    rootComponent = renderComponent(AToZMenu);
  });

  it("renders a <div> with correct class", function() {
    expect(rootComponent.is("div")).to.eql(true);
    expect(rootComponent).to.have.class("atoz-menu");
  });

  it("includes letters of the alphabet", function() {
    expect(rootComponent.text()).to.include("A");
    expect(rootComponent.text()).to.include("Z");
  });

});
