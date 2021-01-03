import {SEARCH_RESULTS, SELECTED_RESULT,SONG_RESULTS} from './actions'

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

    case SONG_RESULTS:
        return {
          ...state,
          songResults: action.payload
        }

      default:
        return state
  }
}

export default soundtrackReducer


