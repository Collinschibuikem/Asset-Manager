import React, { useEffect } from 'react';
import { Layout } from '@/components/layout/Layout';
import { YAHVE_COLLECTIONS } from '@/data/collections';
import { Link } from 'wouter';

export function Collections() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="pt-24 pb-24 px-6 max-w-[1600px] mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl tracking-widest font-medium uppercase mb-4">Collections</h1>
          <p className="text-gray-500 text-sm">Curated concepts rooted in faith and identity.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {YAHVE_COLLECTIONS.map((collection) => (
            <Link 
              key={collection.id} 
              href={`/shop?collection=${collection.slug}`}
              className="group relative aspect-square md:aspect-[4/5] overflow-hidden bg-[#F8F8F8] block"
            >
              <img 
                src={collection.image} 
                alt={collection.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
              <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end text-white">
                <h2 className="text-3xl md:text-4xl font-medium tracking-wide mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {collection.name}
                </h2>
                <p className="text-sm md:text-base text-gray-200 max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {collection.description}
                </p>
                <div className="mt-8 flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                  <span className="text-xs uppercase tracking-widest font-medium border-b border-white pb-1">
                    Explore
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}
