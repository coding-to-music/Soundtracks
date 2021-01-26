import SongItemList from './SongsItemList'
import React, {useContext, useEffect} from 'react'
import { useHistory } from "react-router-dom";
import api from '../../utils/api'
import NavBar from '../Navbar'
import SoundtrackContext from '../../context/soundtrackContext'

export default function ShowSongs() {
  const {selectedResult,selectedEpisode,selectedSeason,setSongResults,songResults,setAppleSongs }= useContext(SoundtrackContext)
  const history = useHistory()  

  async function getShowSongs(assetLink){
    return await api.getShowSongs(assetLink)
  }

  useEffect(()=>{
    console.log(selectedEpisode)
    getShowSongs(selectedEpisode.assetLink).then((songs)=>{

      setSongResults(songs.data)
    })
  },[])

  const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }

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
 
  // const songsObject =  await SongArray.map(async (item)=>{
  //   const title = item.title.replace(/[^a-zA-Z0-9\s]/g, ' ')
  //   const artist = item.artist.replace(/[^a-zA-Z0-9\s]/g, ' ')
  //   const searchStr = `${title} ${artist}`
   
 
  //   const result = await api.getAppleSongResult(searchStr)
  //   if (typeof result.data.results !== "undefined"){
  //     const data = result.data
  //     return data
  //   } else{ 
  //     console.log('Nothing here')
  //     }


  
  // })
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

    <p className=" mt-2 shadow p-3 mb-5 bg-white rounded text-capitalize">{selectedResult.assetName} / {selectedSeason.assetSeason} / {selectedEpisode.assetName} <img className="icons" onClick={()=>{handleClick(songResults)}} src='/images/playlist.png' alt='create playlist'/> <span></span></p>

    {songResults.map((item)=>{
      return <SongItemList key={item.title} song={item}/>


    })}

  </div>
  )
}


