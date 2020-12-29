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
  console.log(searchString)
  const videoList =  await google.youtube('v3').search.list({
    key: YOUTUBE_KEY,
    part: 'snippet',
    type: 'video',
    q: searchString
  })

const videoID = videoList.data.items[0].id.videoId
// console.log('-------VIDEOID----------')
// console.log(videoID)
  
  const videoLink = await google.youtube('v3').videos.list(
    {
      key: YOUTUBE_KEY,
      "part": [
        "player"
      ],
      "id": [
        videoID
      ]
    }
  )
  console.log('-------VIDEO LINK----------') 
 console.log(videoLink.data.items) 
  return videoList
}

router.post('/api/youtubesearch', ({body},res) => {
    const result = getYouTubeData(body.searchString).then((result)=>{
    // console.log('----POST----')
    // console.log(body.searchString)
    // console.log(result.data.items)
    res.json(result.data.items)
    })
    })

    module.exports = router;