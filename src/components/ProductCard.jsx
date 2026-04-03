import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { ArrowUpRight, Heart } from 'lucide-react';

const ProductCard = ({ product, index, imageElement }) => {
    const { toast } = useToast();
    const discountPercentage = Math.round(((product.mrp - product.discountedPrice) / product.mrp) * 100);
    const amountSaved = (product.mrp - product.discountedPrice).toFixed(2);

    const handleBuyNow = () => {
        if (product.link) {
            if (window.fbq) {
                window.fbq('track', 'Purchase');
            }

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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
            whileHover={{ y: -8 }}
            className="group relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/75 shadow-[0_20px_45px_rgba(20,53,40,0.14)] backdrop-blur-sm"
        >
            <div className="absolute inset-0 bg-gradient-to-b from-white/35 via-transparent to-emerald-950/10" aria-hidden="true"></div>

            <div className="relative overflow-hidden rounded-t-[2rem] bg-gradient-to-br from-[#fefaf0] via-[#eef3e9] to-[#e4efe7] aspect-[4/4.6]">
                <div className="absolute left-3 top-3 z-10 rounded-full bg-emerald-900 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-white shadow-lg">
                    {discountPercentage}% off
                </div>
                <button
                    onClick={handleWishlist}
                    className="absolute right-3 top-3 z-10 rounded-full border border-emerald-900/15 bg-white/85 p-2.5 text-emerald-900 transition-all duration-300 hover:scale-105 hover:bg-emerald-900 hover:text-white"
                    aria-label={`Add ${product.name} to wishlist`}
                >
                    <Heart className="w-4 h-4" />
                </button>

                <div className="h-full w-full p-4">
                    {imageElement ? (
                        <div className="h-full w-full overflow-hidden rounded-[1.5rem] border border-white/60 bg-white/70">
                            {imageElement}
                        </div>
                    ) : (
                        <img
                            src={product.image}
                            alt={product.name}
                            className="h-full w-full rounded-[1.5rem] object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    )}
                </div>
            </div>

            <div className="relative p-6">
                <h3 className="min-h-[3.25rem] text-xl font-syne font-semibold leading-tight text-emerald-950">
                    {product.name}
                </h3>

                <div className="mt-4 flex flex-wrap gap-2">
                    {product.benefits.slice(0, 2).map(benefit => (
                        <span
                            key={benefit}
                            className="rounded-full border border-emerald-900/10 bg-emerald-50/75 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-emerald-900/72"
                        >
                            {benefit}
                        </span>
                    ))}
                </div>

                <div className="mt-5 rounded-2xl border border-emerald-900/10 bg-white/75 p-3">
                    <div className="flex items-center justify-between gap-2">
                        <div className="flex items-end gap-2">
                            <span className="text-2xl font-syne font-semibold text-emerald-950">₹{product.discountedPrice}</span>
                            <span className="pb-1 text-sm text-emerald-900/45 line-through">₹{product.mrp}</span>
                        </div>
                        <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-clay">Save ₹{amountSaved}</span>
                    </div>
                </div>

                <div className="mt-5 flex gap-2">
                    <Button
                        onClick={handleBuyNow}
                        className="h-11 flex-1 rounded-full bg-emerald-900 px-4 text-[11px] font-bold uppercase tracking-[0.18em] text-white transition-all hover:bg-emerald-800"
                    >
                        Buy now
                    </Button>
                    <Button
                        onClick={handleBuyNow}
                        variant="outline"
                        className="h-11 rounded-full border-emerald-900/20 bg-white/80 px-4 text-emerald-900 hover:bg-white"
                        aria-label={`Open ${product.name} details`}
                    >
                        <ArrowUpRight className="h-4 w-4" />
                    </Button>
                </div>
            </div>
        </motion.div>
    );
};

export default ProductCard;
