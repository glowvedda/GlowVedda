import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Gift } from 'lucide-react';

const CallToAction = () => {
    const handleShopNow = () => {
        window.open('https://www.amazon.in/GLOW-VEDDA-Brightening-Anti-Dark-Combination/dp/B0G7XVYK34/', '_blank');
    };

    return (
        <section className="py-24 bg-olive-green relative overflow-hidden font-poppins text-white">
            <div className="absolute inset-0 bg-black/5"></div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-4xl mx-auto"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, type: "spring" }}
                        className="inline-flex items-center gap-2 bg-white/10 px-6 py-2 rounded-full mb-8 backdrop-blur-sm border border-white/20"
                    >
                        <Gift className="w-4 h-4 text-white" />
                        <span className="font-medium text-sm tracking-wide">Limited Time Offer - Special Discounts!</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-4xl md:text-6xl font-oswald font-medium mb-6 leading-tight"
                    >
                        Ready to Transform Your Skin?
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-xl text-off-white/90 mb-10 leading-relaxed font-light"
                    >
                        Start your skincare journey today with GlowVedda's premium products.
                        Natural ingredients, proven results, and a glowing complexion await you!
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-wrap justify-center gap-4"
                    >
                        <Button
                            onClick={handleShopNow}
                            size="lg"
                            className="bg-white text-olive-green hover:bg-off-white px-10 py-7 text-lg rounded-none uppercase tracking-widest font-medium shadow-none hover:shadow-lg transition-all duration-300 gap-2 border border-transparent"
                        >
                            Shop Now
                            <ArrowRight className="w-5 h-5" />
                        </Button>
                        <Button
                            onClick={handleShopNow}
                            size="lg"
                            variant="outline"
                            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-olive-green px-10 py-7 text-lg rounded-none uppercase tracking-widest font-medium transition-all duration-300"
                        >
                            View All Products
                        </Button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="mt-16 flex flex-wrap justify-center gap-12 text-off-white/80"
                    >
                        <div className="flex items-center gap-3">
                            <span className="font-oswald uppercase tracking-widest text-sm">Free Shipping</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="font-oswald uppercase tracking-widest text-sm">Premium Products</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="font-oswald uppercase tracking-widest text-sm">Secure Checkout</span>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default CallToAction;