const express = require("express");
const router = express.Router();
const axios = require('axios');
const cheerio = require('cheerio');




router.get("/api/all-season-songs", (req, res) => {
  res.send('WELCOME THIS API FUNCTION DOES NOT HAVE A GET RESPONSE, PLEASE USE A POST METHOD');
});


router.post("/api/all-season-songs", (req,res) => {
 
getEpisodesforSeason(req.body.assetLink).then((episodes)=>{
  // console.log(episodes.data)
  getSongsforSeason(episodes.data).then((data)=>{
    res.json(data)
  })
})
  
})

 async function getEpisodesforSeason(assetLink) {
  return  await axios.post('http://localhost:8080/api/episode',{
    assetLink: assetLink
  })
 }

 async function getSongsforSeason(episodes) {
   
  let allSongs = await episodes.map(async (item)=>{
    return await axios.post('http://localhost:8080/api/show/songlist',{
      assetLink: item.assetLink
    })
  })

  const results = await Promise.all(allSongs)
  results.map((item)=>{ allSongs.push(item.data)})
  return allSongs
}



module.exports = router;


