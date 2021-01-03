import React, {useReducer} from 'react'
import SoundtrackContext from './soundtrackContext'
import soundtrackReducer from './soundtrackReducer'
import {SEARCH_RESULTS, SELECTED_RESULT} from './actions'

function SoundtrackState(props) {
 
 // set the inital state for all vars in the state
  const initalState = {
        searchResults:[],
        selectedResult: {}
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
  console.log(assetItem)
  dispatch({
    type: SELECTED_RESULT,
    payload: assetItem
  })
}



// RETURN HERE 

return (
<SoundtrackContext.Provider
value={{
// reutrn state values or function s listed here 
searchResults: state.searchResults,
setSearchResultsFromAPI,
setSelectedResult
}}>
 {props.children}
</SoundtrackContext.Provider>

) // end of the return block

} // end of SoundtrackState

export default SoundtrackState