import React, { useState, useEffect } from 'react';
import { Layout } from '@/components/layout/Layout';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQS = [
  {
    category: "Orders & Shipping",
    items: [
      { q: "How long will it take to receive my order?", a: "Standard shipping typically takes 3-5 business days within the continental US. International shipping can take 7-14 business days. Please allow 1-2 business days for processing before your order ships." },
      { q: "Do you ship internationally?", a: "Yes, we ship globally. International shipping rates are calculated at checkout based on your location and the weight of your order. Please note that customs duties and taxes are the responsibility of the recipient." },
      { q: "Can I track my order?", a: "Once your order has been dispatched, you will receive a shipping confirmation email containing your tracking number." }
    ]
  },
  {
    category: "Returns & Exchanges",
    items: [
      { q: "What is your return policy?", a: "We accept returns within 30 days of delivery. Items must be unworn, unwashed, and in their original packaging with tags attached. Customized items are final sale." },
      { q: "How do I initiate a return?", a: "Please contact our support team via the Contact page with your order number. We will provide you with a return authorization and shipping label." },
      { q: "Do you offer exchanges?", a: "To ensure you receive your desired item quickly, we process exchanges as a return and a new purchase. Return your original item for a refund and place a new order." }
    ]
  },
  {
    category: "Product & Sizing",
    items: [
      { q: "How do your items fit?", a: "Most of our garments are designed with an intentional oversized, relaxed fit. We recommend ordering your true size for the intended look. For a more standard fit, you may size down." },
      { q: "Where are your clothes manufactured?", a: "Our garments are designed in our studio and manufactured with trusted partners globally who adhere to strict ethical and quality standards. Our premium fleece is custom-milled." },
      { q: "How should I care for my items?", a: "We recommend machine washing cold inside out, and hanging to dry to preserve the longevity of the fabric and any printed/embroidered graphics." }
    ]
  }
];

export function FAQ() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <Layout>
      <div className="pt-24 pb-32 max-w-[800px] mx-auto px-6">
        
        <div className="text-center mb-20">
          <h1 className="text-3xl md:text-4xl tracking-widest font-medium uppercase mb-4">FAQ</h1>
          <p className="text-gray-500 text-sm">Frequently Asked Questions</p>
        </div>

        <div className="space-y-16">
          {FAQS.map((section, sIdx) => (
            <div key={sIdx}>
              <h2 className="text-sm tracking-widest font-medium uppercase mb-6 text-gray-400">
                {section.category}
              </h2>
              <div className="border-t border-[#EEEEEE]">
                {section.items.map((item, iIdx) => {
                  const id = `${sIdx}-${iIdx}`;
                  const isOpen = openItem === id;
                  return (
                    <div key={iIdx} className="border-b border-[#EEEEEE]">
                      <button 
                        className="w-full py-6 flex justify-between items-center text-left hover:text-gray-600 transition-colors"
                        onClick={() => toggleItem(id)}
                      >
                        <span className="text-sm font-medium pr-8">{item.q}</span>
                        <ChevronDown className={`w-4 h-4 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="pb-6 text-sm text-gray-500 leading-relaxed">
                              {item.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

      </div>
    </Layout>
  );
}
