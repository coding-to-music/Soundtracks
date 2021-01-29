import React, {useContext, useEffect} from 'react'
import SoundtrackContext from '../../context/soundtrackContext'
import NavBar from '../Navbar'
import api from '../../utils/api'
import PlaylistItemList from './PlaylistItem'
import ReactTooltip from 'react-tooltip'

export default function Youtube() {

  const {appleSongs,selectedResult,selectedEpisode,selectedSeason, appleUserToken,playlistCreated,setPlaylistCreated}= useContext(SoundtrackContext)




// Create JSON for posting to apples API for the user account 
  const createPlaylistJson= (token)=>{
   let songJson=[]
   
   appleSongs.map((item)=>{
if (typeof item.results.songs.data[0].id !== "undefined"){
   songJson= [...songJson, {
      id:item.results.songs.data[0].id,
      type:"songs"
   }]
         } else{console.log('No song ID found')}

   })
   const playlistJson={
      userAuth: token,
      appleRequest: {
         attributes: {
            name: `${selectedResult.assetName} ${selectedEpisode.assetName}`,
            description: "Created by my way cool soundtrack app"
         },
         relationships:{
            tracks:{
               data:
                  songJson
               
            }
         }


      }
     }
     return playlistJson
  }

  






 const handleAddPlaylist = ()=>{
   const json =createPlaylistJson(appleUserToken)
   api.createApplePlaylist(json).then((data)=>{
     setPlaylistCreated(true)
   })
 }

  return (
    <div>
        <NavBar/>
      
        <p className=" mt-2 shadow p-3 mb-5 bg-white rounded text-capitalize">{selectedResult.assetName} / {selectedSeason.assetSeason} / {selectedEpisode.assetName} <span>  
           {playlistCreated ?    <img  data-tip data-for="playlistCreated" onClick={()=>{handleAddPlaylist()}} className="icons" title="Playlist created" src='/images/playlist-created.svg' alt='create playlist'/>  :
           <img  data-tip data-for="createPlaylist" onClick={()=>{handleAddPlaylist()}} className="icons"  src='/images/add-playlist.svg' alt='create playlist'/> 
           }
           
           <ReactTooltip id="playlistCreated" place="top" effect="solid">Playlist Created</ReactTooltip>
           <ReactTooltip id="createPlaylist" place="top" effect="solid">Create Playlist on Apple Music</ReactTooltip>
          </span></p>

          <div className="container">
      <ul className="mt-3">

{ appleSongs.map((item)=>{

if(item){
  return <PlaylistItemList  key={item.results.songs.data[0].id} song={item}/>
}
  
}) }

   </ul>
    </div>
    </div>
  )
}  



