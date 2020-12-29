const axios = require('axios');
const cheerio = require('cheerio');



function   parseHTMLseasons  (html, target) {
    const $ = cheerio.load(html);
    let links = [];
    $(target).each((index, element) => {
      const link = $(element).find('a').attr('href')
  
      links.push(link);
    });
    return links
  }

async function getSeasons  (assetObj) {
    try {
      console.log('getting the seasons', assetObj)
      const response = await axios.get(`https://www.tunefind.com${assetObj.assetLink}`);
      const linkarray = parseHTMLseasons(response.data, '.EpisodeListItem__title___32XUR')
      return linkarray;
    } catch (error) {
      console.error(error);
    }
  }

function  buildJSON (assetItem){
    const assetArray = assetItem.split('/')
    const jsonData = {
      "assetType" : assetArray[1],
      "assetName" : assetArray[2].replace(/-/g," "),
      "assetSeason":assetArray[3].replace(/-/g," ") ,
      "assetLink" : assetItem
    }
    return jsonData
  }

module.exports = { getSeasons}






