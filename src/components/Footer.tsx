import React from 'react';
import { Link } from 'react-router-dom';
import { Bike, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-10 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <Link to="/" className="flex items-center gap-2">
            <Bike className="w-8 h-8 text-blue-500" />
            <span className="text-xl font-bold tracking-tighter uppercase">
              Bike <span className="text-blue-500">For Ever</span>
            </span>
          </Link>
          <p className="text-white/60 text-sm leading-relaxed">
            Premium high-performance bikes for every terrain. Engineered for speed, durability, and the ultimate riding experience.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-blue-500 transition-colors"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="hover:text-blue-500 transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="hover:text-blue-500 transition-colors"><Twitter className="w-5 h-5" /></a>
          </div>
        </div>

        <div>
          <h4 className="font-bold uppercase tracking-widest mb-6 text-blue-500">Quick Links</h4>
          <ul className="space-y-4 text-sm text-white/60">
            <li><Link to="/shop" className="hover:text-white transition-colors">Shop All</Link></li>
            <li><Link to="/shop?category=Mountain" className="hover:text-white transition-colors">Mountain Bikes</Link></li>
            <li><Link to="/shop?category=Road" className="hover:text-white transition-colors">Road Bikes</Link></li>
            <li><Link to="/shop?category=Electric" className="hover:text-white transition-colors">Electric Bikes</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold uppercase tracking-widest mb-6 text-blue-500">Support</h4>
          <ul className="space-y-4 text-sm text-white/60">
            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            <li><a href="#" className="hover:text-white transition-colors">Shipping Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Warranty Info</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold uppercase tracking-widest mb-6 text-blue-500">Newsletter</h4>
          <p className="text-sm text-white/60 mb-4">Subscribe to get special offers and riding tips.</p>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Email address"
              className="bg-white/5 border border-white/10 px-4 py-2 rounded-lg text-sm flex-1 focus:outline-none focus:border-blue-500"
            />
            <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors">
              <Mail className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40 uppercase tracking-widest">
        <p>© 2026 Bike For Ever. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
