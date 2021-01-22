import SongItemList from './SongsItemList'
import React, {useContext, useEffect} from 'react'
import { useHistory } from "react-router-dom";
import api from '../../utils/api'
import NavBar from '../Navbar'
import SoundtrackContext from '../../context/soundtrackContext'

export default function ShowSongs() {
  const {selectedEpisode,setSongResults,songResults,setAppleSongs }= useContext(SoundtrackContext)
  const history = useHistory()  

  async function getShowSongs(assetLink){
    return await api.getShowSongs(assetLink)
  }

  useEffect(()=>{
    getShowSongs(selectedEpisode.assetLink).then((songs)=>{

      setSongResults(songs.data)
    })
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
    <h1 className="display-6 mt-2 shadow p-3 mb-5 bg-white rounded">SONGS <img onClick={()=>{handleClick(songResults)}} src='/images/create-playlist-icon.svg' alt='create playlist'/> <span></span></h1>
    
    {songResults.map((item)=>{
      return <SongItemList key={item.title} song={item}/>


    })}

  </div>
  )
}
