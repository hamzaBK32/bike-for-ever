import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag, Truck } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'motion/react';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, cartCount } = useCart();

  if (cartCount === 0) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center pt-20 px-6">
        <div className="text-center space-y-8">
          <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mx-auto">
            <ShoppingBag className="w-12 h-12 text-white/20" />
          </div>
          <div className="space-y-2">
            <h2 className="text-4xl font-black uppercase tracking-tighter text-white">Your cart is empty</h2>
            <p className="text-white/40 uppercase tracking-widest text-xs font-bold">Looks like you haven't added any bikes yet.</p>
          </div>
          <Link
            to="/shop"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest transition-all"
          >
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-black uppercase tracking-tighter text-white mb-12">Your Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-8">
            <AnimatePresence mode="popLayout">
              {cart.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="flex flex-col sm:flex-row items-center gap-8 p-6 bg-white/5 border border-white/10 rounded-3xl group hover:border-blue-500/30 transition-colors"
                >
                  <div className="w-32 h-32 rounded-2xl overflow-hidden bg-white/5 border border-white/10 shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>

                  <div className="flex-1 space-y-2 text-center sm:text-left">
                    <span className="text-blue-500 font-bold uppercase tracking-widest text-[10px]">{item.category}</span>
                    <h3 className="text-xl font-bold text-white">{item.name}</h3>
                    <p className="text-white/40 text-sm line-clamp-1">{item.description}</p>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="flex items-center bg-white/5 border border-white/10 rounded-full p-1">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-2 hover:text-blue-500 transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center font-bold text-white text-sm">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-2 hover:text-blue-500 transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="text-right min-w-[100px]">
                      <p className="text-xl font-black text-white tracking-tighter">${item.price * item.quantity}</p>
                      <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest">${item.price} each</p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="p-3 text-white/20 hover:text-red-500 transition-colors"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-10 space-y-8 sticky top-32">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">Order Summary</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between text-white/60 text-sm uppercase tracking-widest font-bold">
                  <span>Subtotal</span>
                  <span>${cartTotal}</span>
                </div>
                <div className="flex justify-between text-white/60 text-sm uppercase tracking-widest font-bold">
                  <span>Shipping</span>
                  <span className="text-blue-500">FREE</span>
                </div>
                <div className="flex justify-between text-white/60 text-sm uppercase tracking-widest font-bold">
                  <span>Tax</span>
                  <span>$0.00</span>
                </div>
                <div className="pt-4 border-t border-white/10 flex justify-between items-end">
                  <span className="text-white/40 text-xs uppercase tracking-widest font-bold">Total</span>
                  <span className="text-4xl font-black text-white tracking-tighter">${cartTotal}</span>
                </div>
              </div>

              <div className="space-y-4">
                <Link
                  to="/checkout"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-5 rounded-full font-bold uppercase tracking-widest flex items-center justify-center gap-3 transition-all"
                >
                  Checkout
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <p className="text-[10px] text-white/40 text-center uppercase tracking-widest font-bold">
                  Secure checkout powered by Stripe
                </p>
              </div>

              <div className="pt-8 border-t border-white/10 grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center gap-2 text-center">
                  <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center">
                    <ShoppingBag className="w-4 h-4 text-blue-500" />
                  </div>
                  <span className="text-[8px] font-bold uppercase tracking-widest text-white/40">Secure Payment</span>
                </div>
                <div className="flex flex-col items-center gap-2 text-center">
                  <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center">
                    <Truck className="w-4 h-4 text-blue-500" />
                  </div>
                  <span className="text-[8px] font-bold uppercase tracking-widest text-white/40">Fast Delivery</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
