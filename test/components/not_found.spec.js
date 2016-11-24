import NotFound from '../../src/components/not_found';
import { renderComponent } from '../test_helper';

describe("(Component) NotFound", function() {
  let rootComponent;
  beforeEach(function() {
    rootComponent = renderComponent(NotFound);
  });

  it("renders a <div> with correct class", function() {
    expect(rootComponent.is("div")).to.eql(true);
    expect(rootComponent).to.have.class("not-found");
  });

  it("says 'Page not found'", function() {
    expect(rootComponent.text()).to.include("Page not found");
  });

});
