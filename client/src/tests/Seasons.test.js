import { render, screen } from '@testing-library/react';
import Seasons from '../components/Seasons/Seasons'

test('renders Seasons Component', () => {
  render(<Seasons />);
  const linkElement = screen.getByText(/Seasons/i);
  expect(linkElement).toBeInTheDocument();
});