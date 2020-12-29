import React, {useReducer} from 'react'
import SoundtrackContext from './soundtrackContext'
import soundtrackReducer from './soundtrackReducer'

function SoundtrackState(props) {
 
 // set the inital state for all vars in the state
  const initalState = {

 }

 // set up state and dispatch vars for the reducuer
 const [state,dispatch] = useReducer(soundtrackReducer,initalState)

// FUNCTIONS HERE 


// RETURN HERE 

return (
<SoundtrackContext.Provider
value={{
// reutrn state values or function s listed here 

}}>
 {props.children}
</SoundtrackContext.Provider>

) // end of the return block

} // end of SoundtrackState

export default SoundtrackState