import React, {useContext, useEffect} from 'react'
import api from '../../utils/api'
import SongItemList from './SongsItemList'
import SoundtrackContext from '../../context/soundtrackContext'
import { useHistory } from "react-router-dom";
import NavBar from '../Navbar'

export default function Songs() {
  
  const {selectedResult, setSongResults,songResults,setAppleSongs}= useContext(SoundtrackContext)
  const history = useHistory()  

  const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }

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
  
  let songsObject = []
  for (const item of SongArray){
    await sleep(500)
    const title = item.title.replace(/[^a-zA-Z0-9\s]/g, ' ')
    const artist = item.artist.replace(/[^a-zA-Z0-9\s]/g, ' ')
    const searchStr = `${title} ${artist}`
    const result = await api.getAppleSongResult(searchStr)
    if (typeof result.data.results !== "undefined"){
      const data = result.data
      songsObject.push(data)
    } else{ 
      console.log('Nothing here')
      }
  }
  return songsObject
}



const handleClick = async ()=>{
  const songs = await getAppleSongs(songResults)
 Promise.all(songs).then((data)=>{
   const songs = data.filter((item)=>{
     return item !== undefined
   })
   console.log('-------SHOW SONGS----------')
   console.log(songs)
   setAppleSongs(songs)  
 })
   history.push('/playlist')
   }

  return (
    <div>
      <NavBar/>
      {/* <h1 className="display-6 mt-2 shadow p-3 mb-5 bg-white rounded">SONGS <img onClick={()=>{handleClick(songResults)}} src='/images/create-playlist-icon.svg' alt='create playlist'/></h1> */}
      <p className=" mt-2 shadow p-3 mb-5 bg-white rounded text-capitalize">{selectedResult.assetName}<img className="icons" onClick={()=>{handleClick(songResults)}} src='/images/playlist.png' alt='create playlist'/> <span></span></p>
      {songResults.map((item)=>{
        return <SongItemList key={item.title} song={item}/>


      })}
  
    </div>
  )
}

