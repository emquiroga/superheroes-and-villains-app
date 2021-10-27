const axios = require('axios');
const myKey = "10224981963952367";

export async function findHero (value) {
    const apiURL = `https://www.superheroapi.com/api.php/${myKey}/search/${encodeURI(value)}`
    return axios.get(apiURL)
        .then((res) => res.data.results)
}
