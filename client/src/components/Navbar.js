import React from 'react'

export default function Navbar() {
  return (
    <div>
     <div className="container-fluid">
     <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
    <a href="/"><img data-testid='logo' className='border border-3' src='/images/logo.svg' alt='placeholder'></img></a>
   <div className="ms-3 me-3">
   <a className="navbar-brand" href="/">SoundTrack</a>
   </div>
   

    <button className="navbar-toggler"  data-testid='nav-button' type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="/">Search</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/databasesearch">Database</a>
        </li>
      </ul>

    </div>
  </div>
</nav>

     </div>
    </div>
  )
}



// src='http://via.placeholder.com/100'
