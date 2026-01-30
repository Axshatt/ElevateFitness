'use client';

import { motion } from 'framer-motion';
import { Instagram, Twitter } from 'lucide-react';
import Link from 'next/link';

const trainers = [
    {
        name: "Vikram Singh",
        role: "Head Coach",
        specialty: "Crossfit & Strength",
        image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2574&auto=format&fit=crop",
        bio: "Ex-Army physical trainer with 15 years of experience in elite strength conditioning."
    },
    {
        name: "Priya Sharma",
        role: "Yoga Instructor",
        specialty: "Hatha & Power Yoga",
        image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=2670&auto=format&fit=crop",
        bio: "Certified in Rishikesh, bringing traditional mindfulness to modern fitness routines."
    },
    {
        name: "Rahul Verma",
        role: "HIIT Specialist",
        specialty: "Cardio & Endurance",
        image: "https://images.unsplash.com/photo-1611672585731-fa10603fb9c2?q=80&w=2574&auto=format&fit=crop",
        bio: "Former state-level sprinter. His high-energy sessions burn max calories in min time."
    },
    {
        name: "Anjali Gupta",
        role: "Nutritionist",
        specialty: "Diet & Recovery",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2569&auto=format&fit=crop",
        bio: "Specializes in Indian diet adaptation for fitness goals without sacrificing flavor."
    },
];

export default function TrainersPage() {
    return (
        <div className="py-24 bg-background">
            <div className="container mx-auto">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">MEET THE TEAM</h1>
                    <p className="text-muted-foreground">
                        Our expert coaches are here to guide, motivate, and support you on every step
                        of your fitness journey.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {trainers.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <div className="relative aspect-[3/4] mb-6 overflow-hidden rounded-xl bg-muted">
                                <img
                                    src={t.image}
                                    alt={t.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                    <div className="flex gap-4">
                                        <Link href="#" className="p-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-accent hover:text-accent-foreground transition-colors">
                                            <Instagram className="w-5 h-5" />
                                        </Link>
                                        <Link href="#" className="p-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-accent hover:text-accent-foreground transition-colors">
                                            <Twitter className="w-5 h-5" />
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <h3 className="text-xl font-bold font-heading uppercase">{t.name}</h3>
                            <p className="text-accent text-sm font-medium mb-2">{t.role}</p>
                            <p className="text-muted-foreground text-sm">{t.bio}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
