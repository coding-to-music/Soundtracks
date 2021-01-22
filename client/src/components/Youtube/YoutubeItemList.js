import React,{useContext,useEffect} from 'react'
import { useHistory } from "react-router-dom";
import SoundtrackContext from '../../context/soundtrackContext'
import api from '../../utils/api'

export default function YoutubeItemList(props) {
  const  parser = new DOMParser;
  const {setYoutubeVideo, youtubeVideo }= useContext(SoundtrackContext)
  const history = useHistory()  

  // const handleClick = async (videoId)=> {
  // const results = await api.getYoutubeVideo(videoId)
  // setYoutubeVideo(results)
  // history.push('/player')
  // }

  const srcString = `//www.youtube.com/embed/${props.youtube.id.videoId}`
  
  // need to parse out unicode elements from what youtube has returned 
  const t1 = parser.parseFromString(props.youtube.snippet.title, "text/html")
  const title=t1.body.textContent

  const date = new Date(props.youtube.snippet.publishTime).toLocaleDateString(
    'en-us',
    {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }
  );
  
  return (
    <div>
      {console.log(props.youtube)}
    <li className="list-group-item">
      <div className='row'>
        <div className='col-4 iframe-container'>
          <iframe title="video"  src={srcString} frameborder="1" allow="accelerometer; autoplay; fullscreen" allowfullscreen/>
          </div>
   
      <div className='col'><p className='text-capitalize headline-text'>{title} </p>
      <p className='subline-text text-capitalize fw-light'> {date}</p>
      <p className='subline-text text-capitalize fw-light'>{props.youtube.snippet.description}</p>
    

      </div>
   
     
      </div>
    
    </li>
    </div>
  )
}


// {props.youtube.snippet.title}
// width="280" height="160"
{/* <iframe width="480" height="360" src="//www.youtube.com/embed/N8I-hnSS7DQ" frameborder="0" allow="accelerometer; autoplay;"/> */}