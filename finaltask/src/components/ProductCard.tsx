import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

export const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition flex flex-col justify-between">
      <Link to={`/product/${product.id}`} className="group relative overflow-hidden aspect-square block bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-300"
          loading="lazy"
        />
        <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-gray-700 text-xs px-2.5 py-1 rounded-full font-medium">
          {product.category}
        </span>
      </Link>

      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-1 mb-1">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span className="text-xs font-semibold text-gray-600">{product.rating}</span>
          </div>
          <Link to={`/product/${product.id}`}>
            <h3 className="font-semibold text-gray-800 hover:text-indigo-600 transition line-clamp-1">
              {product.name}
            </h3>
          </Link>
          <p className="text-sm text-gray-500 mt-1 line-clamp-2">{product.description}</p>
        </div>

        <div className="mt-4 flex items-center justify-between pt-3 border-t border-gray-50">
          <span className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</span>
          <button
            onClick={() => addToCart(product)}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-medium transition"
            aria-label="Add to cart"
          >
            <ShoppingCart className="w-4 h-4" />
            <span>Add</span>
          </button>
        </div>
      </div>
    </div>
  );
};