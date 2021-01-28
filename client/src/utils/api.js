import axios from 'axios'
 /* eslint-disable */

export default {

getSearch: function (queryStr) {
  return axios.post('/api/search/',{
    search: queryStr
  })
},
getSeasons: function (queryStr){
 return axios.post('/api/season',{
   assetLink: queryStr
 })
},

getEpisodes: function (queryStr){
  return axios.post('/api/episode',{
    assetLink: queryStr
  })
 },

getSongs: function (queryStr){
  return axios.post('/api/songlist',{
    assetLink: queryStr
  })
},
getShowSongs: function (queryStr){
  return axios.post('/api/show/songlist',{
    assetLink: queryStr
  })
},
getYoutube: function (queryStr){
  return axios.post('/api/youtubesearch',{
    searchString: queryStr
  })
},

getYoutubeVideo: function (videoId){
  return axios.post('/api/youtubevideo',{
   videoId:videoId
  })
},
getAppleSongResult: function (queryStr){
  return axios.post('/api/applesearch',{
    searchString:queryStr
  })
},

createApplePlaylist: function (json){
 
    return axios.post('/api/appleplaylist',{
      json
     })

 

},

}


