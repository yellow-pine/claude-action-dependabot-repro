const lodash = require('lodash');
const axios = require('axios');

// Dummy usage to ensure dependencies are detected
console.log('Lodash version:', lodash.VERSION);
console.log('Using axios for HTTP requests');

// Simple example usage
const numbers = [1, 2, 3, 4, 5];
const doubled = lodash.map(numbers, n => n * 2);
console.log('Doubled numbers:', doubled);

// Axios example (not executed)
async function fetchData() {
  try {
    const response = await axios.get('https://api.example.com/data');
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

module.exports = { fetchData };