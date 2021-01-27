import SongItemList from './SongsItemList'
import React, {useContext, useEffect} from 'react'
import { useHistory } from "react-router-dom";
import api from '../../utils/api'
import NavBar from '../Navbar'
import SoundtrackContext from '../../context/soundtrackContext'
import ReactTooltip from 'react-tooltip'


export default function ShowSongs() {
  const {selectedResult,selectedEpisode,selectedSeason,setSongResults,songResults,setAppleSongs,setLoadingStatus }= useContext(SoundtrackContext)
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
    await sleep(1)
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
    setLoadingStatus(true)
   const songs = await getAppleSongs(songResults)
   Promise.all(songs).then((data)=>{
    const songs = data.filter((item)=>{
      return item !== undefined
    })
    console.log('-------SHOW SONGS----------')
    console.log(songs)
    setAppleSongs(songs)  
  }).catch((error)=>{console.log(error)})
    history.push('/playlist')
    }

  return (
    <div>
    <NavBar/>

    <p className=" mt-2 shadow p-3 mb-5 bg-white rounded text-capitalize">{selectedResult.assetName} / {selectedSeason.assetSeason} / {selectedEpisode.assetName} 
    <span> <img data-tip data-for="searchApple" className="icons"    onClick={()=>{handleClick(songResults)}} src='/images/create-playlist.png' alt='create playlist'/>
    <ReactTooltip id="searchApple" place="top" effect="solid">
        Search Apple Music
      </ReactTooltip>
    </span></p>

    <div className="container">
      <ul className="mt-3">
    {songResults.map((item)=>{
      return <SongItemList key={item.title} song={item}/>


    })}
    </ul>
    </div>
  </div>
  )
}


