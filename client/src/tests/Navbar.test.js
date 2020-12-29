import { render, screen } from '@testing-library/react';
import Navbar from '../components/Navbar'

describe("NAVBAR testing", ()=>{
  test('test for database in menu', () => {
    render(<Navbar/>);
    const databaselink = screen.getByText(/Database/i);
    expect(databaselink).toBeInTheDocument();
  });

  test('test for search in menu', () => {
    render(<Navbar/>);
    const searchlink = screen.getByText(/search/i);
    expect(searchlink).toBeInTheDocument();
  });

  test('check for Title', () => {
    render(<Navbar/>);
    const searchlink = screen.getByText(/SoundTrack/i);
    expect(searchlink).toBeInTheDocument();
  });

  test('check for Navigation toogle button', () => {
    render(<Navbar/>);
    const navButton = screen.getByTestId('nav-button')
    expect(navButton).toBeInTheDocument();
  });

test('check for image src', ()=>{
  render(<Navbar/>);
  const image = screen.getByTestId('logo')
  const imageSrc=image.src
  expect(imageSrc).toBe('http://via.placeholder.com/50')

 

})

})
