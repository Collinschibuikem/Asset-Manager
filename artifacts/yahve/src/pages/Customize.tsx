import React, { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { motion } from 'framer-motion';

export function Customize() {
  const [step, setStep] = useState(1);
  const [productType, setProductType] = useState('tee');
  const [color, setColor] = useState('#FFFFFF');
  const [text, setText] = useState('');
  const [font, setFont] = useState('Inter');
  const [position, setPosition] = useState('front');

  const productTypes = [
    { id: 'tee', name: 'Oversized Tee', image: '/attached_assets/generated_images/product2.jpg' },
    { id: 'hoodie', name: 'Premium Hoodie', image: '/attached_assets/generated_images/product1.jpg' },
    { id: 'cap', name: 'Baseball Cap', image: '/attached_assets/generated_images/product3.jpg' },
  ];

  const colors = [
    { name: 'White', value: '#FFFFFF' },
    { name: 'Black', value: '#111111' },
    { name: 'Cream', value: '#F5F5DC' },
    { name: 'Charcoal', value: '#333333' }
  ];

  const fonts = ['Inter', 'Georgia', 'Menlo', 'Impact'];

  const getActiveProductImg = () => {
    return productTypes.find(p => p.id === productType)?.image;
  };

  return (
    <Layout>
      <div className="pt-20 min-h-[100dvh] flex flex-col lg:flex-row bg-[#F8F8F8]">
        
        {/* Preview Panel - Fixed on Desktop */}
        <div className="w-full lg:w-3/5 lg:h-[calc(100vh-80px)] lg:sticky lg:top-20 bg-[#EEEEEE] flex items-center justify-center p-12 relative overflow-hidden">
          {/* The dynamic product mockup */}
          <div className="relative w-full max-w-md aspect-[3/4] bg-white shadow-2xl flex items-center justify-center p-8 transition-colors duration-500" style={{ backgroundColor: color }}>
            {/* Base Image with multiply blend mode so it takes color */}
            <img 
              src={getActiveProductImg()} 
              alt="Mockup Base" 
              className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-50"
            />
            
            {/* Custom Text Overlay */}
            {text && (
              <div 
                className="absolute z-10 text-center max-w-[80%]"
                style={{ 
                  fontFamily: font,
                  color: color === '#111111' || color === '#333333' ? '#FFFFFF' : '#111111',
                  top: position === 'front' ? '30%' : position === 'back' ? '25%' : 'auto',
                  left: position === 'sleeve' ? '15%' : '50%',
                  transform: 'translateX(-50%)',
                  fontSize: position === 'sleeve' ? '1rem' : '2rem'
                }}
              >
                {text}
              </div>
            )}
          </div>
          
          <div className="absolute top-6 left-6 flex gap-2">
            <span className="px-3 py-1 bg-white text-[10px] uppercase tracking-widest font-medium shadow-sm">
              Live Preview
            </span>
            <span className="px-3 py-1 bg-white text-[10px] uppercase tracking-widest font-medium shadow-sm">
              {position}
            </span>
          </div>
        </div>

        {/* Controls Panel */}
        <div className="w-full lg:w-2/5 p-8 lg:p-16 bg-white overflow-y-auto lg:h-[calc(100vh-80px)]">
          <div className="max-w-sm mx-auto w-full">
            <div className="mb-12">
              <h1 className="text-2xl font-medium tracking-wide mb-2">Bespoke Studio</h1>
              <p className="text-gray-500 text-sm">Create a custom piece uniquely yours.</p>
            </div>

            {/* Progress Steps */}
            <div className="flex gap-2 mb-12">
              {[1, 2, 3].map(i => (
                <div key={i} className={`flex-1 h-1 ${step >= i ? 'bg-black' : 'bg-[#EEEEEE]'}`} />
              ))}
            </div>

            <div className="space-y-12">
              {/* Step 1: Product & Color */}
              <div className={`space-y-8 ${step !== 1 && 'opacity-30 pointer-events-none'}`}>
                <div className="flex justify-between items-center cursor-pointer" onClick={() => setStep(1)}>
                  <h3 className="text-xs uppercase tracking-widest font-medium">01. Canvas</h3>
                </div>
                
                {step === 1 && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}>
                    <div className="space-y-4 mb-8">
                      <label className="text-[10px] text-gray-500 uppercase tracking-wider">Garment Type</label>
                      <div className="grid grid-cols-2 gap-3">
                        {productTypes.map(pt => (
                          <button
                            key={pt.id}
                            onClick={() => setProductType(pt.id)}
                            className={`p-4 border text-xs font-medium ${productType === pt.id ? 'border-black bg-black text-white' : 'border-[#EEEEEE] hover:border-black'}`}
                          >
                            {pt.name}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <label className="text-[10px] text-gray-500 uppercase tracking-wider">Color Base</label>
                      <div className="flex gap-3">
                        {colors.map(c => (
                          <button
                            key={c.name}
                            onClick={() => setColor(c.value)}
                            className={`w-10 h-10 rounded-full border-2 ${color === c.value ? 'border-black' : 'border-transparent'}`}
                            style={{ backgroundColor: c.value, boxShadow: '0 0 0 1px #EEEEEE' }}
                            title={c.name}
                          />
                        ))}
                      </div>
                    </div>
                    
                    <button onClick={() => setStep(2)} className="mt-8 w-full bg-black text-white py-4 text-xs uppercase tracking-widest font-medium">
                      Next Step
                    </button>
                  </motion.div>
                )}
              </div>

              {/* Step 2: Design */}
              <div className={`space-y-8 ${step !== 2 && 'opacity-30 pointer-events-none'}`}>
                <div className="flex justify-between items-center cursor-pointer" onClick={() => step > 1 && setStep(2)}>
                  <h3 className="text-xs uppercase tracking-widest font-medium">02. Design</h3>
                </div>
                
                {step === 2 && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}>
                    <div className="space-y-4 mb-6">
                      <label className="text-[10px] text-gray-500 uppercase tracking-wider">Custom Text</label>
                      <input 
                        type="text" 
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Enter your message..."
                        className="w-full p-4 border border-[#EEEEEE] focus:border-black outline-none text-sm"
                      />
                    </div>

                    <div className="space-y-4 mb-6">
                      <label className="text-[10px] text-gray-500 uppercase tracking-wider">Typography</label>
                      <div className="grid grid-cols-2 gap-3">
                        {fonts.map(f => (
                          <button
                            key={f}
                            onClick={() => setFont(f)}
                            style={{ fontFamily: f }}
                            className={`p-3 border text-sm ${font === f ? 'border-black' : 'border-[#EEEEEE] hover:border-black'}`}
                          >
                            {f}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <label className="text-[10px] text-gray-500 uppercase tracking-wider">Placement</label>
                      <div className="grid grid-cols-3 gap-2">
                        {['front', 'back', 'sleeve'].map(pos => (
                          <button
                            key={pos}
                            onClick={() => setPosition(pos)}
                            className={`p-3 border text-xs capitalize ${position === pos ? 'border-black bg-black text-white' : 'border-[#EEEEEE] hover:border-black'}`}
                          >
                            {pos}
                          </button>
                        ))}
                      </div>
                    </div>

                    <button onClick={() => setStep(3)} className="mt-8 w-full bg-black text-white py-4 text-xs uppercase tracking-widest font-medium">
                      Review Design
                    </button>
                  </motion.div>
                )}
              </div>

              {/* Step 3: Checkout */}
              <div className={`space-y-8 ${step !== 3 && 'opacity-30 pointer-events-none'}`}>
                <div className="flex justify-between items-center cursor-pointer" onClick={() => step > 2 && setStep(3)}>
                  <h3 className="text-xs uppercase tracking-widest font-medium">03. Finalize</h3>
                </div>
                
                {step === 3 && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}>
                    <div className="bg-[#F8F8F8] p-6 mb-8 text-sm space-y-4 border border-[#EEEEEE]">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Base</span>
                        <span className="font-medium">{productTypes.find(p=>p.id===productType)?.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Color</span>
                        <span className="font-medium flex items-center gap-2">
                          <span className="w-3 h-3 rounded-full border border-gray-300" style={{ backgroundColor: color }}></span>
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Customization</span>
                        <span className="font-medium text-right max-w-[150px] truncate">"{text || 'None'}"</span>
                      </div>
                      <div className="pt-4 border-t border-[#EEEEEE] flex justify-between text-base font-medium">
                        <span>Total</span>
                        <span>$195.00</span>
                      </div>
                    </div>

                    <button className="w-full bg-black text-white py-4 text-xs uppercase tracking-widest font-medium hover:bg-gray-900 transition-colors">
                      Add to Cart
                    </button>
                  </motion.div>
                )}
              </div>

            </div>
          </div>
        </div>

      </div>
    </Layout>
  );
}
