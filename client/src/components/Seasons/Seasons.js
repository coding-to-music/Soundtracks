import React, {useContext, useEffect} from 'react'
import api from '../../utils/api'
import NavBar from '../Navbar'
import SoundtrackContext from '../../context/soundtrackContext'
import SeasonsItemList from './SeasonsItemList'


export default function Seasons() {

const {selectedResult,selectedSeason, selectedEpisode,setSeasonResults, seasonResults}= useContext(SoundtrackContext)

async function getSeasons(assetLink){
  return await api.getSeasons(assetLink)
}

useEffect(()=>{
getSeasons(selectedResult.assetLink).then((seasons)=>{
  setSeasonResults(seasons.data)
})

},[])
  
  return (
    <div>
    <NavBar/>

      <p className="mt-2 shadow p-3 mb-5 bg-white rounded text-capitalize">{selectedResult.assetName}</p>
      <div className="container">
      <ul className="mt-3">
      {seasonResults.map((item)=>{
        return   <SeasonsItemList  key={item.assetLink}  seasondetail={item}  />
      })}
    </ul>
    </div>
    </div>
  )
}
