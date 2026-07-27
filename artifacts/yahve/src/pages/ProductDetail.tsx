import React, { useState, useEffect } from 'react';
import { Layout } from '@/components/layout/Layout';
import { useLocation, useParams, Link } from 'wouter';
import { YAHVE_PRODUCTS } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import { Plus, Minus, Heart, ChevronRight, ChevronDown } from 'lucide-react';
import { ProductCard } from '@/components/ui/ProductCard';

export function ProductDetail() {
  const { slug } = useParams();
  const [, setLocation] = useLocation();
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const product = YAHVE_PRODUCTS.find(p => p.slug === slug);
  
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState<string | null>('description');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (product) {
      setSelectedSize(product.sizes[0]);
      setSelectedColor(product.colors[0]);
      setQuantity(1);
      setCurrentImageIndex(0);
      
      // Add to recently viewed
      try {
        const viewed = JSON.parse(localStorage.getItem('yahve_recent') || '[]');
        const updated = [product.id, ...viewed.filter((id: string) => id !== product.id)].slice(0, 4);
        localStorage.setItem('yahve_recent', JSON.stringify(updated));
      } catch (e) {
        // ignore
      }
    }
  }, [slug, product]);

  if (!product) {
    return (
      <Layout>
        <div className="pt-32 pb-20 text-center min-h-[60vh]">
          <h1 className="text-2xl font-medium mb-4">Product Not Found</h1>
          <Link href="/shop" className="text-sm underline">Return to Shop</Link>
        </div>
      </Layout>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, selectedSize, selectedColor, quantity);
  };

  const toggleAccordion = (val: string) => {
    setActiveAccordion(activeAccordion === val ? null : val);
  };

  // Get recently viewed products
  const recentIds = JSON.parse(localStorage.getItem('yahve_recent') || '[]').filter((id: string) => id !== product.id);
  const recentProducts = YAHVE_PRODUCTS.filter(p => recentIds.includes(p.id)).slice(0, 4);

  return (
    <Layout>
      <div className="pt-24 pb-12">
        {/* Breadcrumbs */}
        <div className="max-w-[1600px] mx-auto px-6 mb-8 text-[10px] uppercase tracking-widest text-gray-400 flex items-center gap-2">
          <Link href="/" className="hover:text-black transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/shop" className="hover:text-black transition-colors">Shop</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-black">{product.name}</span>
        </div>

        <div className="max-w-[1600px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-24">
          
          {/* Image Gallery */}
          <div className="flex flex-col gap-4">
            <div className="aspect-[3/4] bg-[#F8F8F8] overflow-hidden relative">
              <img 
                src={product.gallery[currentImageIndex] || product.image} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </div>
            {product.gallery.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {product.gallery.map((img, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`aspect-[3/4] bg-[#F8F8F8] overflow-hidden border-2 ${currentImageIndex === idx ? 'border-black' : 'border-transparent'}`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="flex flex-col py-4">
            <div className="mb-8">
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-3">{product.collection}</p>
              <h1 className="text-3xl font-medium tracking-wide mb-4">{product.name}</h1>
              <p className="text-xl">${product.price}</p>
            </div>

            {/* Color Selection */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs uppercase tracking-widest font-medium">Color: {selectedColor}</span>
              </div>
              <div className="flex gap-3">
                {product.colors.map(color => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-10 h-10 border flex items-center justify-center text-xs ${
                      selectedColor === color ? 'border-black bg-black text-white' : 'border-[#EEEEEE] hover:border-black'
                    }`}
                  >
                    {/* Render color swatch or initials */}
                    {color.substring(0, 2).toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs uppercase tracking-widest font-medium">Size: {selectedSize}</span>
                <button className="text-[10px] uppercase tracking-wider text-gray-500 underline underline-offset-4 hover:text-black">
                  Size Guide
                </button>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 text-xs uppercase tracking-widest font-medium border transition-colors ${
                      selectedSize === size ? 'border-black bg-black text-white' : 'border-[#EEEEEE] hover:border-gray-400 text-gray-900'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4 mb-12">
              <div className="flex items-center border border-[#EEEEEE] w-32">
                <button 
                  className="flex-1 p-4 text-gray-400 hover:text-black flex justify-center items-center"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="text-sm font-medium w-8 text-center">{quantity}</span>
                <button 
                  className="flex-1 p-4 text-gray-400 hover:text-black flex justify-center items-center"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <button 
                onClick={handleAddToCart}
                className="flex-1 bg-black text-white text-xs uppercase tracking-widest font-medium hover:bg-gray-900 transition-colors"
              >
                Add to Cart
              </button>
              <button 
                onClick={() => toggleWishlist(product)}
                className="w-14 border border-[#EEEEEE] flex items-center justify-center hover:border-gray-400 transition-colors"
              >
                <Heart className={`w-5 h-5 ${isInWishlist(product.id) ? "fill-black text-black" : "text-gray-600"}`} />
              </button>
            </div>

            {/* Accordions */}
            <div className="border-t border-[#EEEEEE]">
              <div className="border-b border-[#EEEEEE]">
                <button 
                  onClick={() => toggleAccordion('description')}
                  className="w-full py-6 flex justify-between items-center text-xs uppercase tracking-widest font-medium"
                >
                  Description
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeAccordion === 'description' ? 'rotate-180' : ''}`} />
                </button>
                {activeAccordion === 'description' && (
                  <div className="pb-6 text-sm text-gray-600 leading-relaxed">
                    {product.description}
                  </div>
                )}
              </div>
              
              <div className="border-b border-[#EEEEEE]">
                <button 
                  onClick={() => toggleAccordion('fabric')}
                  className="w-full py-6 flex justify-between items-center text-xs uppercase tracking-widest font-medium"
                >
                  Fabric & Care
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeAccordion === 'fabric' ? 'rotate-180' : ''}`} />
                </button>
                {activeAccordion === 'fabric' && (
                  <div className="pb-6 text-sm text-gray-600 leading-relaxed">
                    <ul className="list-disc pl-4 space-y-2">
                      <li>100% Premium Heavyweight Cotton</li>
                      <li>Machine wash cold inside out</li>
                      <li>Do not bleach</li>
                      <li>Tumble dry low or hang dry</li>
                      <li>Do not iron print</li>
                    </ul>
                  </div>
                )}
              </div>

              <div className="border-b border-[#EEEEEE]">
                <button 
                  onClick={() => toggleAccordion('shipping')}
                  className="w-full py-6 flex justify-between items-center text-xs uppercase tracking-widest font-medium"
                >
                  Shipping & Returns
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeAccordion === 'shipping' ? 'rotate-180' : ''}`} />
                </button>
                {activeAccordion === 'shipping' && (
                  <div className="pb-6 text-sm text-gray-600 leading-relaxed space-y-4">
                    <p><strong>Standard Shipping:</strong> 3-5 business days.</p>
                    <p><strong>Express Shipping:</strong> 1-2 business days.</p>
                    <p>Returns accepted within 30 days of delivery. Items must be unworn, unwashed, and in original packaging.</p>
                  </div>
                )}
              </div>
            </div>
            
          </div>
        </div>

        {/* Recently Viewed */}
        {recentProducts.length > 0 && (
          <div className="max-w-[1600px] mx-auto px-6 mb-24">
            <h2 className="text-xl tracking-widest font-medium uppercase mb-8 border-b border-[#EEEEEE] pb-4">
              Recently Viewed
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {recentProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
