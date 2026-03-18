import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, SlidersHorizontal, Search, X } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const categoryFilter = searchParams.get('category') || 'All';
  const sortFilter = searchParams.get('sort') || 'popularity';

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category Filter
    if (categoryFilter !== 'All') {
      result = result.filter(p => p.category === categoryFilter);
    }

    // Search Filter
    if (searchQuery) {
      result = result.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Sorting
    if (sortFilter === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortFilter === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortFilter === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [categoryFilter, sortFilter, searchQuery]);

  const categories = ['All', 'Mountain', 'Road', 'Electric', 'Kids'];

  return (
    <div className="bg-black min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="space-y-2 text-center md:text-left">
            <h1 className="text-5xl font-black uppercase tracking-tighter text-white">The Shop</h1>
            <p className="text-white/60 uppercase tracking-widest text-xs font-bold">
              Showing {filteredProducts.length} high-performance machines
            </p>
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="relative flex-1 md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
              <input
                type="text"
                placeholder="Search bikes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-12 pr-6 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="p-3 bg-white/5 border border-white/10 rounded-full text-white hover:bg-blue-600 hover:border-blue-600 transition-all"
            >
              <Filter className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Filters Bar */}
        <div className="flex flex-wrap items-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSearchParams({ category: cat, sort: sortFilter })}
              className={cn(
                "px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all border",
                categoryFilter === cat
                  ? "bg-blue-600 border-blue-600 text-white"
                  : "bg-transparent border-white/10 text-white/60 hover:border-white/30"
              )}
            >
              {cat}
            </button>
          ))}

          <div className="ml-auto flex items-center gap-4">
            <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Sort By:</span>
            <select
              value={sortFilter}
              onChange={(e) => setSearchParams({ category: categoryFilter, sort: e.target.value })}
              className="bg-transparent text-white text-xs font-bold uppercase tracking-widest focus:outline-none cursor-pointer"
            >
              <option value="popularity" className="bg-black">Popularity</option>
              <option value="price-low" className="bg-black">Price: Low to High</option>
              <option value="price-high" className="bg-black">Price: High to Low</option>
              <option value="rating" className="bg-black">Top Rated</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <div className="py-20 text-center space-y-6">
            <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto">
              <X className="w-10 h-10 text-white/20" />
            </div>
            <h3 className="text-2xl font-bold uppercase tracking-tighter text-white">No bikes found</h3>
            <p className="text-white/40 max-w-sm mx-auto">Try adjusting your filters or search query to find what you're looking for.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSearchParams({ category: 'All', sort: 'popularity' });
              }}
              className="text-blue-500 font-bold uppercase tracking-widest text-xs hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
