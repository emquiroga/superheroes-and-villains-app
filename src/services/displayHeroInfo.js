const axios = require('axios');
const myKey = "10224981963952367";

export async function displayHeroInfo (id, setInfo) {
    const apiURL = `https://www.superheroapi.com/api.php/${myKey}/${id}`
    axios.get(apiURL)
    .then(res => {
        const data = res.data
        setInfo(data)
    }) 
    .catch((error) => console.log(error))
}
