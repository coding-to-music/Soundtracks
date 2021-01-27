import React, {useReducer} from 'react'
import SoundtrackContext from './soundtrackContext'
import soundtrackReducer from './soundtrackReducer'
import {SEARCH_RESULTS, SELECTED_RESULT, 
  SONG_RESULTS, SEASON_RESULTS, 
  SELECTED_SEASON, EPISODE_RESULTS,
  SELECTED_EPISODE, YOUTUBE_SEARCH_RESULTS,
YOUTUBE_VIDEO, APPLE_USER_TOKEN,
SET_APPLE_SONGS, SET_CREATED_PLAYLIST,
SET_LOADING_STATUS} from './actions'

function SoundtrackState(props) {
 
 // set the inital state for all vars in the state
  const initalState = {
        searchResults:[],
        selectedResult: {},
        selectedSeason:{},
        selectedEpisode:{},
        seasonResults:[],
        episodeResults:[],
        songResults:[],
        youtubeResults:{},
        youtubeVideo:{},
        appleUserToken:false,
        appleSongs:[],
        playlistCreated:false,
        loadingStatus: false
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

const setSelectedSeason = (assetItem)=>{
  dispatch({
    type: SELECTED_SEASON,
    payload: assetItem
  })
}

const setSelectedEpisode = (assetItem)=>{
  dispatch({
    type: SELECTED_EPISODE,
    payload: assetItem
  })
}

const setSongResults = (songsArray)=>{
  dispatch({
    type:SONG_RESULTS,
    payload: songsArray
  })
}

const setYoutubeResults = (youtubeResults)=>{
 
  dispatch({
    type:YOUTUBE_SEARCH_RESULTS,
    payload: youtubeResults
  })
}


const setSeasonResults = (seasonsArray)=>{
  dispatch({
    type:SEASON_RESULTS,
    payload: seasonsArray
  })
}

const setEpisodeResults = (episodeArray)=>{
  dispatch({
    type:EPISODE_RESULTS,
    payload: episodeArray
  })
}

const setYoutubeVideo = (videoObj)=>{
  dispatch({
    type:YOUTUBE_VIDEO,
    payload: videoObj
  })
}

const setAppleUserToken = (authToken)=>{
  dispatch({
    type:APPLE_USER_TOKEN,
    payload: authToken
  })
}

const setAppleSongs = (songsArray)=>{
 
  dispatch({
    type:SET_APPLE_SONGS,
    payload: songsArray
  })
}

const setPlaylistCreated = ()=>{
 
  dispatch({
    type:SET_CREATED_PLAYLIST,
    payload: true
  })
}


const setLoadingStatus = ()=>{
  dispatch({
    type:SET_LOADING_STATUS,
    payload: true
  })

}
// RETURN HERE 

return (
<SoundtrackContext.Provider
value={{
// reutrn state values or function s listed here 
searchResults: state.searchResults,
selectedResult: state.selectedResult,
seasonResults: state.seasonResults,
episodeResults: state.episodeResults,
songResults : state.songResults,
selectedSeason: state.selectedSeason,
selectedEpisode: state.selectedEpisode,
youtubeResults: state.youtubeResults,
youtubeVideo: state.youtubeVideo,
appleUserToken: state.appleUserToken,
appleSongs: state.appleSongs,
playlistCreated: state.playlistCreated,
loadingStatus: state.loadingStatus,
setYoutubeVideo,
setSearchResultsFromAPI,
setSelectedResult,
setSongResults,
setSeasonResults,
setSelectedSeason,
setEpisodeResults,
setSelectedEpisode,
setYoutubeResults,
setAppleUserToken,
setAppleSongs,
setPlaylistCreated,
setLoadingStatus
}}>
 {props.children}
</SoundtrackContext.Provider>

) // end of the return block

} // end of SoundtrackState

export default SoundtrackState