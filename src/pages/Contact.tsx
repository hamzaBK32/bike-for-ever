import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="bg-black min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-12"
          >
            <div className="space-y-4">
              <span className="text-blue-500 font-bold uppercase tracking-widest text-xs">Contact Us</span>
              <h1 className="text-6xl md:text-7xl font-black uppercase tracking-tighter text-white leading-none">
                Get in <span className="text-blue-500">Touch.</span>
              </h1>
              <p className="text-white/60 text-lg max-w-md">
                Have questions about our bikes or need technical support? Our team of experts is here to help you.
              </p>
            </div>

            <div className="space-y-8">
              {[
                { icon: Phone, title: 'Call Us', detail: '+1 (555) 123-4567', sub: 'Mon-Fri, 9am - 6pm EST' },
                { icon: Mail, title: 'Email Us', detail: 'support@bikeforever.com', sub: 'We reply within 24 hours' },
                { icon: MapPin, title: 'Visit Us', detail: '123 Velocity Way, Portland, OR 97201', sub: 'Flagship Store & Workshop' },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-blue-500 transition-colors">
                    <item.icon className="w-6 h-6 text-blue-500" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-white/40 text-[10px] font-bold uppercase tracking-widest">{item.title}</h4>
                    <p className="text-xl font-bold text-white">{item.detail}</p>
                    <p className="text-white/40 text-xs">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="aspect-video rounded-[2rem] overflow-hidden border border-white/10 bg-white/5 relative group">
              <img
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1000"
                alt="Map"
                className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-blue-600 p-4 rounded-full animate-bounce">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/5 border border-white/10 rounded-[3rem] p-12 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[100px] -mr-32 -mt-32" />
            
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-6 animate-in zoom-in duration-500">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-3xl font-black uppercase tracking-tighter text-white">Message Sent!</h2>
                <p className="text-white/60 max-w-xs mx-auto">Thank you for reaching out. One of our experts will get back to you shortly.</p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-blue-500 font-bold uppercase tracking-widest text-xs hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                <div className="space-y-2">
                  <h2 className="text-3xl font-black uppercase tracking-tighter text-white">Send a Message</h2>
                  <p className="text-white/40 text-sm">Fill out the form below and we'll be in touch.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-4">Full Name</label>
                    <input
                      required
                      type="text"
                      className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-4">Email Address</label>
                    <input
                      required
                      type="email"
                      className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-4">Subject</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors appearance-none">
                    <option className="bg-black">General Inquiry</option>
                    <option className="bg-black">Technical Support</option>
                    <option className="bg-black">Order Status</option>
                    <option className="bg-black">Warranty Claim</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-4">Message</label>
                  <textarea
                    required
                    rows={5}
                    className="w-full bg-white/5 border border-white/10 rounded-[2rem] px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    placeholder="How can we help you?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-5 rounded-full font-bold uppercase tracking-widest flex items-center justify-center gap-3 transition-all group"
                >
                  Send Message
                  <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
