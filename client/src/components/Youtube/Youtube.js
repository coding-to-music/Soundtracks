import React, {useContext, useEffect} from 'react'
import SoundtrackContext from '../../context/soundtrackContext'
import NavBar from '../Navbar'
import api from '../../utils/api'
import YoutubeItemList from './YoutubeItemList'

export default function Youtube() {

  const {youtubeResults}= useContext(SoundtrackContext)

  return (
    <div>
        <NavBar/>
      {youtubeResults && youtubeResults.map((item)=>{
         return   <YoutubeItemList key={item.id.videoId} youtube={item}/>
        // return <div>
        // <h1> <a  href="https://www.youtube.com/embed/FAS2uBy5jog\">{item.snippet.title}</a></h1>
        // <img src={item.snippet.thumbnails.default.url} alt='thumbnail'/>
        // </div>


      })}
    </div>
  )
}