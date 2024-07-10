import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const Details = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams();

    useEffect(() => {
        axios.get(`https://6685a3abb3f57b06dd4d6580.mockapi.io/products/${id}`)
            .then(res => {setProduct(res.data)
              console.log(res.data);
            });
    }, [id]);

    const addToCart = () => {
        const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
        const existingProduct = savedCart.find(item => item.id === product.id);

        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            savedCart.push({ ...product, quantity: 1 });
        }

        localStorage.setItem('cart', JSON.stringify(savedCart));
    };

    return (
        <>
            <div className='container mx-auto mt-20'>
                <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden md:flex">
                    <div className="md:flex-shrink-0">
                        <img className="h-auto w-full object-cover md:w-48" src={product.image} />
                    </div>
                    <div className="p-8">
                        <div className="uppercase tracking-wide text-sm text-yellow-500 font-semibold">{product.category}</div>
                        <h1 className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{product.name}</h1>
                        <p className="mt-2 text-gray-500">{product.description}</p>
                        <div className="mr-[100%] mt-8">
                            <h2 className="text-yellow-500 text-sm font-semibold">Price:</h2>
                            <p className="mt-1 text-gray-900 text-2xl">`${product.price}`</p>
                        </div>
                        <div className="mt-4">
                            <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 focus:outline-none focus:bg-yellow-600" onClick={addToCart}>
                                Add to Cart
                            </button>
                            <Link to="/home">
                                <button className="ml-4 bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 focus:outline-none focus:bg-gray-400">
                                    Back to Home Page
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Details;