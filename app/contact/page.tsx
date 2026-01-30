'use client';

import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactPage() {
    return (
        <div className="py-24 bg-background min-h-screen">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                    {/* Contact Details */}
                    <div>
                        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">GET IN TOUCH</h1>
                        <p className="text-xl text-muted-foreground mb-12">
                            Ready to start your journey? Visit us, give us a call, or drop us a message.
                        </p>

                        <div className="space-y-8 mb-12">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-accent/10 rounded-lg text-accent">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold font-heading text-lg mb-1">Visit Us</h3>
                                    <p className="text-muted-foreground">2nd Floor, City Mall, Park Road,<br />Civil Lines, Gorakhpur, UP 273001</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-accent/10 rounded-lg text-accent">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold font-heading text-lg mb-1">Call Us</h3>
                                    <p className="text-muted-foreground">+91 98765 43210</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-accent/10 rounded-lg text-accent">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold font-heading text-lg mb-1">Email</h3>
                                    <p className="text-muted-foreground">contact@elevatefitness.in</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-accent/10 rounded-lg text-accent">
                                    <Clock className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold font-heading text-lg mb-1">Working Hours</h3>
                                    <p className="text-muted-foreground">Mon - Fri: 5:00 AM - 11:00 PM</p>
                                    <p className="text-muted-foreground">Sat - Sun: 7:00 AM - 9:00 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="bg-muted/30 p-8 rounded-2xl border border-border">
                        <h3 className="text-2xl font-bold font-heading mb-6">CLAIM YOUR FREE PASS</h3>
                        <form className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="first-name" className="text-sm font-medium">First name</label>
                                    <input id="first-name" className="w-full p-3 rounded-md border border-border bg-background focus:outline-none focus:border-accent" placeholder="Jane" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="last-name" className="text-sm font-medium">Last name</label>
                                    <input id="last-name" className="w-full p-3 rounded-md border border-border bg-background focus:outline-none focus:border-accent" placeholder="Doe" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium">Email</label>
                                <input id="email" type="email" className="w-full p-3 rounded-md border border-border bg-background focus:outline-none focus:border-accent" placeholder="jane@example.com" />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="phone" className="text-sm font-medium">Phone</label>
                                <input id="phone" type="tel" className="w-full p-3 rounded-md border border-border bg-background focus:outline-none focus:border-accent" placeholder="(555) 000-0000" />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="goal" className="text-sm font-medium">Primary Goal</label>
                                <select id="goal" className="w-full p-3 rounded-md border border-border bg-background focus:outline-none focus:border-accent">
                                    <option>Weight Loss</option>
                                    <option>Muscle Gain</option>
                                    <option>Endurance</option>
                                    <option>General Fitness</option>
                                </select>
                            </div>

                            <Button size="lg" className="w-full mt-4 bg-accent text-accent-foreground hover:bg-accent/90">
                                Get Free Pass
                            </Button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
}
