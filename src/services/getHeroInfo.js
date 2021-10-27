const axios = require('axios');
const myKey = "10224981963952367";

export async function getHeroInfo (id) {
    const apiURL = `https://www.superheroapi.com/api.php/${myKey}/${id}`
    return axios.get(apiURL)
    .then((res) => res.data) 
}
