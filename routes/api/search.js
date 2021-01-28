const express = require("express");
const router = express.Router();
const axios = require('axios');
const cheerio = require('cheerio');
require('dotenv').config();

const URL=process.env.BASE_URL
router.get("/api/search", (req, res) => {
  res.send('WELCOME THIS API FUNCTION DOES NOT HAVE A GET RESPONSE, PLEASE USE A POST METHOD');
});


// POST 
// sample response from api below:  
/*
{
    assetType: 'show',
    assetName: 'batwoman',
    assetLink: '/show/batwoman'
 },
*/

router.post("/api/search", (req, res) => {
const searchTerm=req.body.search

getTFresult(searchTerm).then((data)=>{
  // res.send(data)
  const responseArray = []
data.forEach((item)=> {
  const builtJSON = buildJSON(item)
  responseArray.push(builtJSON)
})

res.json(responseArray);
})

});




// MAKE INITAL CALL AND PASS WEBPAGE TO PARSING FUNCTION 
async function getTFresult(searchStr) {
  try {
    const response = await axios.get(`${URL}/search/site?q=${searchStr}`);
    const linkarray = parseHTMLsearch(response.data, '.tf-search-highlight');
    return linkarray;
  } catch (error) {
    console.error(error);
  }
}


// PARESE HTML 
function parseHTMLsearch(html, target) {
  const $ = cheerio.load(html);
  let links = [];
  $(target).each((index, element) => {
    var link = $(element).attr('href');
    links.push(link);
  });
  return links
}

// BUILD JSON FROM THE RETURNED URL LINK
function buildJSON(assetItem){
  const assetArray = assetItem.split('/')
  const jsonData = {
    "assetType" : assetArray[1],
    "assetName" : assetArray[2].replace(/-/g," "),
    "assetLink" : assetItem
  }
  return jsonData
  
}

module.exports = router;