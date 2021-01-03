import React, {useRef,useContext} from 'react'
import api from '../utils/api'
import SoundtrackContext from '../context/soundtrackContext'


export default function SearchBar() {

const inputReference = useRef();

const {setSearchResultsFromAPI} = useContext(SoundtrackContext)


const getSearchResults = async(searchStr)=>{
    const searchResults = await api.getSearch(searchStr)
    return searchResults
    }
    
  const handleSubmit = (e)=>{
    e.preventDefault()

  
    getSearchResults(inputReference.current.value).then((results)=>{
      if (results.data !== undefined){
        // console.log(results.data)
        setSearchResultsFromAPI(results.data)
      }
      else {
        console.log('no search results found')
      }

      })

      inputReference.current.value=''
    }
    


  return (
    <div>
       <div className="container-fluid mt-2" onSubmit={handleSubmit}>
       <form className="d-flex">
       <button data-testid='search-button'className="btn btn-primary me-2" type="submit">Search</button>
        <input data-testid='search-box' className="form-control me-2" type="search" ref={inputReference} placeholder="Search" aria-label="Search"/>
      </form>
       </div>
     
    </div>
  )
}
