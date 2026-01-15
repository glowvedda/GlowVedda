import React from 'react';
import { motion } from 'framer-motion';
import ProductCard from '@/components/ProductCard';

const ProductShowcase = ({ products }) => {
    // If no products found
    if (!products || products.length === 0) {
        return (
            <section className="py-20 bg-white font-poppins text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl font-oswald text-gray-500">No products found matching your search.</h2>
                </div>
            </section>
        );
    }

    return (
        <section id="catalog" className="py-20 bg-white font-poppins">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-olive-green font-semibold text-xs tracking-widest uppercase">
                        Our Collection
                    </span>
                    <h2 className="text-4xl md:text-5xl font-oswald font-medium text-gray-900 mt-4 mb-4">
                        Premium Skincare Products
                    </h2>
                    <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto font-light">
                        Pure ingredients. Powerful results.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
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