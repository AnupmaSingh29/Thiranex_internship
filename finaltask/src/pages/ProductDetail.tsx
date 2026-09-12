import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ShoppingCart, ArrowLeft } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { useCart } from '../context/CartContext';

export const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();

  const product = PRODUCTS.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
        <Link to="/catalog" className="text-indigo-600 hover:underline">Back to Catalog</Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Link to="/catalog" className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-indigo-600 mb-6">
        <ArrowLeft className="w-4 h-4" /> Back to Catalog
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-6 rounded-2xl border border-gray-100">
        <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wider">{product.category}</span>
            <h1 className="text-3xl font-bold mt-1 mb-3">{product.name}</h1>
            <div className="flex items-center gap-2 mb-4">
              <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
              <span className="font-semibold">{product.rating}</span>
            </div>
            <p className="text-gray-600 mb-6">{product.description}</p>
          </div>
          <div>
            <div className="text-3xl font-bold mb-6">${product.price.toFixed(2)}</div>
            <button
              onClick={() => addToCart(product)}
              className="w-full py-3 bg-indigo-600 text-white rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-indigo-700 transition"
            >
              <ShoppingCart className="w-5 h-5" /> Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};