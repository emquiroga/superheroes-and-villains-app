const axios = require('axios');
const myURL = 'http://challenge-react.alkemy.org/'

export async function setLogin({email, password}) {
    try {
        const response = await axios.post(
            myURL,
            {
                "email": email,
                "password": password
            }
        )
        let data = {
            status : response.status,
            message : response.data
        }
        localStorage.setItem("apiToken", JSON.stringify(data.message.token))
    }
    catch (error){
        let data = {
            status: error.response.status,
            message: error.response.data
        }
        return data
    }
}
