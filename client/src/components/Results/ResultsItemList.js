import React, {useContext} from 'react'
import SoundtrackContext from '../../context/soundtrackContext'
import { useHistory } from "react-router-dom";

export default function ResultsItemList(props) {

  const {setSelectedResult} = useContext(SoundtrackContext)
  const history = useHistory()  

  const handleClick = (item)=>{
    // set the selected item in state to other pages can read it 
    setSelectedResult(item)
    // determine if asset is a show or other, this will dictate the workflow needed and set to the proper url
    if (item.assetType === 'show'){
      console.log('proceeding to get seasons and display')
      history.push('/seasons')
    }
    else {
     
      history.push('/songs')
    }
  }



  
  return (
    <div>
      <li className="list-group-item list-item">
        <div className='row' onClick={()=>{handleClick(props.asset)}}>
          <div className='col-4 '><img className='ellipse ' src='/images/Ellipse-1.png' alt='elipse'/> </div>
        
        <div className='col'><p className='text-capitalize display-6'>{props.asset.assetName} </p>
        <h5 className='text-capitalize  fw-light'>{props.asset.assetType}</h5>
        </div>
       
        </div>
     
      </li>
    </div>
  )
}

