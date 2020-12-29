import {SEARCH_RESULTS} from './actions'

const soundtrackReducer =(state,action)=>{

  switch (action.type){
    case SEARCH_RESULTS:
      return {
        ...state,
        searchResults: action.payload
      }
      
      default:
        return state
  }
}

export default soundtrackReducer


