import React, { useEffect, useState } from 'react';
import axios from 'axios';

function PreviousOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const user = JSON.parse(localStorage.getItem('user')) || {};

  useEffect(() => {
    axios.get(`https://665855e85c3617052647fe40.mockapi.io/Orders?user_id=${user.id}`)
      .then((response) => {
        setOrders(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [user.id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Previous Orders</h2>
      <ul>
        {orders.map(order => (
          <li key={order.id} className="mb-4">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-bold">Order ID: {order.id}</h3>
              <p>Total: ${order.total.toFixed(2)}</p>
              <p>Items: {order.items.length}</p>
              <p>Days till Delivery: 5 days</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PreviousOrders;


