import React from 'react'

export default function PlaylistItem(props) {

let artwork=props.song.results.songs.data[0].attributes.artwork.url
artwork = artwork.replace("{w}","250")
artwork =artwork.replace("{h}","250")

const id = props.song.results.songs.data[0].id 
const date = new Date(props.song.results.songs.data[0].attributes.releaseDate).toLocaleDateString(
  'en-us',
  {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }
);




  return (
    <div>
    <li className="list-group-item list-item">
      <div className='row'>
        <div className='col-4 '><img className='ellipse' src={artwork} alt='elipse'/> </div>
      
      <div className='col'><p className='text-capitalize headline-text'>{props.song.results.songs.data[0].attributes.name} </p>
      <p className='subline-text text-capitalize fw-light'>{props.song.results.songs.data[0].attributes.artistName}</p>
      <p className='subline-text text-capitalize fw-light'>{date}</p>
      </div>
     
      </div>
    
    </li>
    </div>

  )
}
