const axios = require('axios');
const {REACT_APP_API_KEY} = process.env;

export async function findHero (value) {
    const apiURL = `https://www.superheroapi.com/api.php/${REACT_APP_API_KEY}/search/${encodeURI(value)}`
    return axios.get(apiURL)
        .then((res) => res.data.results)
}
