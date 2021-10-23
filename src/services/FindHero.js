const axios = require('axios');
const myKey = "10224981963952367";

export async function findHero (setHeroes, value) {
    const apiURL = `https://www.superheroapi.com/api.php/${myKey}/search/${encodeURI(value)}`
    axios.get(apiURL)
    .then(res => {
        const data = res.data.results
        const info = data.map(({image, name, id, powerstats, biography, appearance, work}) => {
            const url = image.url
            const heroName = name
            const heroID = id
            const {intelligence, strength, speed, durability, power, combat} = powerstats
            const stats = {intelligence, strength, speed, durability, power, combat}
            const side = biography.alignment
            const fullName = [biography["full-name"]]
            const alias = biography.aliases
            const {height, weight} = appearance
            const heightAndWeight = {height, weight}
            const eyeColor = [appearance["eye-color"]]
            const hairColor = [appearance["hair-color"]]
            const job = work.occupation
            return {heroName, url, heroID, stats, side, fullName, alias,heightAndWeight, eyeColor, hairColor, job}
        })
        setHeroes(info)
    })
    .catch(() => setHeroes([]))
}