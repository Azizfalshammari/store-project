import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
    const [cart, setCart] = useState([]);
    useEffect(() => {
        const SavedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(SavedCart);
    }, []);
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const handleRemove = (id) => {
        const updatedCart = cart.filter(item => item.id !== id);
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };
    const handleQuantity = (id, quantity) => {
        const updatedCart = cart.map(item => {
            if (item.id === id) {
                return { ...item, quantity };
            }
            return item;
        });
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };
    return (
        <>
            <div className='container mx-auto p-4'>
                {cart.length === 0 ? (
                    <p className='text-gray-700'>Your cart is empty.</p>
                ) : (
                    <>
                        <div className='grid grid-cols-1 gap-4'>
                            {cart.map(item => (
                                <div key={item.id} className='bg-white p-4 rounded-lg shadow-md flex items-center'>
                                    <img src={item.image} className='w-24 h-24 object-cover mr-4'></img>
                                    <div>
                                        <h3 className='text-xl font-semibold mb-2'>{item.title}</h3>
                                        <p className='text-gray-700'>{item.quantity} x {item.price}$</p>
                                        <div className='mt-2 flex items-center'>
                                        <label htmlFor={`quantity-${item.id}`} className='mr-2'>Quantity:</label>
                                            <select id={`quantity-${item.id}`} value={item.quantity}onChange={(e) => handleQuantity(item.id, parseInt(e.target.value))} className='border border-gray-300 rounded px-2 py-1'>
                                                {[1, 2, 3, 4, 5].map(num => (
                                                    <option key={num} value={num}>{num}</option>
                                                ))}
                                            </select>
                                          
                                            <button className='bg-red-500 text-white px-3 py-1 rounded ml-2'onClick={() => handleRemove(item.id)}>
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className='mt-4'>
                            <h2 className='text-2xl font-bold'>Total: {total}$</h2>
                            <Link to="/checkout">
                                <button className='bg-yellow-500 text-white px-4 py-2 rounded mt-2'>Checkout</button>
                            </Link>
                        </div>
                    </>
                )}
            </div>
        </>
    );
};

export default Cart;