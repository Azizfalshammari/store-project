import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ProductsList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://6685a3abb3f57b06dd4d6580.mockapi.io/products')
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="flex flex-wrap p-4">
      {products.map(product => (
        <div key={product.id} className="w-full sm:w-1/2 lg:w-1/3 p-2">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-lg" />
            <h3 className="text-lg font-bold mt-2">{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
            <Link to={`/details/${product.id}`} className="text-blue-500 hover:text-blue-700">
              View Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductsList;
