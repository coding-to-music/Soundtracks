const express = require("express");
const router = express.Router();
const axios = require('axios');
const cheerio = require('cheerio');
const seasons = require('../../utils/scrap-seasons');
const episodes = require('../../utils/scrap-episodes');
const allShowSongs = require('../../utils/scrap-show-songs')
const { get } = require("./search");

let episodeArray = []

router.get("/api/all-season-songs", (req, res) => {
  res.send('WELCOME THIS API FUNCTION DOES NOT HAVE A GET RESPONSE, PLEASE USE A POST METHOD');
});


// router.post("/api/all-season-songs", (req,res) => {
// getAllSeaonsSongsLinks(req.body).then((showLinks)=>{
//   getAllSongs(showLinks).then((songdata)=>{
//     // console.log(songdata)
//     return res.json(songdata)
//   })
// })

// })

 async function getAllSeaonsSongsLinks(json) {
  const seaonsLinksArray = await seasons.getSeasons(json)
  let espisodeLinkArray = []
  // loop through the seasons and get episodes links for each season 
  seaonsLinksArray.forEach((item)=>{  
    espisodeLinkArray.push(episodes.getEpisode({
      assetLink: item
    }))
 })
 // resolve al the promises 
 const episodeInfo = Promise.all(espisodeLinkArray).then((data)=>{
 
  const newData = []
  data.forEach((item)=>{ newData.push(...item)})

  return newData
 })

 return episodeInfo
 }


 async function getAllSongs(showLinks) {
  const allSongs=[]
 showLinks.forEach((item)=>{
   allSongs.push(allShowSongs.getSongs(item))
 })
const songs = Promise.all((allSongs)).then((data)=>{
return data
})
console.log(songs);
 }

module.exports = router;
