import React, {useContext} from 'react'
import SoundtrackContext from '../../context/soundtrackContext'
import ResultsItemList from './ResultsItemList'

export default function Results() {
  const {searchResults} = useContext(SoundtrackContext)

  return (
    <div className="container">
      <ul className="mt-3">
      {searchResults.map((item)=>{
       return <ResultsItemList   key= {item.assetLink} asset={item}/>
    })}
      </ul>
    </div>
  )
}
