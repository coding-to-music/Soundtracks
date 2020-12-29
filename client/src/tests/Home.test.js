import { render, screen } from '@testing-library/react';
import Home from '../components/Home'

test('renders Home Component', () => {
  render(<Home />);
  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});
