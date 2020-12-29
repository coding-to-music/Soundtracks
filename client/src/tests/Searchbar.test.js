import { render, screen } from '@testing-library/react';
import Searchbar from '../components/SearchBar'

describe("Searchbar testing", ()=>{

test('check for search button', ()=>{
  render(<Searchbar/>);
  const searchButton = screen.getByTestId('search-button')
  expect(searchButton).toBeInTheDocument();
})

test('check for search field', ()=>{
  render(<Searchbar/>);
  const searchBox = screen.getByTestId('search-box')
  expect(searchBox).toBeInTheDocument();
})

})