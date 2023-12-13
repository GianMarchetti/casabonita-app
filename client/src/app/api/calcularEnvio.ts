const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://correo-argentino1.p.rapidapi.com/calcularPrecio',
  params: {
    cpOrigen: '3000',
    cpDestino: '2000',
    provinciaOrigen: 'AR-SF',
    provinciaDestino: 'AR-S',
    peso: '5'
  },
  headers: {
    'X-RapidAPI-Key': 'e3c34acc7dmsh05f6ff2c9385417p1033a0jsn971bd1d364a1',
    'X-RapidAPI-Host': 'correo-argentino1.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}