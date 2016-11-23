import ProgrammeList from '../../src/components/programme_list';
import { renderComponent } from '../test_helper';

describe('(Component) ProgrammeList', function() {
  let rootComponent;

  beforeEach(function() {
    rootComponent = renderComponent(ProgrammeList);
  });

  it('renders as a <div>', () => {
    expect(rootComponent.is("div")).to.eql(true);
  });
});
