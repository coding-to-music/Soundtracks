const express = require("express");
const router = express.Router();
const axios = require('axios');
const {google}=require('googleapis');
require('dotenv').config()



const YOUTUBE_KEY=process.env.YOUTUBE_API

router.get("/api/youtubesearch", (req, res) => {
  res.send('WELCOME THIS API FUNCTION DOES NOT HAVE A GET RESPONSE, PLEASE USE A POST METHOD');
});


const getYouTubeData = async (searchString) => {
  const videoList =  await google.youtube('v3').search.list({
    key: YOUTUBE_KEY,
    part: 'snippet',
    type: 'video',
    q: searchString
  })
  return videoList
}


const getYoutubeVideo = async(videoId)=>{
  const videoLink = await google.youtube('v3').videos.list(
    {
      key: YOUTUBE_KEY,
      "part": [
        "player"
      ],
      "id": [
        videoId
      ]
    }
  )
  // console.log('-------getYoutubeVideo----------') 
  // console.log(videoLink.data.items) 
    return videoLink

}

router.post('/api/youtubesearch', ({body},res) => {
    const result = getYouTubeData(body.searchString).then((result)=>{
    res.json(result.data.items)
    })
    })

router.post('/api/youtubevideo', ({body},res) => {
    const result = getYoutubeVideo(body.videoId).then((result)=>{
      res.json(result.data.items)
      })
      })

    module.exports = router;