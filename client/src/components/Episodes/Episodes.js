import EpisodeItemList from './EpisodeItemList'
import React, {useContext, useEffect} from 'react'
import api from '../../utils/api'
import NavBar from '../Navbar'
import SoundtrackContext from '../../context/soundtrackContext'

export default function Episodes() {
  const {selectedResult,selectedSeason, setEpisodeResults, episodeResults}= useContext(SoundtrackContext)


async function getEpisodes(assetLink){
  return await api.getEpisodes(assetLink)
}

  useEffect(()=>{
    console.log(selectedSeason)
    getEpisodes(selectedSeason.assetLink).then((episode)=>{
    setEpisodeResults(episode.data)
    })
  },[])


  return (
    <div>
      <NavBar/>
      <p className="mt-2 shadow p-3 mb-5 bg-white rounded text-capitalize">{selectedResult.assetName} / {selectedSeason.assetSeason}</p>
      
      
      <div className="container">
      <ul className="mt-3">
      {episodeResults.map((item)=>{
        return   <EpisodeItemList key={item.assetLink} episodedetail={item}/>
      })}
       </ul>
    </div>
    </div>
  )
}
