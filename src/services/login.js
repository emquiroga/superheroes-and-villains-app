const axios = require('axios');
const myURL = 'http://challenge-react.alkemy.org/';

export async function login({ email, password }) {
  const response = await axios.post(myURL, {
    email: email,
    password: password,
  });
  let data = {
    status: response.status,
    message: response.data,
  };
  return data;
}
