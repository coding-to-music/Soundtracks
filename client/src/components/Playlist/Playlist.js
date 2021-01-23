import React, {useContext, useEffect} from 'react'
import SoundtrackContext from '../../context/soundtrackContext'
import NavBar from '../Navbar'

import PlaylistItemList from './PlaylistItem'

export default function Youtube() {

  const {appleSongs,selectedResult,selectedEpisode,selectedSeason, appleUserToken}= useContext(SoundtrackContext)



// Create JSON for posting to apples API for the user account 
  const createPlaylistJson= (token)=>{
   let songJson=[]
   appleSongs.map((item)=>{
      songJson= [...songJson, {
         id:item.results.songs.data[0].id,
         type:"songs"
      }]
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
   console.log('one day i will add a playlist')
   
   const json =createPlaylistJson(appleUserToken)
   console.log(json)
   
 }

  return (
    <div>
        <NavBar/>
      
        <p className=" mt-2 shadow p-3 mb-5 bg-white rounded text-capitalize">{selectedResult.assetName} / {selectedSeason.assetSeason} / {selectedEpisode.assetName} <span>  <img  onClick={()=>{handleAddPlaylist()}} className="icons" src='/images/add-playlist.png' alt='create playlist'/></span></p>
{appleSongs.map((item)=>{

if(item){
  return <PlaylistItemList  key={item.results.songs.data[0].id} song={item}/>
}
  
})}
    </div>
  )
}  
