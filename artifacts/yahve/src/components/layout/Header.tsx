import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Search, Heart, ShoppingBag, User, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import { AnimatePresence, motion } from 'framer-motion';
import { CartDrawer } from './CartDrawer';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const { cartCount, setIsCartOpen } = useCart();
  const { wishlistCount } = useWishlist();

  const isHome = location === '/';
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; }
  }, [isMobileMenuOpen]);

  const headerBg = isHome && !isScrolled ? 'bg-transparent text-white' : 'bg-white text-black border-b border-[#EEEEEE]';
  const logoColor = isHome && !isScrolled ? 'text-white' : 'text-black';
  const iconColor = isHome && !isScrolled ? 'text-white' : 'text-black';

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${headerBg}`}>
        <div className="max-w-[1600px] mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex-1">
            <button onClick={() => setIsMobileMenuOpen(true)} className="p-2 -ml-2">
              <Menu className={`w-6 h-6 ${iconColor}`} />
            </button>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex flex-1 gap-8 text-xs uppercase tracking-widest font-medium">
            <Link href="/shop" className="hover:opacity-60 transition-opacity">Shop</Link>
            <Link href="/collections" className="hover:opacity-60 transition-opacity">Collections</Link>
            <Link href="/customize" className="hover:opacity-60 transition-opacity">Customize</Link>
            <Link href="/journal" className="hover:opacity-60 transition-opacity">Journal</Link>
          </nav>

          {/* Logo */}
          <div className="flex-1 lg:flex-none text-center">
            <Link href="/" className={`text-2xl tracking-[0.3em] font-semibold ${logoColor}`}>
              YAHVE
            </Link>
          </div>

          {/* Right Icons */}
          <div className="flex-1 flex justify-end items-center gap-4 lg:gap-6">
            <button className={`p-2 hover:opacity-60 transition-opacity ${iconColor} hidden lg:block`}>
              <Search className="w-5 h-5" />
            </button>
            <Link href="/account" className={`p-2 hover:opacity-60 transition-opacity ${iconColor} hidden lg:block`}>
              <User className="w-5 h-5" />
            </Link>
            <Link href="/wishlist" className={`relative p-2 hover:opacity-60 transition-opacity ${iconColor}`}>
              <Heart className="w-5 h-5" />
              {wishlistCount > 0 && (
                <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-black text-white rounded-full text-[9px] flex items-center justify-center font-bold">
                  {wishlistCount}
                </span>
              )}
            </Link>
            <button 
              onClick={() => setIsCartOpen(true)}
              className={`relative p-2 hover:opacity-60 transition-opacity ${iconColor}`}
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-black text-white rounded-full text-[9px] flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-white"
          >
            <div className="h-20 px-6 flex items-center justify-between border-b border-[#EEEEEE]">
              <div className="flex-1"></div>
              <Link href="/" className="text-xl tracking-[0.3em] font-semibold text-black">
                YAHVE
              </Link>
              <div className="flex-1 flex justify-end">
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2">
                  <X className="w-6 h-6 text-black" />
                </button>
              </div>
            </div>

            <div className="px-8 py-12 flex flex-col gap-8 text-xl font-medium tracking-wide">
              <Link href="/shop" className="hover:text-gray-500 transition-colors">Shop All</Link>
              <Link href="/collections" className="hover:text-gray-500 transition-colors">Collections</Link>
              <Link href="/customize" className="hover:text-gray-500 transition-colors">Customize</Link>
              <Link href="/journal" className="hover:text-gray-500 transition-colors">Journal</Link>
              <Link href="/about" className="hover:text-gray-500 transition-colors">Our Story</Link>
              
              <div className="h-px bg-[#EEEEEE] my-4" />
              
              <Link href="/account" className="text-base text-gray-600 hover:text-black">Account</Link>
              <button className="text-base text-gray-600 hover:text-black text-left flex items-center gap-2">
                <Search className="w-4 h-4" /> Search
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <CartDrawer />
    </>
  );
}
