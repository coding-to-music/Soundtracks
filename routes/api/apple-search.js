const express = require("express");
const jwt = require('jsonwebtoken');
const axios = require('axios');
const router = express.Router();


// set up vars
const teamId = process.env.TEAM_ID
const keyId = process.env.KEY_ID
const alg = process.env.ALG






// FUNCTIONS
async function getSongResults(searchStr,token){
// setup json payload for the jwt signing
  payload = {
    "iss": teamId,
    "exp": Math.floor((Date.now() / 1000) + (60 * 60)),
    "iat": Math.floor(Date.now() / 1000)
  }

  const url = `https://api.music.apple.com/v1/catalog/us/search?term=${searchStr}&limit=1&types=songs`
  const headers = {
    headers: {
      Authorization: `Bearer ${token}`,
    }}
  
  const response = await axios.get(url,headers);
  try{ 
    
    if(response.data.results.songs){
    // console.log('-------STATUS------------')
    // console.log(response.status , searchStr)
      return response
    }else {
     console.log('---------DID NOT FIND--------')
     console.log(searchStr)
      return false
    }

 
}catch (err) {
 
  console.log(searchStr, err )
}
}
  

// ROUTES 
router.get("/api/applesearch", (req, res) => {
  res.send('WELCOME THIS API FUNCTION DOES NOT HAVE A GET RESPONSE, PLEASE USE A POST METHOD');
});

router.post('/api/applesearch', ({body},res) => {
  const privateKey = process.env.SECRET_KEY
  const devToken = jwt.sign(payload, privateKey, { algorithm: alg, header:{kid:keyId}});
  console.log("devToken: ", devToken)
  const issued = new Date(payload.iat*1000)
  const expires = new Date(payload.exp*1000)
  console.log('------ISSUED------>',issued.toLocaleString())
  console.log('------EXPIRES------>',expires.toLocaleString())
  const result = getSongResults(body.searchString,devToken).then((result)=>{
    if (result){
  
      res.json(result.data)
    } else { 
      res.json()
      
}
    })
  })

  module.exports = router;