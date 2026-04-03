import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
    return (
        <footer id="contact" className="pb-10 pt-4 font-manrope">
            <div className="container mx-auto px-4">
                <div className="section-shell overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-900 to-[#154633] px-6 py-10 text-white md:px-10 md:py-12">
                    <div className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-clay/25 blur-3xl" aria-hidden="true"></div>
                    <div className="pointer-events-none absolute right-0 top-16 h-52 w-52 rounded-full bg-white/15 blur-3xl" aria-hidden="true"></div>

                    <div className="relative z-10 grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-12">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-syne font-semibold">GlowVedda</h2>
                            <p className="max-w-xs text-sm leading-relaxed text-white/78">
                                Skincare rituals made for everyday consistency with clean, effective formulas that feel as good as they perform.
                            </p>
                            <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/80">
                                Premium clean beauty
                            </div>
                        </div>

                        <div>
                            <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-white/65">Shop</h3>
                            <ul className="mt-4 space-y-3 text-sm text-white/80">
                                <li><a href="#catalog" className="transition-colors hover:text-white">All Products</a></li>
                                <li><a href="#catalog" className="transition-colors hover:text-white">Best Sellers</a></li>
                                <li><a href="#catalog" className="transition-colors hover:text-white">Bundles</a></li>
                                <li><a href="#catalog" className="transition-colors hover:text-white">Gift Picks</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-white/65">Support</h3>
                            <ul className="mt-4 space-y-3 text-sm text-white/80">
                                <li><a href="#contact" className="transition-colors hover:text-white">Contact</a></li>
                                <li><a href="#" className="transition-colors hover:text-white">Shipping Policy</a></li>
                                <li><a href="#" className="transition-colors hover:text-white">Returns</a></li>
                                <li><a href="#" className="transition-colors hover:text-white">FAQs</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-white/65">Insider Access</h3>
                            <p className="mt-4 text-sm text-white/78">
                                Be first to know about new launches, seasonal offers, and skin-education drops.
                            </p>
                            <div className="mt-4 flex gap-2">
                                <Input
                                    type="email"
                                    placeholder="Email address"
                                    className="h-11 rounded-full border-white/25 bg-white/10 px-4 text-white placeholder:text-white/55 focus-visible:border-white focus-visible:ring-0"
                                />
                                <Button className="h-11 rounded-full bg-white px-5 text-[11px] font-bold uppercase tracking-[0.17em] text-emerald-900 hover:bg-[#fff4ec]">
                                    Join
                                </Button>
                            </div>
                            <div className="mt-5 flex gap-3">
                                <a href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white/80 transition-colors hover:bg-white hover:text-emerald-900"><Instagram size={16} /></a>
                                <a href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white/80 transition-colors hover:bg-white hover:text-emerald-900"><Facebook size={16} /></a>
                                <a href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white/80 transition-colors hover:bg-white hover:text-emerald-900"><Twitter size={16} /></a>
                            </div>
                        </div>
                    </div>

                    <div className="relative z-10 mt-10 border-t border-white/15 pt-6 text-xs text-white/60 md:flex md:items-center md:justify-between">
                        <p>&copy; {new Date().getFullYear()} GlowVedda. All rights reserved.</p>
                        <div className="mt-3 flex gap-4 md:mt-0">
                            <a href="#" className="transition-colors hover:text-white">Privacy Policy</a>
                            <a href="#" className="transition-colors hover:text-white">Terms of Service</a>
                            <a href="#" className="transition-colors hover:text-white">Cookie Preferences</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
