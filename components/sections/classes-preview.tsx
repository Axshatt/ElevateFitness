'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const classes = [
    {
        name: "Strength & Conditioning",
        image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=2670&auto=format&fit=crop",
        desc: "Build muscle and endurance with comprehensive compound movements."
    },
    {
        name: "HIIT Burn-out",
        image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2670&auto=format&fit=crop",
        desc: "High intensity interval training to maximize calorie burn in minimum time."
    },
    {
        name: "Power Yoga",
        image: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?q=80&w=2670&auto=format&fit=crop",
        desc: "Restore flexibility and balance while building core strength."
    }
];

export default function ClassesPreview() {
    return (
        <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <div className="container mx-auto relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-xl">
                        <h2 className="text-accent font-bold uppercase tracking-wider text-sm mb-2">Our Programs</h2>
                        <h2 className="text-3xl md:text-5xl font-heading font-bold">FIND YOUR RHYTHM</h2>
                    </div>
                    <Link href="/classes">
                        <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                            View All Classes
                        </Button>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {classes.map((cls, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: idx * 0.2 }}
                            viewport={{ once: true }}
                            className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer"
                        >
                            <img
                                src={cls.image}
                                alt={cls.name}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex flex-col justify-end p-8 translate-y-4 group-hover:translate-y-0 transition-transform">
                                <h3 className="text-2xl font-bold font-heading text-white mb-2">{cls.name}</h3>
                                <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {cls.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
