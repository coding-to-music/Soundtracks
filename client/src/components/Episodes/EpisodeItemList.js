import React,{useContext} from 'react'
import { useHistory } from "react-router-dom";
import SoundtrackContext from '../../context/soundtrackContext'

export default function EpisodeItemList(props) {
  const {setSelectedEpisode} = useContext(SoundtrackContext)
  const history = useHistory()  
  
  const handleClick = (item)=>{
    setSelectedEpisode(item)
    history.push('/show/songs')
  }
  
  return (
    <div>
    <li className="list-group-item">
      <div className='row' onClick={()=>{handleClick(props.episodedetail)}}>
        <div className='col-4'><img className='ellipse ' src='/images/Ellipse-1.png' alt='elipse'/> </div>
      
      <div className='col'><p className='text-capitalize display-6'>{props.episodedetail.assetName} </p>
      <h5 className='text-capitalize  badge bg-primary fw-light'>{props.episodedetail.assetSongs}</h5>
      </div>
     
      </div>
    
    </li>
    </div>
  )
}
