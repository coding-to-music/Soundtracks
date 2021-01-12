import React,{useContext,useEffect} from 'react'
import { useHistory } from "react-router-dom";
import SoundtrackContext from '../../context/soundtrackContext'
import api from '../../utils/api'

export default function YoutubeItemList(props) {
  const {setYoutubeVideo, youtubeVideo }= useContext(SoundtrackContext)
  const history = useHistory()  

  // const handleClick = async (videoId)=> {
  // const results = await api.getYoutubeVideo(videoId)
  // setYoutubeVideo(results)
  // history.push('/player')
  // }

  const srcString = `//www.youtube.com/embed/${props.youtube.id.videoId}`
  console.log(srcString)
  return (
    <div>
    <li className="list-group-item">
      <div className='row'>
        <div className='col-4'>
          <iframe title="video" width="280" height="160" src={srcString} frameborder="0" allow="accelerometer; autoplay;"/>
          </div>
      
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

{/* <iframe width="480" height="360" src="//www.youtube.com/embed/N8I-hnSS7DQ" frameborder="0" allow="accelerometer; autoplay;"/> */}