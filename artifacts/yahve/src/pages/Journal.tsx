import React, { useEffect } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Link } from 'wouter';
import { motion } from 'framer-motion';

const ARTICLES = [
  {
    id: 1,
    title: "The Architecture of Rest",
    excerpt: "In a world demanding constant motion, we explore the radical act of finding stillness. How our environments shape our inner peace.",
    date: "October 12, 2024",
    category: "Editorial",
    image: "/attached_assets/generated_images/hero1.jpg"
  },
  {
    id: 2,
    title: "Behind the Fabric: The Glory Collection",
    excerpt: "An inside look at the meticulous process of developing our custom 500gsm fleece. From raw cotton to the final stitch.",
    date: "September 28, 2024",
    category: "Design",
    image: "/attached_assets/generated_images/lookbook1.jpg"
  },
  {
    id: 3,
    title: "Identity in the Modern City",
    excerpt: "Conversations with creatives on maintaining their core identity while navigating the pressures of urban culture.",
    date: "September 15, 2024",
    category: "Culture",
    image: "/attached_assets/generated_images/hero3.jpg"
  },
  {
    id: 4,
    title: "Minimalism as Focus",
    excerpt: "Why removing the excess isn't about having less, but making room for what truly matters.",
    date: "August 30, 2024",
    category: "Editorial",
    image: "/attached_assets/generated_images/lookbook2.jpg"
  },
  {
    id: 5,
    title: "The Sound of Silence",
    excerpt: "Curating a lifestyle that protects your peace. A photo essay on finding quiet moments in unexpected places.",
    date: "August 14, 2024",
    category: "Visuals",
    image: "/attached_assets/generated_images/lookbook3.jpg"
  },
  {
    id: 6,
    title: "Purpose in Practice",
    excerpt: "Practical steps to align your daily routines with your broader calling. A guide to intentional living.",
    date: "July 22, 2024",
    category: "Culture",
    image: "/attached_assets/generated_images/lookbook4.jpg"
  }
];

export function Journal() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const featured = ARTICLES[0];
  const rest = ARTICLES.slice(1);

  return (
    <Layout>
      <div className="pt-24 pb-24">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-[1600px] mx-auto px-6">
          <h1 className="text-3xl md:text-4xl tracking-widest font-medium uppercase mb-4">Journal</h1>
          <p className="text-gray-500 text-sm">Thoughts, processes, and perspectives.</p>
        </div>

        {/* Featured Article */}
        <div className="max-w-[1600px] mx-auto px-6 mb-24">
          <Link href={`/journal/${featured.id}`} className="group block">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="aspect-[4/3] lg:aspect-auto lg:h-[600px] overflow-hidden bg-[#F8F8F8]">
                <img 
                  src={featured.image} 
                  alt={featured.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="max-w-lg">
                <div className="flex items-center gap-4 text-xs uppercase tracking-widest font-medium text-gray-500 mb-6">
                  <span>{featured.category}</span>
                  <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                  <span>{featured.date}</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-medium tracking-wide mb-6 group-hover:text-gray-600 transition-colors">
                  {featured.title}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  {featured.excerpt}
                </p>
                <span className="text-xs uppercase tracking-widest font-medium border-b border-black pb-1">
                  Read Story
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* Grid */}
        <div className="max-w-[1600px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {rest.map(article => (
            <Link key={article.id} href={`/journal/${article.id}`} className="group block">
              <div className="aspect-[4/5] overflow-hidden bg-[#F8F8F8] mb-6">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest font-medium text-gray-500 mb-4">
                <span>{article.category}</span>
                <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                <span>{article.date}</span>
              </div>
              <h3 className="text-xl font-medium tracking-wide mb-3 group-hover:text-gray-600 transition-colors">
                {article.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">
                {article.excerpt}
              </p>
            </Link>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-24">
          <button className="px-8 py-4 border border-black text-xs uppercase tracking-widest font-medium hover:bg-black hover:text-white transition-colors">
            Load More Articles
          </button>
        </div>

      </div>
    </Layout>
  );
}
