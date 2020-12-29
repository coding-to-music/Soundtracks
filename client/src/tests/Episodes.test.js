import { render, screen } from '@testing-library/react';
import Episodes from '../components/Episodes/Episodes'

test('renders Episode Component', () => {
  render(<Episodes />);
  const linkElement = screen.getByText(/Episodes/i);
  expect(linkElement).toBeInTheDocument();
});