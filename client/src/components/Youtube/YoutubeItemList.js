import React from 'react'
import { useHistory } from "react-router-dom";


export default function YoutubeItemList(props) {

  const history = useHistory()  


  const handleClick = async ()=> {
  console.log(props)
  history.push('/player')
  }



  return (
    <div>
    <li className="list-group-item">
      <div className='row'>
        <div className='col-4'><img className='ellipse ' src={props.youtube.snippet.thumbnails.default.url} alt='elipse' onClick={()=>{handleClick(props)}}/> </div>
      
      <div className='col'><p className='text-capitalize display-6'>{props.youtube.snippet.title} </p>
      <h4 className='text-capitalize fw-light'> {props.youtube.snippet.publishTime}</h4>
      <p className='text-capitalize fw-light'>{props.youtube.snippet.description}</p>
      </div>
     
      </div>
    
    </li>
    </div>
  )
}


// {props.youtube.snippet.title}

