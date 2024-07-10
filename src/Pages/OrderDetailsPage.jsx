import React from "react";
import { useParams } from "react-router-dom";

function OrderDetailsPage() {
  const { orderId } = useParams();

  // Sample data to represent an order (replace this with fetched data from the API)
  const order = {
    id: orderId,
    total: 150.5,
    items: 3,
    deliveryDays: 5,
  };

  return (
    <div className="flex flex-col p-4">
      <h1 className="text-2xl font-bold mb-4">Order Details</h1>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <p>
          <strong>Order ID:</strong> {order.id}
        </p>
        <p>
          <strong>Total:</strong> ${order.total.toFixed(2)}
        </p>
        <p>
          <strong>Number of Items:</strong> {order.items}
        </p>
        <p>
          <strong>Days till Delivery:</strong> {order.deliveryDays} days
        </p>
      </div>
    </div>
  );
}

export default OrderDetailsPage;
