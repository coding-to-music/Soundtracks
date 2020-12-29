import { render, screen } from '@testing-library/react';
import Results from '../components/Results/Results'

test('renders Results Component', () => {
  render(<Results />);
  const linkElement = screen.getByText(/Results/i);
  expect(linkElement).toBeInTheDocument();
});