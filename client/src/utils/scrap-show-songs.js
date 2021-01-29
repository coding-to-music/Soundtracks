const axios = require('axios');
const cheerio = require('cheerio');

async function getSongs(songLink) {
  try {
    const response = await axios.get(`https://www.tunefind.com${songLink.assetLink}`);

    const linkarray = parseHTMLsongList(response.data, '.SongRow__center___1HKjk')
    return linkarray;
  } catch (error) {
    console.error(error);
  }

}

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


module.exports = { getSongs}