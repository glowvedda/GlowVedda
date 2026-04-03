import React from 'react';
import { motion } from 'framer-motion';
import ProductCard from '@/components/ProductCard';
import { Sparkles } from 'lucide-react';

const ProductShowcase = ({ products }) => {
    // If no products found
    if (!products || products.length === 0) {
        return (
            <section className="pb-16 pt-10 text-center font-manrope">
                <div className="container mx-auto px-4">
                    <div className="section-shell px-6 py-16 md:px-10">
                        <h2 className="text-2xl font-syne text-emerald-950 md:text-3xl">No products matched your search</h2>
                        <p className="mx-auto mt-4 max-w-xl text-sm text-emerald-900/70 md:text-base">
                            Try searching by concern like acne, dullness, or pores to discover the best match for your skin goals.
                        </p>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id="catalog" className="pb-20 pt-16 font-manrope md:pt-20">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55 }}
                    className="section-shell atmosphere-grid mb-10 overflow-hidden px-6 py-10 md:mb-12 md:px-10 md:py-12"
                >
                    <div className="absolute -right-16 top-0 h-40 w-40 rounded-full bg-moss/20 blur-2xl" aria-hidden="true"></div>
                    <div className="relative z-10 text-center">
                        <span className="pill-chip">
                            <Sparkles className="h-3.5 w-3.5 text-clay" />
                            Curated For Real Skin
                        </span>
                        <h2 className="mt-6 text-4xl font-syne font-semibold text-emerald-950 md:text-6xl">
                            Signature collection,
                            <span className="text-gradient"> visible results</span>
                        </h2>
                        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-emerald-900/72 md:text-base">
                            Each formula is designed for daily routines and built around actives that perform without irritating your skin barrier.
                        </p>
                        <div className="mt-7 flex flex-wrap items-center justify-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.17em]">
                            <span className="rounded-full border border-emerald-900/12 bg-white/65 px-3 py-1.5 text-emerald-900/75">Brightening</span>
                            <span className="rounded-full border border-emerald-900/12 bg-white/65 px-3 py-1.5 text-emerald-900/75">Acne Care</span>
                            <span className="rounded-full border border-emerald-900/12 bg-white/65 px-3 py-1.5 text-emerald-900/75">Sun Defense</span>
                            <span className="rounded-full border border-emerald-900/12 bg-white/65 px-3 py-1.5 text-emerald-900/75">Barrier Support</span>
                        </div>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
                    {products.map((product, index) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            index={index}
                            imageElement={
                                <img
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    alt={product.alt}
                                    src={product.image}
                                />
                            }
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductShowcase;