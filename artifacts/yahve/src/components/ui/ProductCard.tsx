import React from 'react';
import { Link, useLocation } from 'wouter';
import { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import { Heart } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export function ProductCard({ product, priority = false }: ProductCardProps) {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const [, setLocation] = useLocation();

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, product.sizes[0], product.colors[0], 1);
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product);
  };

  return (
    <Link href={`/product/${product.slug}`}>
      <motion.div 
        className="group relative cursor-pointer flex flex-col gap-3"
        whileHover="hover"
      >
        <div className="relative aspect-[3/4] bg-[#F8F8F8] overflow-hidden">
          <motion.img
            src={product.image}
            alt={product.name}
            loading={priority ? "eager" : "lazy"}
            className="w-full h-full object-cover object-center"
            variants={{
              hover: { scale: 1.05 }
            }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          />
          
          <button 
            onClick={handleWishlist}
            className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-sm hover:scale-110 transition-transform"
          >
            <Heart 
              size={16} 
              className={isInWishlist(product.id) ? "fill-black text-black" : "text-gray-900"} 
            />
          </button>

          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
            {product.isNew && (
              <span className="px-2 py-1 bg-black text-white text-[10px] uppercase tracking-wider font-medium">
                New
              </span>
            )}
            {product.isBestSeller && (
              <span className="px-2 py-1 bg-white text-black border border-[#EEEEEE] text-[10px] uppercase tracking-wider font-medium">
                Best Seller
              </span>
            )}
          </div>

          {/* Quick Add Overlay */}
          <div className="absolute bottom-0 left-0 w-full p-4 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out z-10">
            <button
              onClick={handleQuickAdd}
              className="w-full bg-black text-white py-3 text-xs uppercase tracking-widest font-medium hover:bg-gray-900 transition-colors"
            >
              Quick Add
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-1 px-1">
          <div className="flex justify-between items-start gap-4">
            <h3 className="text-sm font-medium text-gray-900 truncate">{product.name}</h3>
            <span className="text-sm text-gray-600">${product.price}</span>
          </div>
          <p className="text-xs text-gray-500">{product.collection}</p>
        </div>
      </motion.div>
    </Link>
  );
}
