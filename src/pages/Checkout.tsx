import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, CreditCard, Truck, Shield, CheckCircle2, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { motion } from 'motion/react';

const Checkout = () => {
  const { cart, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      clearCart();
    }, 3000);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center pt-20 px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center space-y-8 max-w-md"
        >
          <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto shadow-[0_0_50px_rgba(37,99,235,0.4)]">
            <CheckCircle2 className="w-12 h-12 text-white" />
          </div>
          <div className="space-y-2">
            <h2 className="text-4xl font-black uppercase tracking-tighter text-white">Order Confirmed!</h2>
            <p className="text-white/40 uppercase tracking-widest text-xs font-bold">Your high-performance machine is on its way.</p>
          </div>
          <p className="text-white/60 leading-relaxed">
            We've sent a confirmation email to your inbox. You can track your order status in your account dashboard.
          </p>
          <div className="flex flex-col gap-4">
            <Link
              to="/"
              className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest transition-all"
            >
              Back to Home
            </Link>
            <Link
              to="/shop"
              className="text-white/40 hover:text-white font-bold uppercase tracking-widest text-xs transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <Link to="/cart" className="inline-flex items-center gap-2 text-white/60 hover:text-blue-500 transition-colors mb-8 uppercase tracking-widest text-xs font-bold">
          <ChevronLeft className="w-4 h-4" /> Back to Cart
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Checkout Form */}
          <div className="lg:col-span-2 space-y-12">
            <div className="space-y-8">
              <h2 className="text-3xl font-black uppercase tracking-tighter text-white border-b border-white/10 pb-4">Shipping Details</h2>
              <form id="checkout-form" onSubmit={handleCheckout} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-4">First Name</label>
                  <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-4">Last Name</label>
                  <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="Doe" />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-4">Address</label>
                  <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="123 Velocity Way" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-4">City</label>
                  <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="Portland" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-4">Zip Code</label>
                  <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="97201" />
                </div>
              </form>
            </div>

            <div className="space-y-8">
              <h2 className="text-3xl font-black uppercase tracking-tighter text-white border-b border-white/10 pb-4">Payment Method</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-blue-600/10 border-2 border-blue-600 rounded-3xl flex items-center justify-between group cursor-pointer">
                  <div className="flex items-center gap-4">
                    <CreditCard className="w-6 h-6 text-blue-500" />
                    <span className="font-bold text-white uppercase tracking-widest text-sm">Credit Card</span>
                  </div>
                  <div className="w-4 h-4 rounded-full border-2 border-blue-600 flex items-center justify-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full" />
                  </div>
                </div>
                <div className="p-6 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-between opacity-50 cursor-not-allowed">
                  <div className="flex items-center gap-4">
                    <div className="w-6 h-6 text-white/40 font-bold">PP</div>
                    <span className="font-bold text-white/40 uppercase tracking-widest text-sm">PayPal</span>
                  </div>
                </div>
              </div>

              <div className="space-y-6 pt-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-4">Card Number</label>
                  <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="**** **** **** ****" />
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-4">Expiry Date</label>
                    <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="MM/YY" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-4">CVV</label>
                    <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="***" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-10 space-y-8 sticky top-32">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">Order Summary</h2>
              
              <div className="space-y-4 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between items-center gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg overflow-hidden bg-white/5 border border-white/10">
                        <img src={item.image} alt="" className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-white line-clamp-1">{item.name}</p>
                        <p className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Qty: {item.quantity}</p>
                      </div>
                    </div>
                    <span className="text-sm font-bold text-white">${item.price * item.quantity}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-4 pt-8 border-t border-white/10">
                <div className="flex justify-between text-white/60 text-xs uppercase tracking-widest font-bold">
                  <span>Subtotal</span>
                  <span>${cartTotal}</span>
                </div>
                <div className="flex justify-between text-white/60 text-xs uppercase tracking-widest font-bold">
                  <span>Shipping</span>
                  <span className="text-blue-500">FREE</span>
                </div>
                <div className="pt-4 border-t border-white/10 flex justify-between items-end">
                  <span className="text-white/40 text-[10px] uppercase tracking-widest font-bold">Total</span>
                  <span className="text-3xl font-black text-white tracking-tighter">${cartTotal}</span>
                </div>
              </div>

              <button
                type="submit"
                form="checkout-form"
                disabled={isProcessing}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/50 disabled:cursor-not-allowed text-white py-5 rounded-full font-bold uppercase tracking-widest flex items-center justify-center gap-3 transition-all"
              >
                {isProcessing ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    Complete Order
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex flex-col items-center gap-2 text-center">
                  <Shield className="w-4 h-4 text-blue-500" />
                  <span className="text-[8px] font-bold uppercase tracking-widest text-white/40">Encrypted</span>
                </div>
                <div className="flex flex-col items-center gap-2 text-center">
                  <Truck className="w-4 h-4 text-blue-500" />
                  <span className="text-[8px] font-bold uppercase tracking-widest text-white/40">Insured</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
