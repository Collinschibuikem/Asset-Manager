import React, { useEffect } from 'react';
import { Layout } from '@/components/layout/Layout';
import { useWishlist } from '@/context/WishlistContext';
import { useCart } from '@/context/CartContext';
import { ProductCard } from '@/components/ui/ProductCard';
import { Link } from 'wouter';

export function Wishlist() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { items, toggleWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleAddAll = () => {
    items.forEach(product => {
      addToCart(product, product.sizes[0], product.colors[0], 1);
    });
  };

  return (
    <Layout>
      <div className="pt-24 pb-32 max-w-[1600px] mx-auto px-6 min-h-[70vh]">
        
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl tracking-widest font-medium uppercase mb-4">Wishlist</h1>
          <p className="text-gray-500 text-sm">Saved pieces for later.</p>
        </div>

        {items.length === 0 ? (
          <div className="text-center py-20 border border-[#EEEEEE]">
            <p className="text-gray-500 mb-6">Your wishlist is currently empty.</p>
            <Link href="/shop" className="inline-block px-8 py-4 bg-black text-white text-xs uppercase tracking-widest font-medium hover:bg-gray-900 transition-colors">
              Explore Collection
            </Link>
          </div>
        ) : (
          <>
            <div className="flex justify-end mb-8">
              <button 
                onClick={handleAddAll}
                className="text-[10px] uppercase tracking-widest font-medium border-b border-black pb-1 hover:text-gray-500 hover:border-gray-500 transition-colors"
              >
                Add All to Cart
              </button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16">
              {items.map(product => (
                <div key={product.id} className="relative">
                  <ProductCard product={product} />
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      toggleWishlist(product);
                    }}
                    className="absolute top-4 left-4 z-20 text-[10px] bg-white px-3 py-1 uppercase tracking-widest font-medium shadow-sm hover:bg-gray-100 transition-colors"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </>
        )}

      </div>
    </Layout>
  );
}
