import React,{useContext} from 'react'
import { useHistory } from "react-router-dom";
import SoundtrackContext from '../../context/soundtrackContext'



export default function SeasonsItemList(props) {
  const {setSelectedSeason} = useContext(SoundtrackContext)
  const history = useHistory()  
  
  const handleClick = (item)=>{
    setSelectedSeason(item)
    history.push('/episodes')
  }

  return (
    <div>
    <li className="list-group-item list-item">
      <div className='row' onClick={()=>{handleClick(props.seasondetail)}}>
        <div className='col-4 '><img className='ellipse ' src='/images/music-bullet.svg' alt='elipse'/> </div>
      
      <div className='col'><p className='text-capitalize headline-text'>{props.seasondetail.assetSeason} </p>
      <p className=' subline-text text-capitalize fw-light'>{props.seasondetail.assetName}</p>
      </div>
     
      </div>
    
    </li>
    </div>
  )
}


