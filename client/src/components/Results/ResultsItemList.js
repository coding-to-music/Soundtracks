import React from 'react'

export default function ResultsItemList(props) {

  
  const handleClick = (link)=>{
    console.log('clicked')
    console.log(link)
  }
  
  return (
    <div>
      <li className="list-group-item">
        <div className='row' onClick={()=>{handleClick(props.assetLink)}}>
          <div className='col-4'><img className='ellipse ' src='/images/Ellipse-1.png' alt='elipse'/> </div>
        
        <div className='col'><p className='text-capitalize display-6'>{props.assetName} </p>
        <p className='text-capitalize  fw-light'>{props.assetType}</p>
        </div>
       
        </div>
     
      </li>
    </div>
  )
}

