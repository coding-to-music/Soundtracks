const express = require("express");
const jwt = require('jsonwebtoken');
const axios = require('axios');
const router = express.Router();


// set up vars
const teamId = process.env.TEAM_ID
const keyId = process.env.KEY_ID
const alg = process.env.ALG


// setup json payload for the jwt signing
payload = {
  "iss": teamId,
  "exp": Math.floor((Date.now() / 1000)+60),
  "iat": Math.floor(Date.now() / 1000)
}


// FUNCTIONS
async function getSongResults(searchStr,token){

  const url = `https://api.music.apple.com/v1/catalog/us/search?term=${searchStr}&limit=1&types=songs`
  const headers = {
    headers: {
      Authorization: `Bearer ${token}`,
    }}
  
  const response = await axios.get(url,headers);
  // console.log('response: ', response)
  return response
}
  

// ROUTES 
router.get("/api/applesearch", (req, res) => {
  res.send('WELCOME THIS API FUNCTION DOES NOT HAVE A GET RESPONSE, PLEASE USE A POST METHOD');
});

router.post('/api/applesearch', ({body},res) => {
  const privateKey = process.env.SECRET_KEY
  const devToken = jwt.sign(payload, privateKey, { algorithm: alg, header:{kid:keyId}});
  const result = getSongResults(body.searchString,devToken).then((result)=>{
    res.json(result.data)
    })
  })

  module.exports = router;