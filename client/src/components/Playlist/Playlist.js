import React, {useContext, useEffect} from 'react'
import SoundtrackContext from '../../context/soundtrackContext'
import NavBar from '../Navbar'

import PlaylistItemList from './PlaylistItem'

export default function Youtube() {

  const {appleSongs}= useContext(SoundtrackContext)

  useEffect(()=>{
   console.log('using effect')
  },[appleSongs])


  return (
    <div>
        <NavBar/>
      
   <h1>PLAYLIST</h1>
 {console.log('trying stuff')}
{appleSongs.map((item)=>{
  console.log(item.results.songs.data[0].id)
  return <PlaylistItemList  key={item.results.songs.data[0].id} song={item}/>
})}
    </div>
  )
}  
