'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CTASection() {
    return (
        <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1549476464-37392f717541?q=80&w=2670&auto=format&fit=crop"
                    alt="Gym interior"
                    className="w-full h-full object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-primary/50" />
            </div>

            <div className="container mx-auto text-center relative z-10">
                <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">READY TO ELEVATE?</h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
                    Join today and get 50% off your first month. No commitment, cancel anytime.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/membership">
                        <Button variant="accent" size="lg" className="h-14 text-lg w-full sm:w-auto">
                            Get Started Now <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </Link>
                    <Link href="/contact">
                        <Button variant="outline" size="lg" className="h-14 text-lg w-full sm:w-auto bg-transparent text-white border-white hover:bg-white hover:text-black">
                            Book a Tour
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
