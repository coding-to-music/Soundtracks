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


async function createPlaylist(body,token){
const url = `https://api.music.apple.com/v1/me/library/playlists`
const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Music-User-Token": body.json.userAuth
      }
    }
const appleRequest = body.json.appleRequest
const response = await axios.post(url,appleRequest,headers)
return response.data
}



 



router.get("/api/appleplaylist", (req, res) => {
  res.send('WELCOME THIS API FUNCTION DOES NOT HAVE A GET RESPONSE, PLEASE USE A POST METHOD');
});



router.post('/api/appleplaylist', ({body},res) => {
  const privateKey = process.env.SECRET_KEY
  const devToken = jwt.sign(payload, privateKey, { algorithm: alg, header:{kid:keyId}});
  const result = createPlaylist(body,devToken).then((result)=>{

    res.json(result)
    
    })
  })
module.exports = router;