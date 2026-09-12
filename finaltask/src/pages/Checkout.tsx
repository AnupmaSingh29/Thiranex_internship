import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

export const Checkout: React.FC = () => {
  const { cart, subtotal, clearCart } = useCart();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    clearCart();
  };

  if (submitted) {
    return (
      <div className="max-w-md mx-auto my-16 p-6 bg-white rounded-xl shadow-sm text-center">
        <h2 className="text-2xl font-bold text-green-600 mb-2">Order Confirmed!</h2>
        <p className="text-gray-600 mb-6">Thank you for your purchase. We have received your order.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-xl border border-gray-100">
          <h2 className="font-semibold text-lg mb-2">Shipping Information</h2>
          <input required type="text" placeholder="Full Name" className="w-full p-2.5 border rounded-lg" />
          <input required type="email" placeholder="Email Address" className="w-full p-2.5 border rounded-lg" />
          <input required type="text" placeholder="Address" className="w-full p-2.5 border rounded-lg" />
          <button type="submit" className="w-full py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700">
            Complete Order (${subtotal.toFixed(2)})
          </button>
        </form>

        <div className="bg-white p-6 rounded-xl border border-gray-100 h-fit space-y-3">
          <h2 className="font-semibold text-lg border-b pb-2">Order Summary</h2>
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between text-sm">
              <span>{item.name} × {item.quantity}</span>
              <span className="font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
          <div className="border-t pt-2 flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};