import React, { useEffect } from 'react';
import { Layout } from '@/components/layout/Layout';

export function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="pt-24 pb-32 max-w-[1200px] mx-auto px-6">
        
        <div className="text-center mb-20">
          <h1 className="text-3xl md:text-4xl tracking-widest font-medium uppercase mb-4">Contact</h1>
          <p className="text-gray-500 text-sm">We're here to assist you.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Info */}
          <div>
            <h2 className="text-xl tracking-widest font-medium uppercase mb-8 pb-4 border-b border-[#EEEEEE]">
              Client Services
            </h2>
            <div className="space-y-8 text-sm text-gray-600">
              <div>
                <strong className="block text-black font-medium uppercase tracking-widest text-xs mb-2">Email</strong>
                <p>support@yahve.co</p>
                <p className="mt-1 text-xs text-gray-400">Expect a reply within 24-48 hours.</p>
              </div>
              
              <div>
                <strong className="block text-black font-medium uppercase tracking-widest text-xs mb-2">Hours</strong>
                <p>Monday - Friday</p>
                <p>9:00 AM - 5:00 PM EST</p>
              </div>

              <div>
                <strong className="block text-black font-medium uppercase tracking-widest text-xs mb-2">Studio</strong>
                <p>By appointment only.</p>
                <p>New York City, NY</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            <h2 className="text-xl tracking-widest font-medium uppercase mb-8 pb-4 border-b border-[#EEEEEE]">
              Send a Message
            </h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-medium text-gray-500">First Name</label>
                  <input type="text" className="w-full p-4 border border-[#EEEEEE] focus:border-black outline-none bg-transparent" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-medium text-gray-500">Last Name</label>
                  <input type="text" className="w-full p-4 border border-[#EEEEEE] focus:border-black outline-none bg-transparent" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-medium text-gray-500">Email Address</label>
                <input type="email" className="w-full p-4 border border-[#EEEEEE] focus:border-black outline-none bg-transparent" />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-medium text-gray-500">Order Number (Optional)</label>
                <input type="text" className="w-full p-4 border border-[#EEEEEE] focus:border-black outline-none bg-transparent" />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-medium text-gray-500">Message</label>
                <textarea rows={5} className="w-full p-4 border border-[#EEEEEE] focus:border-black outline-none bg-transparent resize-none"></textarea>
              </div>

              <button type="submit" className="w-full bg-black text-white py-4 text-xs uppercase tracking-widest font-medium hover:bg-gray-900 transition-colors">
                Submit Inquiry
              </button>
            </form>
          </div>

        </div>
      </div>
    </Layout>
  );
}
