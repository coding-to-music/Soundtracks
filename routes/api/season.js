const express = require("express");
const router = express.Router();
const axios = require('axios');
const cheerio = require('cheerio');

// GET 

router.get("/api/season", (req, res) => {
  res.send('WELCOME THIS API FUNCTION DOES NOT HAVE A GET RESPONSE, PLEASE USE A POST METHOD');
});

//POST 
// sample json return 
/*
  {
        "assetType": "show",
        "assetName": "batwoman",
        "assetSeason": "season 1",
        "assetLink": "/show/batwoman/season-1/91769"
    },
*/
router.post("/api/season", (req,res) => {
  const responseArray = []
  getSeasons(req.body).then((data)=>{
  data.forEach((item)=> {
    const builtJSON = buildJSON(item)
    responseArray.push(builtJSON)
   
  })
  
  res.json(responseArray);
 
  })

})


// PARSE HTML
function parseHTMLseasons(html, target) {
  const $ = cheerio.load(html);
  let links = [];
  $(target).each((index, element) => {
    const link = $(element).find('a').attr('href')

    links.push(link);
  });
  return links
}

// MAKE INITAL CALL AND PASS WEBPAGE TO PARSING FUNCTION 
async function getSeasons(assetObj) {
  try {
    const response = await axios.get(`https://www.tunefind.com${assetObj.assetLink}`);
    const linkarray = parseHTMLseasons(response.data, '.EpisodeListItem__title___32XUR')
    return linkarray;
  } catch (error) {
    console.error(error);
  }
}

// BUILD JSON FROM THE RETURNED URL LINK
function buildJSON(assetItem){
  const assetArray = assetItem.split('/')
  const jsonData = {
    "assetType" : assetArray[1],
    "assetName" : assetArray[2].replace(/-/g," "),
    "assetSeason":assetArray[3].replace(/-/g," ") ,
    "assetLink" : assetItem
  }
  return jsonData
  
}

module.exports = router;