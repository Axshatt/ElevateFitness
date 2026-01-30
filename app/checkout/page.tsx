'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ShieldCheck, CreditCard, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CheckoutPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const handlePayment = () => {
        setLoading(true);
        // Simulate API/Payment Gateway delay
        setTimeout(() => {
            router.push('/checkout/success');
        }, 2000);
    };

    return (
        <div className="min-h-screen bg-muted/20 py-24">
            <div className="container mx-auto max-w-4xl">
                <h1 className="text-3xl font-heading font-bold mb-8 text-center">SECURE CHECKOUT</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Order Summary */}
                    <div className="bg-background p-8 rounded-2xl border border-border shadow-sm h-fit">
                        <h2 className="text-xl font-bold mb-6 font-heading">Order Summary</h2>
                        <div className="flex justify-between mb-4 pb-4 border-b border-border">
                            <div>
                                <p className="font-bold">12-Month Premium Plan</p>
                                <p className="text-sm text-muted-foreground">Billed annually</p>
                            </div>
                            <p className="font-bold">₹14,999</p>
                        </div>
                        <div className="flex justify-between mb-2">
                            <p className="text-muted-foreground">Subtotal</p>
                            <p>₹14,999</p>
                        </div>
                        <div className="flex justify-between mb-4">
                            <p className="text-muted-foreground">Tax (18% GST)</p>
                            <p>₹2,700</p>
                        </div>
                        <div className="flex justify-between text-xl font-bold border-t border-border pt-4">
                            <p>Total</p>
                            <p className="text-accent">₹17,699</p>
                        </div>
                    </div>

                    {/* Payment Details */}
                    <div className="bg-background p-8 rounded-2xl border border-border shadow-sm">
                        <h2 className="text-xl font-bold mb-6 font-heading">Payment Details</h2>

                        <div className="bg-blue-50 border border-blue-100 p-4 rounded-lg mb-6 flex items-start gap-3">
                            <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                            <p className="text-sm text-blue-700">
                                This is a secure 256-bit SSL encrypted payment. Your data is safe.
                            </p>
                        </div>

                        <form className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium mb-2">Cardholder Name</label>
                                <input type="text" placeholder="John Doe" className="w-full p-3 rounded-md border border-border focus:outline-none focus:border-accent" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Card Number</label>
                                <div className="relative">
                                    <input type="text" placeholder="0000 0000 0000 0000" className="w-full p-3 pl-10 rounded-md border border-border focus:outline-none focus:border-accent" />
                                    <CreditCard className="absolute left-3 top-3.5 w-5 h-5 text-muted-foreground" />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium mb-2">Expiry Date</label>
                                    <input type="text" placeholder="MM/YY" className="w-full p-3 rounded-md border border-border focus:outline-none focus:border-accent" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">CVV</label>
                                    <div className="relative">
                                        <input type="text" placeholder="123" className="w-full p-3 pl-10 rounded-md border border-border focus:outline-none focus:border-accent" />
                                        <Lock className="absolute left-3 top-3.5 w-5 h-5 text-muted-foreground" />
                                    </div>
                                </div>
                            </div>

                            <Button
                                type="button"
                                variant="accent"
                                size="lg"
                                className="w-full h-12 text-lg relative"
                                onClick={handlePayment}
                                disabled={loading}
                            >
                                {loading ? (
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                                        className="w-6 h-6 border-2 border-primary-foreground border-t-transparent rounded-full"
                                    />
                                ) : (
                                    "Pay ₹17,699"
                                )}
                            </Button>

                            <div className="text-center text-xs text-muted-foreground">
                                Powered by <span className="font-bold">Razorpay</span> (Demo Mode)
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
