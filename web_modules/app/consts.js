const apiPath = 'https://api.spotify.com/v1/';

export default {
  api: {
    endpoints: {
      getSearch:(query, artist)=>{
      return apiPath+`search?query=${query}&offset=0&limit=20&type=${artist}`
      }
    }
  }
}
