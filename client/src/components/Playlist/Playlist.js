import React, {useContext, useEffect} from 'react'
import SoundtrackContext from '../../context/soundtrackContext'
import NavBar from '../Navbar'

import PlaylistItemList from './PlaylistItem'

export default function Youtube() {

  const {appleSongs}= useContext(SoundtrackContext)

 

  return (
    <div>
        <NavBar/>
      
   <h1>PLAYLIST</h1>
 {console.log('---------PLAYLIST RETURN-----------')}
 {console.log(appleSongs)}

{appleSongs.map((item)=>{
  // console.log(item.results.songs.data[0].id)
if(item){
  return <PlaylistItemList  key={item.results.songs.data[0].id} song={item}/>
}
  
})}
    </div>
  )
}  
