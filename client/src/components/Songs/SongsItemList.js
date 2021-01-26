import React, {useContext} from 'react'
import api from '../../utils/api'
import SoundtrackContext from '../../context/soundtrackContext'
import { useHistory } from "react-router-dom";

export default function SongsItemList(props) {
  
  const {setYoutubeResults }= useContext(SoundtrackContext)
  const history = useHistory()  

  async function getYoutubeResults(searchStr) {
    return await api.getYoutube(searchStr)
  }


  

  
const handleClick = async ()=> {
  console.log('clicking')
  const searchStr = `"${props.song.title}" "${props.song.artist}"`
const results = await  getYoutubeResults(searchStr)
setYoutubeResults(results.data)
history.push('/youtube')
}
  
  
  
  
  return (
<div>
<li className="list-group-item">
  <div className='row' onClick={()=>{handleClick(props)}}>
    <div className='col-4'><img className='ellipse ' src='/images/music-bullet.svg' alt='elipse'/> </div>
  
  <div className='col'><p className='text-capitalize headline-text'>{props.song.title} </p>
  <p className=' subline-text text-capitalize fw-light'>{props.song.artist}</p>
  </div>
 
  </div>

</li>
</div>
  )
}


