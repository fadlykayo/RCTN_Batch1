import renderer from 'react-test-renderer';

import Home from './';

test('Home renders correctly', () => {
  const tree = renderer.create(
    <Home />,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
