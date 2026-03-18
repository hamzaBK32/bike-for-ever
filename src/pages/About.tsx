import React from 'react';
import { motion } from 'motion/react';
import { Bike, Award, Users, Globe, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="bg-black min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto space-y-32">
        {/* Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <span className="text-blue-500 font-bold uppercase tracking-widest text-xs">Our Story</span>
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-white leading-none">
              Born to <span className="text-blue-500">Ride.</span>
            </h1>
            <p className="text-white/60 text-xl leading-relaxed">
              Founded in 2010, Bike For Ever started with a simple mission: to build bikes that last a lifetime. We believe that a bike is more than just a machine—it's a gateway to freedom, adventure, and a healthier lifestyle.
            </p>
            <div className="flex gap-8 pt-8 border-t border-white/10">
              <div>
                <p className="text-4xl font-black text-white tracking-tighter">15+</p>
                <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Years of Innovation</p>
              </div>
              <div>
                <p className="text-4xl font-black text-white tracking-tighter">50k+</p>
                <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Happy Riders</p>
              </div>
              <div>
                <p className="text-4xl font-black text-white tracking-tighter">120+</p>
                <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Global Awards</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-[3rem] overflow-hidden aspect-square border border-white/10"
          >
            <img
              src="https://images.unsplash.com/photo-1511994298241-608e28f14f66?auto=format&fit=crop&q=80&w=1000"
              alt="Bike Workshop"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        {/* Mission */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { icon: Award, title: 'Durability', desc: 'We use aerospace-grade materials and rigorous testing to ensure your bike survives the toughest conditions.' },
            { icon: Bike, title: 'Performance', desc: 'Every frame geometry and component is optimized for maximum efficiency and speed.' },
            { icon: Users, title: 'Community', desc: 'We are more than a brand; we are a global community of riders pushing the limits every day.' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 p-12 rounded-[2.5rem] border border-white/10 space-y-6 hover:border-blue-500/50 transition-colors group"
            >
              <div className="w-16 h-16 bg-blue-600/10 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                <item.icon className="w-8 h-8 text-blue-500 group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-bold uppercase tracking-tighter text-white">{item.title}</h3>
              <p className="text-white/60 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Team/Lifestyle */}
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-5xl font-black uppercase tracking-tighter text-white">The Lifestyle</h2>
            <p className="text-white/40 max-w-xl mx-auto uppercase tracking-widest text-xs font-bold">More than just a commute. It's an adventure.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'https://images.unsplash.com/photo-1541625602330-2277a4c4b28d?auto=format&fit=crop&q=80&w=800',
              'https://images.unsplash.com/photo-1534398079244-67c8ad98f3f7?auto=format&fit=crop&q=80&w=800',
              'https://images.unsplash.com/photo-1444491741275-3747c53c99b4?auto=format&fit=crop&q=80&w=800',
            ].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="rounded-[2rem] overflow-hidden aspect-[4/5] border border-white/10"
              >
                <img src={img} alt="Lifestyle" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-blue-600 rounded-[3rem] p-12 md:p-20 text-center space-y-8">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white">Ready to Start Your Journey?</h2>
          <p className="text-white/80 max-w-xl mx-auto text-lg">Join thousands of riders who have already discovered the Bike For Ever difference.</p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-3 bg-black text-white px-12 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all"
          >
            Explore the Shop <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
