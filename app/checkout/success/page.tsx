'use client';

import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useEffect } from 'react';
import confetti from 'canvas-confetti';

export default function SuccessPage() {

    useEffect(() => {
        const duration = 3 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

        const interval: any = setInterval(function () {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
        }, 250);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen bg-background flex items-center justify-center p-4">
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="max-w-md w-full bg-card p-8 rounded-2xl border border-border shadow-lg text-center"
            >
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                    <CheckCircle className="w-10 h-10 text-green-600" />
                </motion.div>

                <h1 className="text-3xl font-heading font-bold mb-2">Payment Successful!</h1>
                <p className="text-muted-foreground mb-8">
                    Welcome to the Elevate family! Your membership is now active. A receipt has been sent to your email.
                </p>

                <div className="bg-muted/30 p-4 rounded-lg mb-8 text-left">
                    <div className="flex justify-between mb-2 text-sm">
                        <span className="text-muted-foreground">Amount Paid</span>
                        <span className="font-bold">₹17,699</span>
                    </div>
                    <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Transaction ID</span>
                        <span className="font-mono text-xs">TXN_123456789</span>
                    </div>
                </div>

                <div className="space-y-3">
                    <Link href="/classes">
                        <Button variant="accent" className="w-full">
                            Go to Classes
                        </Button>
                    </Link>
                    <Link href="/">
                        <Button variant="ghost" className="w-full">
                            Back to Home <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                    </Link>
                </div>
            </motion.div>
        </div>
    );
}
