import {SEARCH_RESULTS, SELECTED_RESULT} from './actions'

const soundtrackReducer =(state,action)=>{

  switch (action.type){
    case SEARCH_RESULTS:
      return {
        ...state,
        searchResults: action.payload
      }
      
    case SELECTED_RESULT:
      return {
        ...state,
        selectedResult: action.payload
      }

      default:
        return state
  }
}

export default soundtrackReducer


