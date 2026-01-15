import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, User, ShoppingBag, Menu, X } from 'lucide-react';
import { Input } from '@/components/ui/input';

const Header = ({ onSearch }) => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm font-poppins">
            {/* Announcement Bar */}
            <div className="bg-olive-green text-white text-center py-2 text-xs font-medium tracking-wide">
                🎉 WINTER SALE IS LIVE! 🎉
            </div>

            <div className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center relative">
                    {/* Mobile Menu Button */}
                    <button className="md:hidden text-gray-700">
                        <Menu size={24} />
                    </button>

                    {/* Navigation Links (Left) */}
                    <nav className={`hidden md:flex gap-8 items-center flex-1 ${isSearchOpen ? 'invisible' : ''}`}>
                        <a href="/" className="text-sm font-medium text-gray-700 hover:text-olive-green transition-colors uppercase tracking-wider">Home</a>
                        <a href="#catalog" className="text-sm font-medium text-gray-700 hover:text-olive-green transition-colors uppercase tracking-wider">Catalog</a>
                        <a href="#" className="text-sm font-medium text-gray-700 hover:text-olive-green transition-colors uppercase tracking-wider">Contact</a>
                    </nav>

                    {/* Logo (Center) */}
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`text-center flex-1 ${isSearchOpen ? 'hidden md:block' : ''}`}
                    >
                        <h1 className="text-3xl font-oswald font-medium text-gray-900 tracking-tight cursor-pointer" onClick={() => window.location.reload()}>
                            GlowVedda
                        </h1>
                    </motion.div>

                    {/* Icons (Right) */}
                    <div className="flex gap-6 items-center flex-1 justify-end">
                        <AnimatePresence>
                            {isSearchOpen ? (
                                <motion.div
                                    initial={{ width: 0, opacity: 0 }}
                                    animate={{ width: '100%', opacity: 1 }}
                                    exit={{ width: 0, opacity: 0 }}
                                    className="absolute inset-0 z-20 bg-white flex items-center gap-4 px-4 md:static md:w-auto md:bg-transparent"
                                >
                                    <Input
                                        type="text"
                                        placeholder="Search for products..."
                                        className="w-full border-b border-gray-300 rounded-none px-0 focus-visible:ring-0 focus-visible:border-olive-green"
                                        autoFocus
                                        onChange={(e) => onSearch(e.target.value)}
                                    />
                                    <button onClick={() => { setIsSearchOpen(false); onSearch(''); }}>
                                        <X className="w-5 h-5 text-gray-500 hover:text-red-500" />
                                    </button>
                                </motion.div>
                            ) : (
                                <button onClick={() => setIsSearchOpen(true)}>
                                    <Search className="w-5 h-5 text-gray-700 cursor-pointer hover:text-olive-green transition-colors" />
                                </button>
                            )}
                        </AnimatePresence>

                        {!isSearchOpen && (
                            <>
                                <User className="w-5 h-5 text-gray-700 cursor-pointer hover:text-olive-green transition-colors hidden md:block" />
                                <div className="relative cursor-pointer group">
                                    <ShoppingBag className="w-5 h-5 text-gray-700 group-hover:text-olive-green transition-colors" />
                                    <span className="absolute -top-2 -right-2 bg-olive-green text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">0</span>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
