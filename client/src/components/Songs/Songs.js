import React, {useContext, useEffect} from 'react'
import api from '../../utils/api'
import SongItemList from './SongsItemList'
import SoundtrackContext from '../../context/soundtrackContext'
import { useHistory } from "react-router-dom";
import NavBar from '../Navbar'

export default function Songs() {
  
  const {selectedResult, setSongResults,songResults,setAppleSongs}= useContext(SoundtrackContext)
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
  
  const getAppleSongs = async (SongArray)=>{
    const songsObject =  await SongArray.map(async (item)=>{
     
      const title = item.title.replace(/[^a-zA-Z0-9\s]/g, ' ')
      const artist = item.artist.replace(/[^a-zA-Z0-9\s]/g, ' ')
    const searchStr = `${title} ${artist}`
    const result = await api.getAppleSongResult(searchStr)
    if (result.data){
      console.log(result.data)
      return result.data
    }
    })
  return songsObject
  }



const handleClick = async ()=>{
  const songs = await getAppleSongs(songResults)
  Promise.all(songs).then((data)=>{
    console.log('-------SHOW SONGS----------')
    console.log(data)
    setAppleSongs(data)  
  })

history.push('/playlist')
}

  return (
    <div>
      <NavBar/>
      <h1 className="display-6 mt-2 shadow p-3 mb-5 bg-white rounded">SONGS <img onClick={()=>{handleClick(songResults)}} src='/images/create-playlist-icon.svg' alt='create playlist'/></h1>
   
      {songResults.map((item)=>{
        return <SongItemList key={item.title} song={item}/>


      })}
  
    </div>
  )
}

