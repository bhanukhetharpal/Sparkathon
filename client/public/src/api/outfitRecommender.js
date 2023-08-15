import 'dotenv/config';
const apiKey = process.env.customSearchEngineApiKey;
const searchEngineId = process.env.searchEngineId;
const query = 'Purple Oversized Outfit';

const apiUrl = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${searchEngineId}&q=${encodeURIComponent(query)}`;

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    console.log(data); // Handle the JSON response here
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
