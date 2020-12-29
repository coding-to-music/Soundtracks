import React from 'react'

export default function SearchBar() {
  return (
    <div>
       <div className="container-fluid mt-2">
       <form className="d-flex">
       <button data-testid='search-button'className="btn btn-primary me-2" type="submit">Search</button>
        <input data-testid='search-box' className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      </form>
       </div>
     
    </div>
  )
}
