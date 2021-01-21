import React from 'react'

export default function PlaylistItem(props) {
  return (
    <div>
      <li className="list-group-item">
  <div className='row'>
    <div className='col-4'> </div>
  
  <div className='col'><p className='text-capitalize display-6'>{props.song.results.songs.data[0].attributes.name}</p>
  <h5 className='text-capitalize fw-light'>{props.song.results.songs.data[0].attributes.artistName}</h5>
  </div>
 
  </div>

</li>
    </div>
  )
}
