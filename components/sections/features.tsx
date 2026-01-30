'use client';

import { motion } from 'framer-motion';
import { Target, Users, Zap, Clock } from 'lucide-react';

const features = [
    {
        icon: <Users className="w-8 h-8" />,
        title: "Expert Trainers",
        description: "Certified professionals dedicated to helping you achieve your personal fitness goals."
    },
    {
        icon: <Zap className="w-8 h-8" />,
        title: "Modern Equipment",
        description: "Train with the latest high-tech machinery and free weights for optimal results."
    },
    {
        icon: <Target className="w-8 h-8" />,
        title: "Personalized Plans",
        description: "Custom workout and nutrition plans tailored to your body type and lifestyle."
    },
    {
        icon: <Clock className="w-8 h-8" />,
        title: "24/7 Access",
        description: "Train on your schedule with round-the-clock access to all our facilities."
    }
];

export default function FeaturesSection() {
    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">WHY CHOOSE ELEVATE?</h2>
                    <p className="text-muted-foreground">We don’t just provide a gym; we provide a lifestyle transformation system designed for your success.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-2xl bg-muted/30 hover:bg-muted/60 transition-colors group text-center md:text-left"
                        >
                            <div className="inline-flex items-center justify-center p-3 bg-white rounded-lg shadow-sm group-hover:bg-accent group-hover:text-accent-foreground transition-colors mb-6 text-primary">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 font-heading uppercase">{feature.title}</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
