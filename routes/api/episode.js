const express = require("express");
const router = express.Router();
const axios = require('axios');
const cheerio = require('cheerio');
require('dotenv').config();

const URL=process.env.BASE_URL

// GET 

router.get("/api/episode", (req, res) => {
  res.send('WELCOME THIS API FUNCTION DOES NOT HAVE A GET RESPONSE, PLEASE USE A POST METHOD');
});

// POST ROUTE
//Sample json resturn from route 
/*
  {
        "assetName": "S1 · E1 · Pilot",
        "assetLink": "/show/batwoman/season-1/91769",
        "assetSongs": "8"
    },
*/
router.post("/api/episode", (req,res) => {
  const responseArray = []
 

  getEpisode(req.body).then((data)=>{
    res.json(data)
  })
})

// PARSEING FUNCTION 
function parseHTMLEpisode(html, target) {
  episodesInformationObj = []
  const $ = cheerio.load(html);

  $(target).each((index, element) => {
    const elhtml = $(element).html()
    const name = $(elhtml).find('.EpisodeListItem__title___32XUR').text()
    const link = $(elhtml).find('.EpisodeListItem__title___32XUR').find('a').attr('href')
    const song = $(element).find('.EpisodeListItem__links___xftsa').text().split(' ', 1)
    let episodeInfo = {
      assetName: name,
      assetLink: link,
      assetSongs: song[0]
    }
    episodesInformationObj.push(episodeInfo);
  });
  return episodesInformationObj
}

// MAKE INITAL CALL AND PASS WEBPAGE TO PARSING FUNCTION 
async function getEpisode(episodeObj) {
  try {

    const response = await axios.get(`${URL}${episodeObj.assetLink}`);
    const linkarray = parseHTMLEpisode(response.data, '.EpisodeListItem__container___3A-mL')
    return linkarray;
  } catch (error) {
    console.error(error);
  }

}

module.exports = router;