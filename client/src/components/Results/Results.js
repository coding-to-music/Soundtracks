import React, {useContext} from 'react'
import SoundtrackContext from '../../context/soundtrackContext'
import ResultsItemList from './ResultsItemList'

export default function Results() {
  const {searchResults} = useContext(SoundtrackContext)

  return (
    <div className="container">
      <ul>
      {searchResults.map((item)=>{
       return <ResultsItemList   key= {item.assetLink} assetLink={item.assetLink} assetType={item.assetType} assetName={item.assetName}/>
    })}
      </ul>
    </div>
  )
}
