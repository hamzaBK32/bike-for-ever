import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, Bike, Search } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { cn } from '../lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        isScrolled ? 'bg-black/90 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <Bike className="w-8 h-8 text-blue-500 group-hover:rotate-12 transition-transform" />
          <span className="text-xl font-bold tracking-tighter text-white uppercase">
            Bike <span className="text-blue-500">For Ever</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'text-sm font-medium uppercase tracking-widest hover:text-blue-500 transition-colors',
                location.pathname === link.path ? 'text-blue-500' : 'text-white/80'
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button className="text-white/80 hover:text-blue-500 transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <Link to="/cart" className="relative text-white/80 hover:text-blue-500 transition-colors">
            <ShoppingCart className="w-6 h-6" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center animate-bounce">
                {cartCount}
              </span>
            )}
          </Link>
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black border-t border-white/10 p-6 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={cn(
                'text-lg font-medium uppercase tracking-widest',
                location.pathname === link.path ? 'text-blue-500' : 'text-white'
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
