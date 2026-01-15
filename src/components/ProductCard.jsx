import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { ShoppingCart, Heart } from 'lucide-react';

const ProductCard = ({ product, index, imageElement }) => {
    const { toast } = useToast();
    const discountPercentage = Math.round(((product.mrp - product.discountedPrice) / product.mrp) * 100);
    const amountSaved = (product.mrp - product.discountedPrice).toFixed(2);

    const handleBuyNow = () => {
        if (product.link) {
            window.open(product.link, '_blank');
        } else {
            toast({
                title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
            });
        }
    };

    const handleWishlist = () => {
        toast({
            title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
        });
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="bg-white rounded-none border border-gray-100 hover:border-olive-green/30 transition-all duration-300 overflow-hidden group font-poppins"
        >
            <div className="relative overflow-hidden bg-off-white aspect-[4/5]">
                <div className="absolute top-0 left-0 z-10 bg-olive-green text-white px-3 py-1 text-xs uppercase tracking-widest font-medium">
                    {discountPercentage}% OFF
                </div>
                <button
                    onClick={handleWishlist}
                    className="absolute top-2 right-2 z-10 bg-white/80 p-2 rounded-full hover:bg-olive-green hover:text-white transition-all duration-300 backdrop-blur-sm"
                >
                    <Heart className="w-4 h-4" />
                </button>
                <div className="w-full h-full flex items-center justify-center">
                    {imageElement ? (
                        imageElement
                    ) : (
                        <img
                            src={product.image}
                            alt={product.name}
                            className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                        />
                    )}
                </div>
            </div>

            <div className="p-6 text-center">
                <h3 className="text-lg font-oswald font-medium text-gray-900 mb-2 line-clamp-2 min-h-[3.5rem] leading-tight">
                    {product.name}
                </h3>

                <div className="mb-4 flex items-center justify-center gap-3">
                    <span className="text-xl font-bold text-olive-green">₹{product.discountedPrice}</span>
                    <span className="text-sm text-gray-400 line-through">₹{product.mrp}</span>
                </div>

                <Button
                    onClick={handleBuyNow}
                    className="w-full bg-white border border-gray-200 text-gray-800 hover:bg-olive-green hover:text-white hover:border-olive-green py-5 rounded-none font-medium text-xs uppercase tracking-widest shadow-sm hover:shadow-md transition-all duration-300"
                >
                    Add to Cart
                </Button>
            </div>
        </motion.div>
    );
};

export default ProductCard;