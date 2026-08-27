import React from 'react';
import { Link } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { CheckoutModal } from '../CheckoutModal'; // Import your CheckoutButton component

export function CartDrawer() {
  const { isCartOpen, setIsCartOpen, items, updateQuantity, removeFromCart, subtotal } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/40 z-50 backdrop-blur-sm"
            onClick={() => setIsCartOpen(false)}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 w-full max-w-[440px] h-[100dvh] bg-white z-50 shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-[#EEEEEE]">
              <h2 className="text-sm uppercase tracking-widest font-medium">Your Cart ({items.length})</h2>
              <button onClick={() => setIsCartOpen(false)} className="p-2 -mr-2 text-gray-400 hover:text-black transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
              {items.length === 0 ? (
                <div className="flex-1 flex flex-col items-center justify-center text-center gap-4 text-gray-500">
                  <p>Your cart is empty.</p>
                  <Link href="/shop" onClick={() => setIsCartOpen(false)}>
                    <span className="text-sm text-black underline underline-offset-4 uppercase tracking-wider font-medium hover:text-gray-600 transition-colors cursor-pointer">
                      Continue Shopping
                    </span>
                  </Link>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="w-24 h-32 bg-[#F8F8F8] flex-shrink-0">
                      <img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 flex flex-col justify-between py-1">
                      <div className="flex justify-between gap-4">
                        <div>
                          <h3 className="text-sm font-medium">{item.product.name}</h3>
                          <p className="text-xs text-gray-500 mt-1">
                            {item.color} / {item.size}
                          </p>
                        </div>
                        <span className="text-sm">₦{item.product.price}</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center border border-[#EEEEEE]">
                          <button 
                            className="p-2 text-gray-400 hover:text-black transition-colors"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center text-xs font-medium">{item.quantity}</span>
                          <button 
                            className="p-2 text-gray-400 hover:text-black transition-colors"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-[10px] uppercase tracking-wider text-gray-400 hover:text-black underline underline-offset-4"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-[#EEEEEE] p-6 bg-[#F8F8F8]">
                <CheckoutModal />
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
