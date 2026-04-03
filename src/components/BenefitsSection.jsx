import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Shield, Heart, Leaf } from 'lucide-react';

const benefits = [
    {
        icon: Sparkles,
        title: 'Visible Results',
        description: 'See noticeable improvements in your skin within 2-4 weeks of regular use.',
    },
    {
        icon: Shield,
        title: 'Dermatologist Tested',
        description: 'Every formula is clinically tested and approved by certified dermatology experts.',
    },
    {
        icon: Heart,
        title: 'Gentle and Safe',
        description: 'Suitable for all skin types with balanced actives and no harsh additives.',
    },
    {
        icon: Leaf,
        title: 'Botanical Powered',
        description: 'Actives are supported by naturally sourced ingredients selected for daily rituals.',
    },
];

const BenefitsSection = () => {
    return (
        <section id="benefits" className="pb-16 pt-12 font-manrope md:pt-20">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="section-shell atmosphere-grid mb-10 px-6 py-10 text-center md:px-10"
                >
                    <div className="absolute -left-14 top-10 h-36 w-36 rounded-full bg-clay/20 blur-2xl" aria-hidden="true"></div>
                    <div className="relative z-10">
                        <span className="pill-chip">Why skin chooses us</span>
                        <h2 className="mt-5 text-4xl font-syne font-semibold text-emerald-950 md:text-6xl">
                            The GlowVedda
                            <span className="text-gradient"> promise</span>
                        </h2>
                        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-emerald-900/72 md:text-base">
                            Science-guided formulas meet mindful ingredients so your routine feels gentle, effective, and easy to stay consistent with.
                        </p>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-4">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.45, delay: index * 0.08 }}
                            whileHover={{ y: -7 }}
                            className="group section-shell px-5 py-6"
                        >
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-900 text-white shadow-lg transition-transform duration-300 group-hover:scale-105">
                                <benefit.icon className="h-6 w-6" />
                            </div>
                            <h3 className="mt-4 text-xl font-syne font-semibold text-emerald-950">{benefit.title}</h3>
                            <p className="mt-3 text-sm leading-relaxed text-emerald-900/72">{benefit.description}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.52, delay: 0.15 }}
                    className="section-shell mt-10 overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-900 to-moss px-6 py-10 text-white md:px-10 md:py-12"
                >
                    <div className="absolute -right-10 top-2 h-36 w-36 rounded-full bg-white/10 blur-2xl" aria-hidden="true"></div>
                    <div className="relative z-10 grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/70">Community proof</p>
                            <h3 className="mt-3 text-3xl font-syne font-semibold leading-tight md:text-5xl">
                                Trusted by thousands building better skin rituals
                            </h3>
                            <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/78 md:text-base">
                                Customers come for visible glow and stay for comfort-first textures that fit real schedules.
                            </p>
                        </div>

                        <div className="grid grid-cols-3 gap-3 md:gap-4">
                            <div className="rounded-2xl border border-white/20 bg-white/10 p-4 text-center backdrop-blur-sm">
                                <div className="text-3xl font-syne font-semibold">4.8/5</div>
                                <div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/70">Average rating</div>
                            </div>
                            <div className="rounded-2xl border border-white/20 bg-white/10 p-4 text-center backdrop-blur-sm">
                                <div className="text-3xl font-syne font-semibold">10K+</div>
                                <div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/70">Happy users</div>
                            </div>
                            <div className="rounded-2xl border border-white/20 bg-white/10 p-4 text-center backdrop-blur-sm">
                                <div className="text-3xl font-syne font-semibold">98%</div>
                                <div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/70">Satisfaction</div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default BenefitsSection;