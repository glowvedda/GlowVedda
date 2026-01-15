import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
    return (
        <footer className="bg-olive-green text-white font-poppins pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="space-y-4">
                        <h2 className="text-3xl font-oswald font-medium">GlowVedda</h2>
                        <p className="text-off-white/80 text-sm leading-relaxed max-w-xs">
                            Premium Natural Skincare designed to bring out your inner radiance. Pure, ethical, and effective.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-oswald font-medium mb-6 uppercase tracking-wider">Shop</h3>
                        <ul className="space-y-3 text-sm text-off-white/80">
                            <li><a href="#" className="hover:text-white transition-colors">All Products</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Best Sellers</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">New Arrivals</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Gift Sets</a></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-lg font-oswald font-medium mb-6 uppercase tracking-wider">Support</h3>
                        <ul className="space-y-3 text-sm text-off-white/80">
                            <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Shipping Policy</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Returns & Exchanges</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-lg font-oswald font-medium mb-6 uppercase tracking-wider">Stay Connected</h3>
                        <p className="text-sm text-off-white/80 mb-4">
                            Subscribe to receive updates, access to exclusive deals, and more.
                        </p>
                        <div className="flex gap-2 mb-6">
                            <Input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-transparent border-off-white/30 text-white placeholder:text-off-white/50 focus:ring-0 focus:border-white rounded-none"
                            />
                            <Button className="bg-off-white text-olive-green hover:bg-white rounded-none font-medium">
                                Subscribe
                            </Button>
                        </div>
                        <div className="flex gap-4">
                            <a href="#" className="text-off-white hover:text-white transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="text-off-white hover:text-white transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="text-off-white hover:text-white transition-colors"><Twitter size={20} /></a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-off-white/60">
                    <p>&copy; {new Date().getFullYear()} GlowVedda. All rights reserved.</p>
                    <div className="flex gap-4 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
