import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} ApexStore Inc. Built with React & Tailwind CSS.</p>
      </div>
    </footer>
  );
};