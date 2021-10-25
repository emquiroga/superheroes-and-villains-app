const axios = require('axios');
const myKey = "10224981963952367";

export async function findHero (setHeroes, value) {
    const apiURL = `https://www.superheroapi.com/api.php/${myKey}/search/${encodeURI(value)}`
    axios.get(apiURL)
    .then(res => {
        const data = res.data.results
        const info = data.map(({image, name, id, powerstats, biography, appearance}) => {
            const url = image.url
            const heroName = name
            const heroID = id
            const {intelligence, strength, speed, durability, power, combat} = powerstats
            const stats = {intelligence, strength, speed, durability, power, combat}
            const side = biography.alignment
            const {height, weight} = appearance
            const heightAndWeight = {height, weight}
            return {heroName, url, heroID, stats, side, heightAndWeight}
        })
        setHeroes(info)
    })
    .catch(() => setHeroes([]))
}