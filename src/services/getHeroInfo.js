const axios = require('axios');
const {REACT_APP_API_KEY} = process.env;

export async function getHeroInfo (id) {
    const apiURL = `https://www.superheroapi.com/api.php/${REACT_APP_API_KEY}/${id}`
    return axios.get(apiURL)
    .then((res) => res.data) 
}
