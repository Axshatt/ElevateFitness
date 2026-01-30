'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
    {
        name: "Amit Patel",
        role: "Member since 2023",
        content: "Bhai, gym ekdum top class hai! The trainers actually care about your progress and facility clean rehta hai hamesha.",
        rating: 5
    },
    {
        name: "Rohan Das",
        role: "Pro Athlete",
        content: "Equipment selection top-tier hai. Maza aa gaya workout karke! Best gym in Gorakhpur for serious training.",
        rating: 5
    },
    {
        name: "Sneha Reddy",
        role: "Yoga Enthusiast",
        content: "Classes incredible hain! High energy and great music. Instructors aapko push karte hain but safely.",
        rating: 5
    }
];

export default function Testimonials() {
    return (
        <section className="py-24 bg-muted/20">
            <div className="container mx-auto">
                <h2 className="text-center text-3xl md:text-4xl font-heading font-bold mb-16">SUCCESS STORIES</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-background p-8 rounded-2xl shadow-sm border border-border"
                        >
                            <div className="flex gap-1 mb-4 text-accent">
                                {[...Array(t.rating)].map((_, r) => (
                                    <Star key={r} className="w-4 h-4 fill-current" />
                                ))}
                            </div>
                            <p className="text-foreground italic mb-6 leading-relaxed">"{t.content}"</p>
                            <div>
                                <p className="font-bold font-heading uppercase">{t.name}</p>
                                <p className="text-xs text-muted-foreground">{t.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
