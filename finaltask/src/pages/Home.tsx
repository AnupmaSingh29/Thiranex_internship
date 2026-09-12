import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/ProductCard';

export const Home: React.FC = () => {
  return (
    <div>
      <section className="bg-indigo-900 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl font-extrabold mb-4">Next-Gen Tech Essentials</h1>
          <p className="text-indigo-200 text-lg mb-8 max-w-2xl mx-auto">
            Curated premium electronics and ergonomic work setup accessories designed for peak productivity.
          </p>
          <Link
            to="/catalog"
            className="inline-flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold transition"
          >
            Shop Catalog <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6">Featured Items</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};