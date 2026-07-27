import React from 'react';
import { Link } from 'wouter';

export function Footer() {
  return (
    <footer className="bg-[#111111] text-white pt-20 pb-10 px-6">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-20">
          
          <div className="lg:col-span-2">
            <Link href="/" className="text-3xl tracking-[0.3em] font-semibold mb-6 block">
              YAHVE
            </Link>
            <p className="text-[#888888] text-sm max-w-sm leading-relaxed mb-8">
              Premium Christian Streetwear rooted in Faith, Identity, and Purpose. 
              Designed for everyday life. A quiet reminder of who you are.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest font-medium mb-6 text-[#CCCCCC]">Shop</h4>
            <ul className="space-y-4 text-sm text-[#888888]">
              <li><Link href="/shop" className="hover:text-white transition-colors">All Products</Link></li>
              <li><Link href="/collections" className="hover:text-white transition-colors">Collections</Link></li>
              <li><Link href="/customize" className="hover:text-white transition-colors">Customize</Link></li>
              <li><Link href="/journal" className="hover:text-white transition-colors">Journal</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest font-medium mb-6 text-[#CCCCCC]">Customer Care</h4>
            <ul className="space-y-4 text-sm text-[#888888]">
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/account" className="hover:text-white transition-colors">My Account</Link></li>
              <li><Link href="/faq" className="hover:text-white transition-colors">Shipping & Returns</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest font-medium mb-6 text-[#CCCCCC]">Newsletter</h4>
            <p className="text-[#888888] text-sm mb-4">Subscribe to receive early access and updates.</p>
            <form className="flex border-b border-[#333333] pb-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-transparent border-none outline-none w-full text-sm text-white placeholder:text-[#555555]"
              />
              <button type="submit" className="text-xs uppercase tracking-widest font-medium hover:text-[#888888] transition-colors">
                Join
              </button>
            </form>
          </div>

        </div>

        <div className="pt-8 border-t border-[#222222] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#666666]">
          <p>© {new Date().getFullYear()} YAHVE. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">TikTok</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
          </div>
          <div className="flex gap-6">
            <Link href="/faq" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/faq" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
