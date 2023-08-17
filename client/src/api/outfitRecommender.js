 const apiKey = "AIzaSyC9qTZtXDn_X42Qm3OSTNphDIdlU6F_byg";
 const searchEngineId = "a49bdf4c7cf744596";
const fetchApiData = async (query) => {
  console.log(query);
  const apiUrl = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${searchEngineId}&q=${encodeURIComponent(query)}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data.items;
  } catch (error) {
    throw new Error('Error fetching data:', error);
  }
};

export default fetchApiData;










