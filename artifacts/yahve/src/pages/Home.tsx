import React, { useEffect } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { ProductCard } from '@/components/ui/ProductCard';
import { YAHVE_PRODUCTS } from '@/data/products';
import { YAHVE_COLLECTIONS } from '@/data/collections';

export function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const featuredProducts = YAHVE_PRODUCTS.slice(0, 4);
  const bestSellers = YAHVE_PRODUCTS.filter(p => p.isBestSeller).slice(0, 4);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[100dvh] w-full bg-black overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <img 
            src="/attached_assets/generated_images/hero1.jpg" 
            alt="YAHVE Hero" 
            className="w-full h-full object-cover opacity-60"
          />
        </motion.div>
        
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-[0.2em] mb-6 flex flex-col gap-4">
              <span>FAITH.</span>
              <span>IDENTITY.</span>
              <span>PURPOSE.</span>
            </h1>
            <p className="text-sm md:text-base font-light tracking-widest uppercase mb-10 text-gray-300">
              Premium Christian Streetwear designed for everyday life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/shop" className="w-full sm:w-auto px-8 py-4 bg-white text-black text-xs uppercase tracking-widest font-medium hover:bg-gray-100 transition-colors text-center">
                Shop Collection
              </Link>
              <Link href="/about" className="w-full sm:w-auto px-8 py-4 border border-white text-white text-xs uppercase tracking-widest font-medium hover:bg-white hover:text-black transition-colors text-center">
                Explore Story
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Collections Grid */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/collections" className="group relative aspect-[4/5] md:aspect-square overflow-hidden bg-[#F8F8F8]">
            <img src="/attached_assets/generated_images/hero2.jpg" alt="Kingdom Collection" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
            <div className="absolute inset-0 p-10 flex flex-col justify-end text-white">
              <span className="text-xs uppercase tracking-widest mb-2">Collection</span>
              <h2 className="text-3xl font-medium tracking-wide">Kingdom</h2>
            </div>
          </Link>
          <div className="grid grid-rows-2 gap-4">
            <Link href="/collections" className="group relative overflow-hidden bg-[#F8F8F8]">
              <img src="/attached_assets/generated_images/lookbook3.jpg" alt="Grace Collection" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                <span className="text-[10px] uppercase tracking-widest mb-1">Collection</span>
                <h2 className="text-2xl font-medium tracking-wide">Grace</h2>
              </div>
            </Link>
            <Link href="/collections" className="group relative overflow-hidden bg-[#F8F8F8]">
              <img src="/attached_assets/generated_images/lookbook1.jpg" alt="Never Forget God" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                <span className="text-[10px] uppercase tracking-widest mb-1">Collection</span>
                <h2 className="text-2xl font-medium tracking-wide">Never Forget God</h2>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto">
        <div className="flex justify-between items-end mb-12 border-b border-[#EEEEEE] pb-4">
          <h2 className="text-2xl tracking-widest font-medium uppercase">Best Sellers</h2>
          <Link href="/shop" className="text-xs uppercase tracking-widest hover:text-gray-500 transition-colors">
            View All
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {bestSellers.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Editorial Section */}
      <section className="py-24 bg-[#F8F8F8]">
        <div className="max-w-[1600px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
          <div className="order-2 lg:order-1 max-w-md mx-auto lg:mx-0">
            <h2 className="text-3xl tracking-widest font-medium uppercase mb-6">The Glory Collection</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              An elevation of the everyday. Premium heavy-weight essentials designed to stand the test of time. 
              Each piece is meticulously crafted to serve as a quiet reminder of identity and purpose in a loud world.
            </p>
            <Link href="/collections" className="inline-block border-b border-black pb-1 text-xs uppercase tracking-widest font-medium hover:text-gray-500 hover:border-gray-500 transition-all">
              Explore Collection
            </Link>
          </div>
          <div className="order-1 lg:order-2">
            <img src="/attached_assets/generated_images/hero3.jpg" alt="Editorial" className="w-full aspect-[4/5] object-cover" />
          </div>
        </div>
      </section>

      {/* Lookbook Preview */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl tracking-widest font-medium uppercase mb-4">Lookbook Vol. 1</h2>
          <p className="text-gray-500 text-sm">Visuals from our latest campaign</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <img src="/attached_assets/generated_images/lookbook1.jpg" alt="Lookbook 1" className="w-full aspect-[3/4] object-cover bg-gray-100" />
          <img src="/attached_assets/generated_images/lookbook2.jpg" alt="Lookbook 2" className="w-full aspect-[3/4] object-cover bg-gray-100 md:-translate-y-8" />
          <img src="/attached_assets/generated_images/lookbook3.jpg" alt="Lookbook 3" className="w-full aspect-[3/4] object-cover bg-gray-100" />
          <img src="/attached_assets/generated_images/lookbook4.jpg" alt="Lookbook 4" className="w-full aspect-[3/4] object-cover bg-gray-100 md:translate-y-8" />
        </div>
      </section>

      {/* Scripture Section */}
      <section className="py-32 px-6 bg-black text-white text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-2xl md:text-3xl font-light leading-snug mb-8 tracking-wide">
            "Remember how the Lord your God led you all the way in the wilderness these forty years, to humble and test you in order to know what was in your heart."
          </p>
          <span className="text-xs uppercase tracking-widest text-gray-400 font-medium">
            Deuteronomy 8:2
          </span>
        </div>
      </section>
    </Layout>
  );
}
