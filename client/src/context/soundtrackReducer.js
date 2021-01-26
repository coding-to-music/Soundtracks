import {SEARCH_RESULTS, SELECTED_RESULT,
  SONG_RESULTS, SEASON_RESULTS, 
  SELECTED_SEASON, EPISODE_RESULTS,
  SELECTED_EPISODE,YOUTUBE_SEARCH_RESULTS,
  YOUTUBE_VIDEO,APPLE_USER_TOKEN,
  SET_APPLE_SONGS, SET_CREATED_PLAYLIST} from './actions'

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

    case YOUTUBE_SEARCH_RESULTS:
        return {
          ...state,
          youtubeResults: action.payload
          }

    case YOUTUBE_VIDEO:
        return {
          ...state,
          youtubeVideo: action.payload
              }

    case APPLE_USER_TOKEN:
        return {
          ...state,
          appleUserToken: action.payload
                      }
    case SET_APPLE_SONGS:
      
        return {
          ...state,
          appleSongs: action.payload
                                      }  
    case SET_CREATED_PLAYLIST:
        return {
          ...state,
          playlistCreated: action.payload
                                      }    
    default:
        return state
  }
}

export default soundtrackReducer


