import React, {useReducer} from 'react'
import SoundtrackContext from './soundtrackContext'
import soundtrackReducer from './soundtrackReducer'
import {SEARCH_RESULTS} from './actions'

function SoundtrackState(props) {
 
 // set the inital state for all vars in the state
  const initalState = {
        searchResults:[]
 }

 // set up state and dispatch vars for the reducuer
 const [state,dispatch] = useReducer(soundtrackReducer,initalState)

// FUNCTIONS HERE 
const searchResultsFromAPI = (results)=>{
 
  dispatch({
    type:SEARCH_RESULTS,
    payload: results

    })
}




// RETURN HERE 

return (
<SoundtrackContext.Provider
value={{
// reutrn state values or function s listed here 
searchResults: state.searchResults,
searchResultsFromAPI
}}>
 {props.children}
</SoundtrackContext.Provider>

) // end of the return block

} // end of SoundtrackState

export default SoundtrackState