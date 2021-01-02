import axios from 'axios'

export default {

getSearch: function (queryStr) {
  return axios.post('http://localhost:3000/api/search/',{
    search: queryStr
  })
}



}