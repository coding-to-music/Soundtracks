import axios from 'axios'
 /* eslint-disable */

export default {

getSearch: function (queryStr) {
  return axios.post('http://localhost:3000/api/search/',{
    search: queryStr
  })
},
getSeasons: function (queryStr){
 return axios.post('http://localhost:3000/api/season',{
   assetLink: queryStr
 })
},

getEpisodes: function (queryStr){
  return axios.post('http://localhost:3000/api/episode',{
    assetLink: queryStr
  })
 },

getSongs: function (queryStr){
  return axios.post('http://localhost:3000/api/songlist',{
    assetLink: queryStr
  })
},
getShowSongs: function (queryStr){
  return axios.post('http://localhost:3000/api/show/songlist',{
    assetLink: queryStr
  })
},
getYoutube: function (queryStr){
  return axios.post('http://localhost:3000/api/youtubesearch',{
    searchString: queryStr
  })
},

getYoutubeVideo: function (videoId){
  return axios.post('http://localhost:3000/api/youtubevideo',{
   videoId:videoId
  })
},
getAppleSongResult: function (queryStr){
  return axios.post('http://localhost:3000/api/applesearch',{
    searchString:queryStr
  })
},

createApplePlaylist: function (json){
  return axios.post('http://localhost:3000/api/appleplaylist',{
   json
  })
},

}


