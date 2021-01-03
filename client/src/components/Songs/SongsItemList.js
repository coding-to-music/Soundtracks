import React from 'react'

export default function SongsItemList(props) {
  return (
<div>
<li className="list-group-item">
  <div className='row'>
    <div className='col-4'><img className='ellipse ' src='/images/Ellipse-1.png' alt='elipse'/> </div>
  
  <div className='col'><p className='text-capitalize display-6'>{props.song.title} </p>
  <h5 className='text-capitalize  badge bg-primary fw-light'>{props.song.artist}</h5>
  </div>
 
  </div>

</li>
</div>
  )
}


