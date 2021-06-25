import { render, screen } from '@testing-library/react';
import Home from './home';
import ItemDetailContainer from './item-detail-container';

test('renders learn react link', () => {
  render(<Home /> ,<ItemDetailContainer />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
