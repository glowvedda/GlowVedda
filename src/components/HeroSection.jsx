import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, ShieldCheck, Sparkles, Star } from 'lucide-react';
import heroImage from '@/assets/images/General-1.jpg';

const HeroSection = () => {
    const handleShopNow = () => {
        window.open('https://www.amazon.in/GLOW-VEDDA-Brightening-Anti-Dark-Combination/dp/B0G7XVYK34/', '_blank');
    };

    const scrollToCatalog = () => {
        const catalogSection = document.getElementById('catalog');
        catalogSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <section className="container mx-auto px-4">
            <div className="section-shell atmosphere-grid mt-2 px-6 pb-6 pt-8 md:mt-4 md:px-10 md:pt-10 lg:px-12 lg:pb-10">
                <div className="pointer-events-none absolute -top-20 right-8 h-48 w-48 rounded-full bg-clay/25 blur-2xl" aria-hidden="true"></div>
                <div className="pointer-events-none absolute bottom-8 left-1/3 h-32 w-32 rounded-full bg-moss/25 blur-2xl" aria-hidden="true"></div>

                <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
                    <motion.div
                        initial={{ opacity: 0, y: 26 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55 }}
                        className="relative z-10"
                    >
                        <span className="pill-chip">
                            <Sparkles className="h-3.5 w-3.5 text-clay" />
                            Ritual-Ready Skincare
                        </span>

                        <h1 className="mt-6 max-w-2xl text-4xl font-semibold leading-[0.95] text-emerald-950 sm:text-5xl lg:text-7xl">
                            Reset your
                            <span className="text-gradient"> glow standard</span>
                        </h1>

                        <p className="mt-6 max-w-xl text-base leading-relaxed text-emerald-900/78 md:text-lg">
                            Thoughtful active ingredients. Plant-powered support. Everyday textures your skin actually wants to use.
                            GlowVedda turns skincare into a ritual with visible payoff.
                        </p>

                        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                            <Button
                                onClick={handleShopNow}
                                className="h-12 rounded-full bg-emerald-900 px-8 text-xs font-bold uppercase tracking-[0.18em] text-white transition-all hover:-translate-y-0.5 hover:bg-emerald-800"
                            >
                                Shop Signature Serum
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                            <Button
                                onClick={scrollToCatalog}
                                variant="outline"
                                className="h-12 rounded-full border-emerald-900/20 bg-white/70 px-8 text-xs font-bold uppercase tracking-[0.18em] text-emerald-900 hover:bg-white"
                            >
                                Browse Collection
                            </Button>
                        </div>

                        <div className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-3">
                            <div className="glass-sheen rounded-2xl border border-emerald-900/10 px-4 py-3">
                                <p className="text-2xl font-syne font-semibold text-emerald-950">10k+</p>
                                <p className="text-xs uppercase tracking-[0.2em] text-emerald-900/60">Skincare lovers</p>
                            </div>
                            <div className="glass-sheen rounded-2xl border border-emerald-900/10 px-4 py-3">
                                <p className="text-2xl font-syne font-semibold text-emerald-950">98%</p>
                                <p className="text-xs uppercase tracking-[0.2em] text-emerald-900/60">Repurchase rate</p>
                            </div>
                            <div className="glass-sheen rounded-2xl border border-emerald-900/10 px-4 py-3 col-span-2 sm:col-span-1">
                                <p className="text-2xl font-syne font-semibold text-emerald-950">4.8/5</p>
                                <p className="text-xs uppercase tracking-[0.2em] text-emerald-900/60">Avg. rating</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 28 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.65, delay: 0.15 }}
                        className="relative z-10 mx-auto w-full max-w-md lg:max-w-none"
                    >
                        <div className="relative overflow-hidden rounded-[2.3rem] border border-white/65 bg-white/65 p-3 shadow-[0_30px_60px_rgba(22,65,46,0.2)]">
                            <div className="absolute left-4 top-4 z-20 inline-flex animate-float items-center gap-2 rounded-full border border-white/70 bg-white/85 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-emerald-900/75">
                                <ShieldCheck className="h-3.5 w-3.5 text-moss" />
                                Dermat Tested
                            </div>

                            <img
                                src={heroImage}
                                alt="GlowVedda Natural Skincare"
                                className="h-[420px] w-full rounded-[1.8rem] object-cover object-center sm:h-[500px]"
                            />

                            <div className="pointer-events-none absolute inset-3 rounded-[1.8rem] bg-gradient-to-t from-emerald-950/25 via-transparent to-transparent"></div>

                            <div className="absolute bottom-6 left-6 right-6 glass-sheen rounded-2xl border border-white/70 px-4 py-3">
                                <div className="flex items-center justify-between gap-4">
                                    <div>
                                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-900/70">Glow ritual kit</p>
                                        <p className="text-lg font-syne font-semibold text-emerald-950">Powered by vitamins + botanicals</p>
                                    </div>
                                    <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-900 px-3 py-1 text-xs font-semibold text-white">
                                        <Star className="h-3.5 w-3.5 fill-current" />
                                        4.8
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;