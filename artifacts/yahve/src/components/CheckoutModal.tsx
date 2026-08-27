import React, { useState } from 'react';
import { useCart } from '../context/CartContext'; 
import { Button } from './ui/button';

export function CheckoutModal() { // <-- Changed from CheckoutButton to CheckoutModal
  const { items, subtotal } = useCart(); 
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  // Replace this with your actual Paystack Public Key
  const publicKey = "pk_test_f9f490c44529a8ba1ee4737dc21e3d2f05f1001c"; 

  const handlePaystackSuccessAction = (reference: any) => {
    alert(`Payment successful! Reference: ${reference.reference}`);
    localStorage.removeItem('yahve_cart');
    window.location.reload(); 
  };

  const paystackConfig = {
    email: email || "customer@yahve.com",
    amount: (subtotal || 0) * 100, 
    publicKey,
    onSuccess: (reference: any) => handlePaystackSuccessAction(reference),
    onClose: () => alert('Transaction cancelled'),
  };

  return (
    <div className="space-y-4 p-6 bg-zinc-900 text-white rounded-xl border border-zinc-800 shadow-xl max-w-md w-full mx-auto">
      <h3 className="text-xl font-bold tracking-tight">Checkout</h3>
      
      <div className="space-y-1">
        <label className="text-xs text-zinc-400 uppercase tracking-wider">Full Name</label>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 bg-zinc-800 rounded-lg border border-zinc-700 focus:outline-none focus:border-white text-sm"
          placeholder="Enter your full name"
        />
      </div>

      <div className="space-y-1">
        <label className="text-xs text-zinc-400 uppercase tracking-wider">Email Address</label>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 bg-zinc-800 rounded-lg border border-zinc-700 focus:outline-none focus:border-white text-sm"
          placeholder="Enter your email"
        />
      </div>
      
      <div className="flex justify-between items-center pt-3 border-t border-zinc-800 text-base font-medium">
        <span className="text-zinc-400">Total:</span>
        <span className="text-lg font-bold">₦{(subtotal || 0).toLocaleString()}</span>
      </div>

      <Button 
        className="w-full bg-white text-black hover:bg-zinc-200 py-3 font-semibold rounded-lg transition-colors cursor-pointer"
        onClick={() => {
          if (!email || !name) {
            alert('Please fill in your name and email');
            return;
          }
          if (items.length === 0) {
            alert('Your cart is empty');
            return;
          }
          // @ts-ignore
          if (window.PaystackPop) {
            // @ts-ignore
            const handler = window.PaystackPop.setup(paystackConfig);
            handler.openIframe();
          } else {
            alert('Paystack script is still loading. Please check your internet connection or reload the page.');
          }
        }}
      >
        Complete Order & Pay
      </Button>
    </div>
  );
}