'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
    return (
        <section className="relative h-[90vh] min-h-[600px] flex items-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent z-10" />
                <img
                    src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2670&auto=format&fit=crop"
                    alt="Athlete working out"
                    className="w-full h-full object-cover object-center"
                />
            </div>

            {/* Content */}
            <div className="container relative z-20 pt-20">
                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h2 className="text-accent font-bold tracking-wider uppercase mb-4 text-sm md:text-base">
                            Welcome to Elevate Fitness
                        </h2>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white leading-tight mb-6">
                            YOUR BODY <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                                YOUR RULES
                            </span>
                        </h1>
                        <p className="text-gray-300 text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
                            Experience a premium workout environment designed to push your limits.
                            State-of-the-art equipment, expert trainers, and a community that inspires.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/membership">
                                <Button variant="accent" size="lg" className="w-full sm:w-auto h-14 text-lg">
                                    Start Free Trial <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                            </Link>
                            <Link href="/classes">
                                <Button variant="outline" size="lg" className="w-full sm:w-auto h-14 text-lg border-white text-white hover:bg-white hover:text-black">
                                    View Classes
                                </Button>
                            </Link>
                        </div>

                        {/* Stats */}
                        <div className="mt-16 grid grid-cols-3 gap-8 border-t border-white/20 pt-8 max-w-lg">
                            <div>
                                <p className="text-3xl font-bold text-white font-heading">24/7</p>
                                <p className="text-gray-400 text-sm">Access</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-white font-heading">50+</p>
                                <p className="text-gray-400 text-sm">Trainers</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-white font-heading">100+</p>
                                <p className="text-gray-400 text-sm">Classes</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
