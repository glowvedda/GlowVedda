import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, User, ShoppingBag, Menu, X, Leaf } from 'lucide-react';
import { Input } from '@/components/ui/input';

const Header = ({ onSearch }) => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isElevated, setIsElevated] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsElevated(window.scrollY > 24);
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { label: 'Home', href: '/' },
        { label: 'Collection', href: '#catalog' },
        { label: 'Benefits', href: '#benefits' },
        { label: 'Contact', href: '#contact' },
    ];

    const closeSearch = () => {
        setIsSearchOpen(false);
        onSearch('');
    };

    return (
        <header className="sticky top-0 z-50 w-full font-manrope">
            <div className="relative overflow-hidden border-b border-emerald-950/5 bg-gradient-to-r from-moss to-emerald-900 py-2 text-center text-[11px] font-semibold uppercase tracking-[0.24em] text-white">
                <span className="relative z-10">Free shipping over ₹499 • Summer glow event live now</span>
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_50%,rgba(255,255,255,0.18),transparent_36%)]"></div>
            </div>

            <motion.div
                animate={{
                    borderColor: isElevated ? 'rgba(22, 63, 45, 0.14)' : 'rgba(22, 63, 45, 0.08)',
                    backgroundColor: isElevated ? 'rgba(255, 252, 245, 0.86)' : 'rgba(255, 252, 245, 0.68)',
                    boxShadow: isElevated ? '0 16px 40px rgba(17, 52, 37, 0.15)' : '0 8px 24px rgba(17, 52, 37, 0.08)',
                }}
                transition={{ duration: 0.3 }}
                className="border-b backdrop-blur-xl"
            >
                <div className="container mx-auto px-4 py-4">
                    <div className="relative flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3 lg:gap-10">
                            <button
                                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-emerald-900/15 text-emerald-900 md:hidden"
                                onClick={() => setIsMenuOpen(prev => !prev)}
                                aria-label="Toggle navigation"
                            >
                                {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
                            </button>

                            <nav className={`hidden items-center gap-7 md:flex ${isSearchOpen ? 'opacity-30' : ''}`}>
                                {navLinks.map(link => (
                                    <a
                                        key={link.label}
                                        href={link.href}
                                        className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-900/80 transition-colors hover:text-emerald-700"
                                    >
                                        {link.label}
                                    </a>
                                ))}
                            </nav>
                        </div>

                        <button
                            className="group flex flex-col items-center"
                            onClick={() => window.location.reload()}
                            aria-label="Reload homepage"
                        >
                            <div className="flex items-center gap-2 text-sm uppercase tracking-[0.26em] text-emerald-900/80">
                                <Leaf className="h-3.5 w-3.5 text-clay transition-transform duration-300 group-hover:-rotate-6" />
                                Clean Beauty
                            </div>
                            <h1 className="font-syne text-2xl font-semibold tracking-tight text-emerald-950 md:text-3xl">GlowVedda</h1>
                        </button>

                        <div className="flex items-center gap-2 md:gap-3">
                            <button
                                onClick={() => setIsSearchOpen(prev => !prev)}
                                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-emerald-900/15 bg-white/70 text-emerald-900 transition-all hover:border-emerald-900/30 hover:bg-white"
                                aria-label="Toggle search"
                            >
                                {isSearchOpen ? <X className="h-4 w-4" /> : <Search className="h-4 w-4" />}
                            </button>
                            <button
                                className="hidden h-10 w-10 items-center justify-center rounded-full border border-emerald-900/15 bg-white/70 text-emerald-900 transition-all hover:border-emerald-900/30 hover:bg-white md:inline-flex"
                                aria-label="Account"
                            >
                                <User className="h-4 w-4" />
                            </button>
                            <button
                                className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-emerald-900/15 bg-white/70 text-emerald-900 transition-all hover:border-emerald-900/30 hover:bg-white"
                                aria-label="Cart"
                            >
                                <ShoppingBag className="h-4 w-4" />
                                <span className="absolute -right-0.5 -top-0.5 inline-flex h-5 min-w-[18px] items-center justify-center rounded-full bg-secondary px-1 text-[10px] font-bold text-white">
                                    0
                                </span>
                            </button>
                        </div>
                    </div>

                    <AnimatePresence>
                        {isSearchOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: -16 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -12 }}
                                transition={{ duration: 0.22 }}
                                className="pt-4"
                            >
                                <div className="glass-sheen mx-auto flex max-w-2xl items-center gap-3 rounded-2xl border border-emerald-900/10 px-4 py-3">
                                    <Search className="h-4 w-4 text-emerald-900/60" />
                                    <Input
                                        type="text"
                                        placeholder="Search by product name, concern, or benefit"
                                        className="h-10 border-0 bg-transparent px-0 text-sm text-emerald-950 placeholder:text-emerald-900/50 focus-visible:ring-0"
                                        autoFocus
                                        onChange={e => onSearch(e.target.value)}
                                    />
                                    <button
                                        onClick={closeSearch}
                                        className="rounded-full border border-emerald-900/15 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-emerald-900/70 transition-colors hover:text-emerald-900"
                                    >
                                        Clear
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <AnimatePresence>
                        {isMenuOpen && (
                            <motion.nav
                                initial={{ opacity: 0, y: -8 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -8 }}
                                className="mt-4 grid gap-2 rounded-2xl border border-emerald-900/10 bg-white/85 p-3 text-sm md:hidden"
                            >
                                {navLinks.map(link => (
                                    <a
                                        key={link.label}
                                        href={link.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className="rounded-xl px-3 py-2 font-semibold uppercase tracking-[0.16em] text-emerald-900/80 transition-colors hover:bg-emerald-950/5 hover:text-emerald-700"
                                    >
                                        {link.label}
                                    </a>
                                ))}
                            </motion.nav>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>
        </header>
    );
};

export default Header;
