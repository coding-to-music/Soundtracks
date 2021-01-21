import React, {useContext, useEffect} from 'react'
import SoundtrackContext from '../../context/soundtrackContext'
import NavBar from '../Navbar'

import YoutubeItemList from './YoutubeItemList'

export default function Youtube() {

  const {youtubeResults}= useContext(SoundtrackContext)
console.log('youtube results, ', youtubeResults)

  return (
    <div>
        <NavBar/>
      {youtubeResults && youtubeResults.map((item)=>{
         return   <YoutubeItemList key={item.id.videoId} youtube={item}/>
      
      })}
    </div>
  )
}