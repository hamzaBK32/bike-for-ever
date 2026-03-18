import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart, Eye } from 'lucide-react';
import { Product } from '../data/products';
import { useCart } from '../context/CartContext';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-500"
    >
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
          <Link
            to={`/product/${product.id}`}
            className="p-3 bg-white text-black rounded-full hover:bg-blue-500 hover:text-white transition-colors"
          >
            <Eye className="w-5 h-5" />
          </Link>
          <button
            onClick={() => addToCart(product)}
            className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
          >
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
        {product.isBestSeller && (
          <span className="absolute top-4 left-4 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
            Best Seller
          </span>
        )}
        {product.stock < 5 && (
          <span className="absolute top-4 right-4 bg-red-600 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
            Only {product.stock} left
          </span>
        )}
      </div>

      <div className="p-6 space-y-3">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-blue-500 text-[10px] font-bold uppercase tracking-widest mb-1">
              {product.category}
            </p>
            <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
              {product.name}
            </h3>
          </div>
          <p className="text-xl font-black text-white tracking-tighter">
            ${product.price}
          </p>
        </div>

        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={cn(
                "w-3 h-3",
                i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-white/20"
              )}
            />
          ))}
          <span className="text-[10px] text-white/40 ml-1">({product.reviews})</span>
        </div>

        <button
          onClick={() => addToCart(product)}
          className="w-full py-3 bg-white/10 hover:bg-blue-600 text-white text-xs font-bold uppercase tracking-widest rounded-xl transition-all group-hover:bg-blue-600"
        >
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
