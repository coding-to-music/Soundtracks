import React, {useContext} from 'react'
import SoundtrackContext from '../../context/soundtrackContext'
import ResultsItemList from './ResultsItemList'

export default function Results() {
  const {searchResults} = useContext(SoundtrackContext)

  return (
    <div>
      <h1>RESULTS</h1>
      {searchResults.map((item)=>{
       
         return <ResultsItemList   key= {item.assetLink} assetType={item.assetType} assetName={item.assetName}/>
      })}
      <ul>
     
      </ul>
    </div>
  )
}
