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



router.get("/api/devtoken", (req, res) => {
// setup json payload for the jwt signing
payload = {
  "iss": teamId,
  "exp": Math.floor((Date.now() / 1000)+(60 * 60)),
  "iat": Math.floor(Date.now() / 1000)
}

  const privateKey = process.env.SECRET_KEY
  const devToken = jwt.sign(payload, privateKey, { algorithm: alg, header:{kid:keyId}});
  const response={
    token: devToken
  }
  console.log('devTOKEN: ',  response)
  const issued = new Date(payload.iat*1000)
  const expires = new Date(payload.exp*1000)
  console.log('------ISSUED------>',issued.toLocaleString())
  console.log('------EXPIRES------>',expires.toLocaleString())
  res.json(response)
});


module.exports = router;