import React, {useContext, useEffect} from 'react'
import api from '../../utils/api'
import SongItemList from './SongsItemList'
import SoundtrackContext from '../../context/soundtrackContext'
import NavBar from '../Navbar'
export default function Songs() {
  
  const {selectedResult, setSongResults,songResults}= useContext(SoundtrackContext)
  
  async function getMoiveSongs(assetLink) {
    return await api.getSongs(selectedResult.assetLink)
  }

  async function getShowSongs(assetLink) {
    return await api.getSongs(selectedResult.assetLink)
  }
  
  useEffect(()=>{
   if (selectedResult.assetType !== 'show'){
    getMoiveSongs(selectedResult.assetLink).then((songs)=>{
      setSongResults(songs.data)
    })
   } else {
    getShowSongs(selectedResult.assetLink).then((songs)=>{
      setSongResults(songs.data)
    })

   }
   
  },[])
  
  return (
    <div>
      {console.log(songResults)}
      <NavBar/>
      {songResults.map((item)=>{
        return <SongItemList key={item.title} song={item}/>


      })}
  
    </div>
  )
}

