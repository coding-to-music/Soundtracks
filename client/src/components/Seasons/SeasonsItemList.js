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
        <div className='col-4 '><img className='ellipse ' src='/images/Ellipse-1.png' alt='elipse'/> </div>
      
      <div className='col'><p className='text-capitalize display-6'>{props.seasondetail.assetSeason} </p>
      <h5 className='text-capitalize fw-light'>{props.seasondetail.assetName}</h5>
      </div>
     
      </div>
    
    </li>
    </div>
  )
}


