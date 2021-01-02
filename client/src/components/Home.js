import React from 'react'
import NavBar from './Navbar'
import Searchbar from './SearchBar'
import Results from './Results/Results'
// import SoundtrackContext from '../context/soundtrackContext'
// import { SEARCH_RESULTS } from '../context/actions'

export default function Home() {

  
return (
    <div>
      <NavBar/>
      <Searchbar/>
      <Results/>
    

    </div>
  )
}
