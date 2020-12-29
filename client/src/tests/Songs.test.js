import { render, screen } from '@testing-library/react';
import Songs from '../components/Songs/Songs'

test('renders Songs Component', () => {
  render(<Songs />);
  const linkElement = screen.getByText(/Songs/i);
  expect(linkElement).toBeInTheDocument();
});