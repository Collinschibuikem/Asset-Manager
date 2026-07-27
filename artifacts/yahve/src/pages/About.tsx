import React, { useEffect } from 'react';
import { Layout } from '@/components/layout/Layout';

export function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="pt-24 pb-24">
        
        {/* Hero */}
        <div className="max-w-[1000px] mx-auto px-6 text-center mb-24">
          <h1 className="text-4xl md:text-6xl font-medium tracking-wide mb-8 leading-tight">
            A quiet reminder in a loud world.
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            YAHVE was born from a desire to merge luxury aesthetics with profound meaning. 
            We create garments that act as modern armor—reminding the wearer of their inherent value, identity, and purpose.
          </p>
        </div>

        {/* Large Image */}
        <div className="w-full h-[60vh] md:h-[80vh] bg-[#F8F8F8] mb-24">
          <img 
            src="/attached_assets/generated_images/hero1.jpg" 
            alt="About YAHVE" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Two Column Story */}
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 mb-32">
          <div>
            <h2 className="text-3xl font-medium tracking-wide sticky top-32">
              Our Vision
            </h2>
          </div>
          <div className="space-y-8 text-gray-600 leading-relaxed">
            <p>
              We believe that what you wear is a reflection of what you believe. In an industry often driven by hype and excess, YAHVE stands as a counter-cultural movement towards intentionality.
            </p>
            <p>
              Every fabric is chosen with purpose. Every seam is constructed with longevity in mind. Our aesthetic is minimal not because we have nothing to say, but because we believe the most powerful statements are made quietly.
            </p>
            <p>
              We are not just a clothing brand. We are a community of individuals anchored in Faith, secure in Identity, and walking in Purpose.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="bg-[#111111] text-white py-32 px-6">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
            <div>
              <h3 className="text-xl tracking-widest font-medium uppercase mb-6 text-gray-300">Faith</h3>
              <p className="text-sm text-gray-400 leading-relaxed">The foundation of everything we build. An unwavering trust in something greater than ourselves.</p>
            </div>
            <div>
              <h3 className="text-xl tracking-widest font-medium uppercase mb-6 text-gray-300">Identity</h3>
              <p className="text-sm text-gray-400 leading-relaxed">Knowing who you are, independent of cultural trends or societal expectations. Rooted and secure.</p>
            </div>
            <div>
              <h3 className="text-xl tracking-widest font-medium uppercase mb-6 text-gray-300">Purpose</h3>
              <p className="text-sm text-gray-400 leading-relaxed">The conviction that you were placed here by design, with a specific calling to fulfill.</p>
            </div>
          </div>
        </div>

        {/* Final Image & Quote */}
        <div className="max-w-[1200px] mx-auto px-6 py-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="aspect-[4/5] bg-[#F8F8F8]">
            <img 
              src="/attached_assets/generated_images/hero3.jpg" 
              alt="Editorial" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="max-w-md mx-auto lg:mx-0 text-center lg:text-left">
            <h3 className="text-2xl md:text-4xl font-light italic leading-relaxed mb-8">
              "Create space for what matters. Strip away the rest."
            </h3>
            <span className="text-xs uppercase tracking-widest font-medium text-gray-500">
              The YAHVE Philosophy
            </span>
          </div>
        </div>

      </div>
    </Layout>
  );
}
