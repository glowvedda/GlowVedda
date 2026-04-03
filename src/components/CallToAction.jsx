import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, Gift } from 'lucide-react';

const CallToAction = () => {
    const handleShopNow = () => {
        if (window.fbq) {
            window.fbq('track', 'Purchase');
        }

        window.open('https://www.amazon.in/GLOW-VEDDA-Brightening-Anti-Dark-Combination/dp/B0G7XVYK34/', '_blank');
    };

    return (
        <section className="pb-16 pt-12 font-manrope md:pt-16">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55 }}
                    className="section-shell relative overflow-hidden bg-gradient-to-br from-[#163f2d] via-[#1e5f44] to-[#267754] px-6 py-10 text-white md:px-12 md:py-14"
                >
                    <div className="pointer-events-none absolute -left-16 top-0 h-64 w-64 rounded-full bg-clay/30 blur-3xl" aria-hidden="true"></div>
                    <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-white/15 blur-3xl" aria-hidden="true"></div>

                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.45, type: 'spring' }}
                        className="relative z-10 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] backdrop-blur-sm"
                    >
                        <Gift className="h-3.5 w-3.5 text-white" />
                        Limited-time glow offer
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative z-10 mx-auto mt-6 max-w-4xl text-4xl font-syne font-semibold leading-[1.02] md:text-6xl"
                    >
                        Build your clean-skin ritual today
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="relative z-10 mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-white/84 md:text-lg"
                    >
                        Start with formulas designed for daily use, long-term skin health, and a finish that looks naturally radiant.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="relative z-10 mt-8 flex flex-wrap justify-center gap-3"
                    >
                        <Button
                            onClick={handleShopNow}
                            size="lg"
                            className="h-12 rounded-full bg-white px-8 text-xs font-bold uppercase tracking-[0.2em] text-emerald-900 shadow-lg transition-all hover:-translate-y-0.5 hover:bg-[#fff4ec]"
                        >
                            Shop now
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                        <Button
                            onClick={handleShopNow}
                            size="lg"
                            variant="outline"
                            className="h-12 rounded-full border-white/55 bg-transparent px-8 text-xs font-bold uppercase tracking-[0.2em] text-white hover:border-white hover:bg-white hover:text-emerald-900"
                        >
                            View full range
                        </Button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="relative z-10 mt-9 grid gap-2 rounded-2xl border border-white/20 bg-white/8 p-4 text-left text-white/80 backdrop-blur-sm sm:grid-cols-3"
                    >
                        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em]">
                            <CheckCircle2 className="h-4 w-4 text-[#ffd9bd]" />
                            Free shipping over ₹499
                        </div>
                        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em]">
                            <CheckCircle2 className="h-4 w-4 text-[#ffd9bd]" />
                            Clinically tested ingredients
                        </div>
                        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em]">
                            <CheckCircle2 className="h-4 w-4 text-[#ffd9bd]" />
                            Secure Amazon checkout
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default CallToAction;
