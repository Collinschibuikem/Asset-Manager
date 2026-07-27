import React, { useEffect, useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { useCart } from '@/context/CartContext';
import { Link } from 'wouter';

export function Account() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState('orders');

  const tabs = [
    { id: 'orders', label: 'Order History' },
    { id: 'profile', label: 'Profile' },
    { id: 'addresses', label: 'Addresses' },
  ];

  return (
    <Layout>
      <div className="pt-24 pb-32 max-w-[1200px] mx-auto px-6 min-h-[70vh]">
        
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl tracking-widest font-medium uppercase mb-4">My Account</h1>
          <p className="text-gray-500 text-sm">Welcome back, John.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          {/* Sidebar */}
          <div className="w-full lg:w-64 flex-shrink-0">
            <div className="flex lg:flex-col overflow-x-auto no-scrollbar gap-2 lg:gap-4 border-b lg:border-b-0 border-[#EEEEEE] pb-4 lg:pb-0">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`text-xs uppercase tracking-widest font-medium text-left py-2 px-4 whitespace-nowrap transition-colors ${
                    activeTab === tab.id ? 'bg-black text-white' : 'text-gray-500 hover:text-black hover:bg-gray-50'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
              <Link href="/wishlist" className="text-xs uppercase tracking-widest font-medium text-left py-2 px-4 text-gray-500 hover:text-black hover:bg-gray-50 whitespace-nowrap">
                Wishlist
              </Link>
              <button className="text-xs uppercase tracking-widest font-medium text-left py-2 px-4 text-gray-400 hover:text-black mt-auto pt-8">
                Log Out
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            {activeTab === 'orders' && (
              <div>
                <h2 className="text-xl font-medium tracking-wide mb-8 border-b border-[#EEEEEE] pb-4">Order History</h2>
                
                <div className="space-y-6">
                  {/* Mock Order */}
                  <div className="border border-[#EEEEEE] p-6">
                    <div className="flex flex-wrap justify-between items-center gap-4 mb-6 pb-6 border-b border-[#EEEEEE]">
                      <div>
                        <p className="text-[10px] uppercase tracking-widest font-medium text-gray-500 mb-1">Order Placed</p>
                        <p className="text-sm font-medium">October 12, 2024</p>
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-widest font-medium text-gray-500 mb-1">Total</p>
                        <p className="text-sm font-medium">$250.00</p>
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-widest font-medium text-gray-500 mb-1">Order #</p>
                        <p className="text-sm font-medium">YHV-84729</p>
                      </div>
                      <div>
                        <span className="px-3 py-1 bg-gray-100 text-xs font-medium uppercase tracking-widest">Delivered</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-6">
                      <div className="w-20 h-24 bg-[#F8F8F8] flex-shrink-0">
                        <img src="/attached_assets/generated_images/product1.jpg" alt="Item" className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h3 className="text-sm font-medium mb-1">Sovereign Oversized Hoodie</h3>
                        <p className="text-xs text-gray-500 mb-2">Color: Black / Size: M / Qty: 1</p>
                        <button className="text-[10px] uppercase tracking-widest font-medium border-b border-black pb-1 hover:text-gray-500 hover:border-gray-500 transition-colors">
                          View Product
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="border border-[#EEEEEE] p-6">
                    <div className="flex flex-wrap justify-between items-center gap-4 mb-6 pb-6 border-b border-[#EEEEEE]">
                      <div>
                        <p className="text-[10px] uppercase tracking-widest font-medium text-gray-500 mb-1">Order Placed</p>
                        <p className="text-sm font-medium">August 05, 2024</p>
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-widest font-medium text-gray-500 mb-1">Total</p>
                        <p className="text-sm font-medium">$85.00</p>
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-widest font-medium text-gray-500 mb-1">Order #</p>
                        <p className="text-sm font-medium">YHV-73221</p>
                      </div>
                      <div>
                        <span className="px-3 py-1 bg-gray-100 text-xs font-medium uppercase tracking-widest">Delivered</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-6">
                      <div className="w-20 h-24 bg-[#F8F8F8] flex-shrink-0">
                        <img src="/attached_assets/generated_images/product2.jpg" alt="Item" className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h3 className="text-sm font-medium mb-1">Faith Over Fear Tee</h3>
                        <p className="text-xs text-gray-500 mb-2">Color: White / Size: L / Qty: 1</p>
                        <button className="text-[10px] uppercase tracking-widest font-medium border-b border-black pb-1 hover:text-gray-500 hover:border-gray-500 transition-colors">
                          View Product
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'profile' && (
              <div>
                <h2 className="text-xl font-medium tracking-wide mb-8 border-b border-[#EEEEEE] pb-4">Profile Details</h2>
                <form className="max-w-md space-y-6" onSubmit={e => e.preventDefault()}>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-medium text-gray-500">First Name</label>
                      <input type="text" defaultValue="John" className="w-full p-4 border border-[#EEEEEE] focus:border-black outline-none bg-transparent" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-medium text-gray-500">Last Name</label>
                      <input type="text" defaultValue="Doe" className="w-full p-4 border border-[#EEEEEE] focus:border-black outline-none bg-transparent" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-medium text-gray-500">Email</label>
                    <input type="email" defaultValue="john.doe@example.com" className="w-full p-4 border border-[#EEEEEE] focus:border-black outline-none bg-transparent text-gray-500" readOnly />
                  </div>
                  <button className="w-full bg-black text-white py-4 text-xs uppercase tracking-widest font-medium hover:bg-gray-900 transition-colors">
                    Save Changes
                  </button>
                </form>
              </div>
            )}

            {activeTab === 'addresses' && (
              <div>
                <div className="flex justify-between items-center mb-8 border-b border-[#EEEEEE] pb-4">
                  <h2 className="text-xl font-medium tracking-wide">Addresses</h2>
                  <button className="text-[10px] uppercase tracking-widest font-medium border-b border-black pb-1">Add New</button>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="border border-[#EEEEEE] p-6 relative">
                    <span className="absolute top-6 right-6 text-[10px] bg-black text-white px-2 py-1 uppercase tracking-widest font-medium">Default</span>
                    <h3 className="font-medium mb-4">John Doe</h3>
                    <div className="text-sm text-gray-500 space-y-1 mb-6">
                      <p>123 Minimalist Avenue</p>
                      <p>Suite 400</p>
                      <p>New York, NY 10001</p>
                      <p>United States</p>
                    </div>
                    <div className="flex gap-4 text-[10px] uppercase tracking-widest font-medium">
                      <button className="hover:text-gray-500 transition-colors">Edit</button>
                      <button className="hover:text-gray-500 transition-colors text-red-500">Delete</button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </Layout>
  );
}
