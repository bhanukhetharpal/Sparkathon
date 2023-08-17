const apiUrl = 'http://localhost:5000/api/products/product-details/:id';

const fetchProductDetails = async (productId) => {
  try {
    const response = await fetch(apiUrl.replace(':id', productId));
    const data = await response.json();
    
    // Extract the values you need from the response
    const { name, description, category, price, brand, image_url } = data;
    console.log(name);
    // You can perform any further processing or logic here
    // ...

    return { name, description, category, price, brand, image_url };
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};

export default fetchProductDetails;
