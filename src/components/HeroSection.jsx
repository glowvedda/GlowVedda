import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import heroImage from '@/assets/images/General-1.jpg';

const HeroSection = () => {
    const handleShopNow = () => {
        window.open('https://www.amazon.in/GLOW-VEDDA-Brightening-Anti-Dark-Combination/dp/B0G7XVYK34/', '_blank');
    };

    return (
        <section className="relative w-full h-[85vh] overflow-hidden font-poppins">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src={heroImage}
                    alt="GlowVedda Natural Skincare"
                    className="w-full h-full object-cover object-center"
                />
                {/* Optional subtle overlay if image is too bright */}
                <div className="absolute inset-0 bg-black/5"></div>
            </div>

            {/* Content Box - Bottom Left */}
            <div className="absolute bottom-12 left-4 md:left-12 z-10 max-w-md w-full">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-olive-green p-8 md:p-10 shadow-xl"
                >
                    <h1 className="text-3xl md:text-5xl font-oswald font-medium text-white mb-4 leading-tight">
                        NATURAL <br /> RADIANCE
                    </h1>
                    <p className="text-off-white/90 text-sm md:text-base mb-8 font-light leading-relaxed">
                        Celebrate your skin with our premium collection of natural skincare essentials. Pure, potent, and perfect for you.
                    </p>

                    <Button
                        onClick={handleShopNow}
                        className="bg-off-white text-olive-green hover:bg-white px-8 py-6 rounded-none text-sm tracking-widest uppercase font-medium transition-all duration-300 w-full md:w-auto"
                    >
                        Shop Now <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;