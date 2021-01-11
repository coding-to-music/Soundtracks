import React, {useContext, useEffect} from 'react'
import SoundtrackContext from '../../context/soundtrackContext'
import NavBar from '../Navbar'
import api from '../../utils/api'
import YoutubeItemList from './YoutubeItemList'

export default function Youtube() {

  const {songResults,setYoutubeResults, youtubeResults}= useContext(SoundtrackContext)

  async function getYoutubeSearchResults(query) {
    return await api.getYoutube(query)
  }

  useEffect(()=>{
    songResults.map(async (item)=>{
      // console.log('----------youtube useEffect---------')
      // console.log(`${item.title}  ${item.artist}`)
      const youtubeRestuls = await getYoutubeSearchResults(`${item.title}  ${item.artist}`)
      setYoutubeResults(youtubeRestuls.data)
      
    })
    
   },[])


  return (
    <div>
        <NavBar/>
        {console.log(youtubeResults)}
      <h1>Youtube</h1>
      {youtubeResults && youtubeResults.map((item)=>{
        // return <YoutubeItemList key={item.title} youtube={item}/>
        console.log(item)


      })}
    </div>
  )
}