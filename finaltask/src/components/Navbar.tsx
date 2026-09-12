import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Store } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const Navbar: React.FC<{ onOpenCart: () => void }> = ({ onOpenCart }) => {
  const { totalItems } = useCart();

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl text-gray-900">
          <Store className="w-6 h-6 text-indigo-600" />
          <span>ApexStore</span>
        </Link>
        
        <nav className="flex items-center gap-6">
          <Link to="/" className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition">
            Home
          </Link>
          <Link to="/catalog" className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition">
            Catalog
          </Link>
          <button
            onClick={onOpenCart}
            className="relative p-2 text-gray-600 hover:text-indigo-600 transition"
            aria-label="Shopping Cart"
          >
            <ShoppingBag className="w-6 h-6" />
            {totalItems > 0 && (
              <span className="absolute top-0 right-0 inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-indigo-600 rounded-full">
                {totalItems}
              </span>
            )}
          </button>
        </nav>
      </div>
    </header>
  );
};