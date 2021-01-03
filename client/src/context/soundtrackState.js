import React, {useReducer} from 'react'
import SoundtrackContext from './soundtrackContext'
import soundtrackReducer from './soundtrackReducer'
import {SEARCH_RESULTS, SELECTED_RESULT, SONG_RESULTS} from './actions'

function SoundtrackState(props) {
 
 // set the inital state for all vars in the state
  const initalState = {
        searchResults:[],
        selectedResult: {},
        seasonResult:[],
        episodeResults:[],
        songResults:[]
 }

 // set up state and dispatch vars for the reducuer
 const [state,dispatch] = useReducer(soundtrackReducer,initalState)

// FUNCTIONS HERE 

//get the restuls from a user search 
const setSearchResultsFromAPI = (results)=>{
 
  dispatch({
    type:SEARCH_RESULTS,
    payload: results

    })
}

// set the user selected asset into state
const setSelectedResult = (assetItem)=>{
  dispatch({
    type: SELECTED_RESULT,
    payload: assetItem
  })
}

const setSongResults = (songsArray)=>{
  dispatch({
    type:SONG_RESULTS,
    payload: songsArray
  })


}

// RETURN HERE 

return (
<SoundtrackContext.Provider
value={{
// reutrn state values or function s listed here 
searchResults: state.searchResults,
selectedResult: state.selectedResult,
seasonResult: state.seasonResult,
episodeResults: state.episodeResults,
songResults : state.songResults,
setSearchResultsFromAPI,
setSelectedResult,
setSongResults
}}>
 {props.children}
</SoundtrackContext.Provider>

) // end of the return block

} // end of SoundtrackState

export default SoundtrackState