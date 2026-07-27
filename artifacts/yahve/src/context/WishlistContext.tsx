import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Product } from '@/data/products';

interface WishlistContextType {
  items: Product[];
  toggleWishlist: (product: Product) => void;
  isInWishlist: (productId: string) => boolean;
  wishlistCount: number;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<Product[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('yahve_wishlist');
    if (saved) {
      try {
        setItems(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse wishlist');
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('yahve_wishlist', JSON.stringify(items));
  }, [items]);

  const toggleWishlist = (product: Product) => {
    setItems((prev) => {
      const exists = prev.some((p) => p.id === product.id);
      if (exists) {
        return prev.filter((p) => p.id !== product.id);
      }
      return [...prev, product];
    });
  };

  const isInWishlist = (productId: string) => items.some((p) => p.id === productId);

  return (
    <WishlistContext.Provider
      value={{
        items,
        toggleWishlist,
        isInWishlist,
        wishlistCount: items.length,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (context === undefined) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
}
