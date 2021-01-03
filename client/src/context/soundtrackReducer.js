import {SEARCH_RESULTS, SELECTED_RESULT,SONG_RESULTS, SEASON_RESULTS, SELECTED_SEASON, EPISODE_RESULTS,SELECTED_EPISODE} from './actions'

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

      case SELECTED_SEASON:
        return {
          ...state,
          selectedSeason: action.payload
        }
      case SELECTED_EPISODE:
        return {
            ...state,
            selectedEpisode: action.payload
          }
    case SONG_RESULTS:
        return {
          ...state,
          songResults: action.payload
        }

    case SEASON_RESULTS:
        return {
          ...state,
          seasonResults: action.payload
          }

    case EPISODE_RESULTS:
        return {
          ...state,
          episodeResults: action.payload
          }

      default:
        return state
  }
}

export default soundtrackReducer


