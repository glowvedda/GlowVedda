import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import HeroSection from '@/components/HeroSection';
import ProductShowcase from '@/components/ProductShowcase';
import BenefitsSection from '@/components/BenefitsSection';
import CallToAction from '@/components/CallToAction';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { products } from '@/data/products';

function App() {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.benefits.some(benefit => benefit.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    return (
        <>
            <Helmet>
                <title>GlowVedda - Premium Natural Skincare Products</title>
                <meta name="description" content="Discover GlowVedda's range of premium skincare products including Vitamin C Serum, Salicylic Acid Serum, Sunscreen, and Face Wash. Extra discount on all products. Limited time offer!" />
                <meta name="keywords" content="skincare, natural skincare, vitamin c serum, salicylic acid, sunscreen, face wash, glowvedda, beauty products" />
                <link rel="canonical" href="https://glowvedda.com/" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://glowvedda.com/" />
                <meta property="og:title" content="GlowVedda - Premium Natural Skincare Products" />
                <meta property="og:description" content="Discover GlowVedda's range of premium skincare products including Vitamin C Serum, Salicylic Acid Serum, Sunscreen, and Face Wash." />
                <meta property="og:image" content="https://glowvedda.com/android-chrome-512x512.png" />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://glowvedda.com/" />
                <meta property="twitter:title" content="GlowVedda - Premium Natural Skincare Products" />
                <meta property="twitter:description" content="Discover GlowVedda's range of premium skincare products including Vitamin C Serum, Salicylic Acid Serum, Sunscreen, and Face Wash." />
                <meta property="twitter:image" content="https://glowvedda.com/android-chrome-512x512.png" />
            </Helmet>

            <div className="relative min-h-screen overflow-x-clip">
                <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-clay/20 blur-3xl" aria-hidden="true"></div>
                <div className="pointer-events-none absolute right-0 top-[22rem] h-96 w-96 rounded-full bg-moss/20 blur-3xl" aria-hidden="true"></div>

                <Header onSearch={setSearchQuery} />

                <main className="relative z-10 pb-16 pt-8 md:pt-12">
                    {searchQuery ? (
                        <section className="container mx-auto px-4 pt-28 md:pt-32">
                            <div className="section-shell atmosphere-grid p-8 md:p-14">
                                <div className="mx-auto max-w-3xl text-center">
                                    <span className="pill-chip">Search Mode</span>
                                    <h2 className="mt-5 text-3xl font-syne text-emerald-950 md:text-5xl">
                                        Results for
                                        <span className="text-gradient"> "{searchQuery}"</span>
                                    </h2>
                                    <p className="mt-4 text-sm text-emerald-900/75 md:text-base">
                                        Discover the right formula for your routine and tap any product to shop instantly.
                                    </p>
                                </div>
                            </div>
                            <ProductShowcase products={filteredProducts} />
                        </section>
                    ) : (
                        <>
                            <HeroSection />
                            <ProductShowcase products={products} />
                            <BenefitsSection />
                            <CallToAction />
                        </>
                    )}
                </main>

                <Footer />
                <Toaster />
            </div>
        </>
    );
}

export default App;