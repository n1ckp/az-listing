import App from '../../src/components/app';
import { renderComponent } from '../test_helper';

describe('(Component) App', function() {
  let rootComponent;

  beforeEach(function() {
    rootComponent = renderComponent(App);
  });

  it('renders as a <div>', function() {
    expect(rootComponent.is("div")).to.eql(true);
  });

  it('renders the AToZMenu', function() {
    expect(rootComponent.find(".atoz-menu").length).to.eql(1);
  });
});
