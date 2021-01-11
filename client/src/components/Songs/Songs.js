import React, {useContext, useEffect} from 'react'
import api from '../../utils/api'
import SongItemList from './SongsItemList'
import SoundtrackContext from '../../context/soundtrackContext'
import { useHistory } from "react-router-dom";
import NavBar from '../Navbar'

export default function Songs() {
  
  const {selectedResult, setSongResults,songResults}= useContext(SoundtrackContext)
  const history = useHistory()  

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
  
const handleClick =()=> {
  console.log('clicking')
  history.push('/youtube')
}

  return (
    <div>
      <NavBar/>
      <h1 className="display-6 mt-2 shadow p-3 mb-5 bg-white rounded">SONGS<button className='btn btn-primary ms-4' onClick={()=>{handleClick()}}>Playlist</button></h1>

      {songResults.map((item)=>{
        return <SongItemList key={item.title} song={item}/>


      })}
  
    </div>
  )
}

