import React, {useContext, useEffect} from 'react'
import api from '../../utils/api'
import SongItemList from './SongsItemList'
import SoundtrackContext from '../../context/soundtrackContext'
import { useHistory } from "react-router-dom";
import NavBar from '../Navbar'
import ReactTooltip from 'react-tooltip'


export default function Songs() {
  
  const {selectedResult, setSongResults,songResults,setAppleSongs, setLoadingStatus,loadingStatus}= useContext(SoundtrackContext)
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
    await sleep(1)
    const title = item.title.replace(/[^a-zA-Z0-9\s]/g, ' ')
    const artist = item.artist.replace(/[^a-zA-Z0-9\s]/g, ' ')
    const searchStr = `${title} ${artist}`
    const result = await api.getAppleSongResult(searchStr)
    if (typeof result.data.results !== "undefined"){
      const data = result.data
      songsObject.push(data)
    } else{ 
     
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
   setAppleSongs(songs)  
 }).catch((error)=>{console.log(error)})
   history.push('/playlist')
   }

  return (
    <div>
      <NavBar/>
    
      <p className=" mt-2 shadow p-3 mb-5 bg-white rounded text-capitalize">{selectedResult.assetName}
       <span>
       <img  data-tip data-for="searchApple" className="icons" onClick={()=>{handleClick(songResults)}} src='/images/create-playlist.png' alt='create playlist'/>
      <ReactTooltip id="searchApple" place="top" effect="solid">
        Search Apple Music
      </ReactTooltip></span></p> 
      <div className="container">
      <ul className="mt-3">
      {loadingStatus ?  <div className="d-flex justify-content-center"><div className="spinner-grow text-primary m-4" role="status">
  </div> <p className="font-weight-lighter display-4">Searching Please Wait....</p></div> 
 :
      songResults.map((item)=>{
        return <SongItemList key={item.title} song={item}/>
      })}
     </ul>
    </div>
    </div>
  )
}

