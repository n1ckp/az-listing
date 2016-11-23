import App from '../../src/components/app';
import { renderComponent } from '../test_helper';

describe('(Component) App', function() {
  let rootComponent;

  beforeEach(function() {
    rootComponent = renderComponent(App);
  });

  it('renders as a <div>', () => {
    expect(rootComponent.is("div")).to.eql(true);
  });
});
