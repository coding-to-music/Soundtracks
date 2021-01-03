import React, {useContext, useEffect} from 'react'
import api from '../../utils/api'
import NavBar from '../Navbar'
import SoundtrackContext from '../../context/soundtrackContext'
import SeasonsItemList from './SeasonsItemList'


export default function Seasons() {

const {selectedResult,setSeasonResults, seasonResults}= useContext(SoundtrackContext)

async function getSeasons(assetLink){
  return await api.getSeasons(assetLink)
}

useEffect(()=>{
  console.log(selectedResult.assetLink)
getSeasons(selectedResult.assetLink).then((seasons)=>{
  console.log(seasons.data)
  setSeasonResults(seasons.data)
})

},[])
  
  return (
    <div>
    <NavBar/>
      <h1 className="display-6 mt-2 shadow p-3 mb-5 bg-white rounded ">SEASONS</h1>
      {seasonResults.map((item)=>{
        return   <SeasonsItemList  key={item.assetLink}  seasondetail={item}  />
      })}
    
    </div>
  )
}
