const axios = require('axios');
const cheerio = require('cheerio');

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

async function getEpisode(episodeObj) {
  try {

    const response = await axios.get(`https://www.tunefind.com${episodeObj.assetLink}`);
    const linkarray = parseHTMLEpisode(response.data, '.EpisodeListItem__container___3A-mL')
    return linkarray;
  } catch (error) {
    console.error(error);
  }

}

module.exports = { getEpisode }