import React, {useReducer} from 'react'
import SoundtrackContext from './soundtrackContext'
import soundtrackReducer from './soundtrackReducer'
import {SEARCH_RESULTS, SELECTED_RESULT, SONG_RESULTS, SEASON_RESULTS, SELECTED_SEASON, EPISODE_RESULTS,SELECTED_EPISODE, YOUTUBE_SEARCH_RESULTS} from './actions'

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
        youtubeResults:{}
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
  // console.log('-------setYoutubeRestuls---------')
  // console.log(youtubeResultsArray)
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
setSearchResultsFromAPI,
setSelectedResult,
setSongResults,
setSeasonResults,
setSelectedSeason,
setEpisodeResults,
setSelectedEpisode,
setYoutubeResults
}}>
 {props.children}
</SoundtrackContext.Provider>

) // end of the return block

} // end of SoundtrackState

export default SoundtrackState