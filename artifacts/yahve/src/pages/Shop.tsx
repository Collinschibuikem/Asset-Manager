import React, { useState, useMemo, useEffect } from 'react';
import { Layout } from '@/components/layout/Layout';
import { ProductCard } from '@/components/ui/ProductCard';
import { YAHVE_PRODUCTS } from '@/data/products';
import { ChevronDown, SlidersHorizontal } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Shop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedSort, setSelectedSort] = useState<string>('featured');

  const categories = ['All', ...Array.from(new Set(YAHVE_PRODUCTS.map(p => p.category)))];

  const filteredProducts = useMemo(() => {
    let result = [...YAHVE_PRODUCTS];
    if (selectedCategory !== 'All') {
      result = result.filter(p => p.category === selectedCategory);
    }
    
    switch (selectedSort) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
    }
    
    return result;
  }, [selectedCategory, selectedSort]);

  return (
    <Layout>
      <div className="pt-24 pb-12 px-6 max-w-[1600px] mx-auto min-h-[calc(100vh-400px)]">
        
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl tracking-widest font-medium uppercase mb-4">Shop All</h1>
          <p className="text-gray-500 text-sm">Every piece designed with intention.</p>
        </div>

        {/* Filters Bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-y border-[#EEEEEE] py-4 mb-12">
          <button 
            className="flex items-center gap-2 text-xs uppercase tracking-widest font-medium hover:text-gray-500 transition-colors md:hidden"
            onClick={() => setIsFiltersOpen(!isFiltersOpen)}
          >
            <SlidersHorizontal className="w-4 h-4" /> Filters
          </button>

          <div className={`w-full md:w-auto md:flex gap-8 ${isFiltersOpen ? 'flex flex-col' : 'hidden'}`}>
            <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2 md:pb-0">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-xs uppercase tracking-widest font-medium whitespace-nowrap transition-colors ${
                    selectedCategory === cat ? 'text-black border-b border-black pb-1' : 'text-gray-400 hover:text-black pb-1'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-medium self-end md:self-auto">
            <span className="text-gray-400 hidden sm:inline">Sort By</span>
            <select 
              className="bg-transparent border-none outline-none cursor-pointer focus:ring-0"
              value={selectedSort}
              onChange={(e) => setSelectedSort(e.target.value)}
            >
              <option value="featured">Featured</option>
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 text-gray-500">
            No products found matching your criteria.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-16">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

      </div>
    </Layout>
  );
}
