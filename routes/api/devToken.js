const express = require("express");
const jwt = require('jsonwebtoken');
const router = express.Router();

// set up vars
const teamId = process.env.TEAM_ID
const keyId = process.env.KEY_ID
const alg = process.env.ALG

console.log('teamid, ', teamId)
console.log('keyid, ', keyId)
console.log("alg, ", alg)
// setup json payload for the jwt signing
payload = {
  "iss": teamId,
  "exp": Math.floor((Date.now() / 1000)+43200),
  "iat": Math.floor(Date.now() / 1000)
}


router.get("/api/devtoken", (req, res) => {
  const privateKey = process.env.SECRET_KEY
  const devToken = jwt.sign(payload, privateKey, { algorithm: alg, header:{kid:keyId}});
  const response={
    token: devToken
  }
  res.json(response)
});


module.exports = router;