import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ShoppingCart, Truck, Shield, Award, ChevronLeft, Plus, Minus, Check } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  const product = products.find((p) => p.id === id);
  const relatedProducts = products.filter((p) => p.category === product?.category && p.id !== id).slice(0, 3);

  if (!product) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center space-y-6">
          <h2 className="text-4xl font-black uppercase text-white">Product Not Found</h2>
          <Link to="/shop" className="text-blue-500 font-bold uppercase tracking-widest hover:underline">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <Link to="/shop" className="inline-flex items-center gap-2 text-white/60 hover:text-blue-500 transition-colors mb-8 uppercase tracking-widest text-xs font-bold">
          <ChevronLeft className="w-4 h-4" /> Back to Shop
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="aspect-square rounded-[2rem] overflow-hidden border border-white/10 bg-white/5">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="aspect-square rounded-2xl overflow-hidden border border-white/10 bg-white/5 cursor-pointer hover:border-blue-500 transition-colors">
                  <img src={product.image} alt="" className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <span className="text-blue-500 font-bold uppercase tracking-widest text-xs">{product.category}</span>
              <h1 className="text-5xl font-black uppercase tracking-tighter text-white leading-none">
                {product.name}
              </h1>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={cn("w-4 h-4", i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-white/20")} />
                  ))}
                </div>
                <span className="text-white/40 text-sm font-medium uppercase tracking-widest">{product.reviews} Reviews</span>
              </div>
              <p className="text-4xl font-black text-white tracking-tighter">${product.price}</p>
            </div>

            <p className="text-white/60 text-lg leading-relaxed">
              {product.description}
            </p>

            <div className="grid grid-cols-2 gap-4">
              {product.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-white/80">
                  <Check className="w-4 h-4 text-blue-500" />
                  {feature}
                </div>
              ))}
            </div>

            <div className="space-y-6 pt-8 border-t border-white/10">
              <div className="flex items-center gap-6">
                <div className="flex items-center bg-white/5 border border-white/10 rounded-full p-1">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:text-blue-500 transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center font-bold text-white">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 hover:text-blue-500 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <button
                  onClick={() => addToCart(product)}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-full font-bold uppercase tracking-widest flex items-center justify-center gap-3 transition-all"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </button>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="flex flex-col items-center gap-2 text-center p-4 bg-white/5 rounded-2xl border border-white/10">
                  <Truck className="w-5 h-5 text-blue-500" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">Free Shipping</span>
                </div>
                <div className="flex flex-col items-center gap-2 text-center p-4 bg-white/5 rounded-2xl border border-white/10">
                  <Shield className="w-5 h-5 text-blue-500" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">1-Year Warranty</span>
                </div>
                <div className="flex flex-col items-center gap-2 text-center p-4 bg-white/5 rounded-2xl border border-white/10">
                  <Award className="w-5 h-5 text-blue-500" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">Certified</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Tabs */}
        <div className="mt-24">
          <div className="flex gap-12 border-b border-white/10 mb-12">
            {['description', 'specifications', 'reviews'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "pb-6 text-sm font-bold uppercase tracking-widest transition-all relative",
                  activeTab === tab ? "text-blue-500" : "text-white/40 hover:text-white"
                )}
              >
                {tab}
                {activeTab === tab && (
                  <motion.div layoutId="tab" className="absolute bottom-0 left-0 right-0 h-1 bg-blue-500" />
                )}
              </button>
            ))}
          </div>

          <div className="min-h-[200px]">
            {activeTab === 'description' && (
              <div className="text-white/60 max-w-3xl space-y-4 leading-relaxed">
                <p>{product.description}</p>
                <p>Designed for riders who demand the best. Every component of the {product.name} has been meticulously selected to ensure maximum performance and durability. Whether you're hitting the local trails or competing on the world stage, this bike is ready for anything.</p>
              </div>
            )}
            {activeTab === 'specifications' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-4 border-b border-white/5">
                    <span className="text-white/40 uppercase tracking-widest text-xs font-bold">{key}</span>
                    <span className="text-white font-medium">{value}</span>
                  </div>
                ))}
              </div>
            )}
            {activeTab === 'reviews' && (
              <div className="space-y-8">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="space-y-4 border-b border-white/5 pb-8">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center font-bold">R</div>
                        <div>
                          <p className="font-bold text-white">Rider {i + 1}</p>
                          <div className="flex gap-1">
                            {[...Array(5)].map((_, j) => <Star key={j} className="w-3 h-3 fill-yellow-400 text-yellow-400" />)}
                          </div>
                        </div>
                      </div>
                      <span className="text-white/20 text-xs">2 months ago</span>
                    </div>
                    <p className="text-white/60">Absolutely incredible bike. The build quality is top-notch and it handles like a dream. Highly recommend to anyone looking for a serious upgrade.</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-32">
          <h2 className="text-3xl font-black uppercase tracking-tighter text-white mb-12">Related Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
