import SongItemList from './SongsItemList'
import React, {useContext, useEffect} from 'react'
import api from '../../utils/api'
import NavBar from '../Navbar'
import SoundtrackContext from '../../context/soundtrackContext'


export default function ShowSongs() {
  const {selectedEpisode,setSongResults,songResults }= useContext(SoundtrackContext)


  async function getShowSongs(assetLink){
    return await api.getShowSongs(assetLink)
  }

  useEffect(()=>{
    getShowSongs(selectedEpisode.assetLink).then((songs)=>{
      console.log(songs.data)
      setSongResults(songs.data)
    })
  },[])

  return (
    <div>
    <NavBar/>
    <h1 className="display-6 mt-2 shadow p-3 mb-5 bg-white rounded">SONGS</h1>
    {songResults.map((item)=>{
      return <SongItemList key={item.title} song={item}/>


    })}

  </div>
  )
}
