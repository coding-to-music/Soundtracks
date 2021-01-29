const express = require("express");
const router = express.Router();
const axios = require('axios');
const cheerio = require('cheerio');
require('dotenv').config();

const URL=process.env.BASE_URL

// GET 
router.get("/api/songlist", (req, res) => {
  res.send('WELCOME THIS API FUNCTION DOES NOT HAVE A GET RESPONSE, PLEASE USE A POST METHOD');
});

// POST
// sample json return 
/*
{ title: 'Main Titles', artist: 'John Ottman' },
  { title: 'Rough Flight', artist: 'John Ottman' },
  { title: 'Little Secrets/Power of the Sun', artist: 'John Ottman' },
  { title: 'Memories', artist: 'John Ottman' },
  { title: 'How Could You Leave Us', artist: 'John Ottman' },
  { title: 'Bank Job', artist: 'John Ottman' },
  { title: "You're Not One of Them", artist: 'John Ottman' },
  { title: 'Tell Me Everything', artist: 'John Ottman' },
  { title: 'The People You Care For', artist: 'John Ottman' },
  { title: 'I Wanted You to Know', artist: 'John Ottman' },
  { title: 'In the Hands of Mortals', artist: 'John Ottman' },
  { title: 'Saving the World', artist: 'John Ottman' },
  { title: 'Not Like the Train Set', artist: 'John Ottman' },
  { title: 'Reprise / Fly Away', artist: 'John Ottman' },
  { title: 'So Long Superman', artist: 'John Ottman' }
*/

router.post("/api/show/songlist", (req,res) => {
  const responseArray = []
  getSongs(req.body).then((data)=>{
    res.json(data)
  })
})

// MAKE INITAL CALL AND PASS WEBPAGE TO PARSING FUNCTION 
async function getSongs(songLink) {
  try {
    const response = await axios.get(`${URL}${songLink.assetLink}`);

    const linkarray = parseHTMLsongList(response.data, '.SongRow__center___1HKjk')
    return linkarray;
  } catch (error) {
    console.error(error);
  }

}
// PARSE HTML
function parseHTMLsongList(html, target) {
  const $ = cheerio.load(html);
  let songInfo = [];
  $(target).each((index, element) => {
    const songTitle = $(element).find('.SongTitle__heading___3kxXK').find('a').text();
    const artist = $(element).find('.SongEventRow__subtitle___3Qli4').find('a').text();
    if (songTitle !== '' || artist !== '') {
      const song = {
        title: songTitle,
        artist: artist
      }
      songInfo.push(song);


    } else {
    
    };
  });
  return songInfo
}

module.exports = router;