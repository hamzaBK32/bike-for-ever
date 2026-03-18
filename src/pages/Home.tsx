import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Truck, Award, CreditCard, Star, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const bestSellers = products.filter(p => p.isBestSeller);
  const categories = [
    { name: 'Mountain Bikes', image: 'https://images.unsplash.com/photo-1576433734880-5fbd38173171?auto=format&fit=crop&q=80&w=800', path: '/shop?category=Mountain' },
    { name: 'Road Bikes', image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=80&w=800', path: '/shop?category=Road' },
    { name: 'Electric Bikes', image: 'https://images.unsplash.com/photo-1593764592116-bfb2a97c642a?auto=format&fit=crop&q=80&w=800', path: '/shop?category=Electric' },
    { name: 'Kids Bikes', image: 'https://images.unsplash.com/photo-1532124958905-df23d4c508f9?auto=format&fit=crop&q=80&w=800', path: '/shop?category=Kids' },
  ];

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1532298229144-0ee0c57515c5?auto=format&fit=crop&q=80&w=1920"
            alt="Hero Background"
            className="w-full h-full object-cover opacity-60 scale-105 animate-pulse-slow"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <span className="text-blue-500 font-bold uppercase tracking-[0.3em] text-sm">Engineered for Performance</span>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none">
              Ride <span className="text-blue-500">Forever.</span><br />Ride Strong.
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto font-medium">
              Experience the ultimate freedom with our premium collection of high-performance bikes. Built for the bold, designed for the brave.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <Link
                to="/shop"
                className="group bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest flex items-center gap-2 transition-all hover:scale-105"
              >
                Shop Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/about"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest transition-all"
              >
                Our Story
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-2">
            <div className="w-1 h-2 bg-blue-500 rounded-full" />
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
          <div className="space-y-2">
            <span className="text-blue-500 font-bold uppercase tracking-widest text-xs">Categories</span>
            <h2 className="text-4xl font-black uppercase tracking-tighter">Choose Your Terrain</h2>
          </div>
          <Link to="/shop" className="text-blue-500 font-bold uppercase tracking-widest text-xs flex items-center gap-2 hover:gap-3 transition-all">
            View All Collections <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-80 rounded-3xl overflow-hidden"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className="absolute bottom-8 left-8">
                <h3 className="text-xl font-bold uppercase tracking-tighter mb-4">{cat.name}</h3>
                <Link
                  to={cat.path}
                  className="bg-white text-black px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-blue-500 hover:text-white transition-colors"
                >
                  Explore
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-24 px-6 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <span className="text-blue-500 font-bold uppercase tracking-widest text-xs">Top Rated</span>
            <h2 className="text-5xl font-black uppercase tracking-tighter">Best Sellers</h2>
            <p className="text-white/60 max-w-xl mx-auto">Our most popular models, tested and approved by riders worldwide.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bestSellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            { icon: Truck, title: 'Free Delivery', desc: 'On all orders over $1000' },
            { icon: Shield, title: '1-Year Warranty', desc: 'Full coverage for your peace of mind' },
            { icon: Award, title: 'High Quality', desc: 'Premium materials and engineering' },
            { icon: CreditCard, title: 'Secure Payment', desc: '100% encrypted checkout' },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center space-y-4 group">
              <div className="w-16 h-16 bg-blue-600/10 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                <item.icon className="w-8 h-8 text-blue-500 group-hover:text-white" />
              </div>
              <h4 className="text-lg font-bold uppercase tracking-tighter">{item.title}</h4>
              <p className="text-white/40 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-blue-600">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-16">What Our Riders Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Alex Rivers', role: 'Pro Mountain Biker', text: 'The Summit Pro X1 changed my game. The responsiveness on trails is unmatched.' },
              { name: 'Sarah Chen', role: 'Road Enthusiast', text: 'Velocity Aero 7 is pure speed. I shaved 5 minutes off my personal best on the first ride.' },
              { name: 'Mark Thompson', role: 'Commuter', text: 'Volt City is the perfect urban companion. Sleek, powerful, and incredibly reliable.' },
            ].map((t, i) => (
              <div key={i} className="bg-black/20 p-8 rounded-3xl backdrop-blur-lg text-left space-y-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-white text-white" />)}
                </div>
                <p className="text-lg font-medium italic">"{t.text}"</p>
                <div>
                  <p className="font-bold uppercase tracking-widest text-sm">{t.name}</p>
                  <p className="text-white/60 text-xs">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="bg-white/5 rounded-[3rem] p-12 md:p-20 text-center space-y-8 border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[100px] -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/20 blur-[100px] -ml-32 -mb-32" />
          
          <div className="relative z-10 space-y-4">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Join the Revolution</h2>
            <p className="text-white/60 max-w-xl mx-auto text-lg">Subscribe to our newsletter and get 10% off your first order plus exclusive riding tips.</p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto pt-6">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 border border-white/20 px-8 py-4 rounded-full flex-1 focus:outline-none focus:border-blue-500 text-lg"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest transition-all">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
