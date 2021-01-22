import React from 'react'

export default function PlaylistItem(props) {



let artwork=props.song.results.songs.data[0].attributes.artwork.url
artwork = artwork.replace("{w}","250")
artwork =artwork.replace("{h}","250")

console.log('ARTWORK, ', artwork)
  return (
    <div>
    <li className="list-group-item list-item">
      <div className='row'>
        <div className='col-4 '><img className='ellipse ' src={artwork} alt='elipse'/> </div>
      
      <div className='col'><p className='text-capitalize display-6'>{props.song.results.songs.data[0].attributes.name} </p>
      <h5 className='text-capitalize fw-light'>{props.song.results.songs.data[0].attributes.artistName}</h5>
      </div>
     
      </div>
    
    </li>
    </div>

  )
}
