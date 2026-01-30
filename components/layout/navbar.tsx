'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Dumbbell } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { UserButton, useUser, SignInButton } from '@clerk/nextjs';

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Classes', href: '/classes' },
    { name: 'Trainers', href: '/trainers' },
    { name: 'Membership', href: '/membership' },
    { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { isSignedIn, user } = useUser();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
                isScrolled
                    ? 'bg-background/80 backdrop-blur-md border-border py-2'
                    : 'bg-transparent border-transparent py-4'
            )}
        >
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center transform group-hover:rotate-6 transition-transform">
                        <Dumbbell className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <span className="text-2xl font-bold tracking-tighter uppercase font-heading">
                        Elevate<span className="text-accent">.</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium hover:text-accent transition-colors uppercase tracking-wide"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* CTA & Auth */}
                <div className="hidden md:flex items-center gap-4">
                    {!isSignedIn ? (
                        <SignInButton mode="modal">
                            <Button variant="ghost" size="sm">
                                Sign In
                            </Button>
                        </SignInButton>
                    ) : (
                        <UserButton afterSignOutUrl="/" />
                    )}
                    <Link href="/membership">
                        <Button variant="accent" size="sm">
                            Join Now
                        </Button>
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-2 text-foreground"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-background border-b border-border overflow-hidden"
                    >
                        <div className="container py-6 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-medium hover:text-accent transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-border">
                                {!isSignedIn ? (
                                    <SignInButton mode="modal">
                                        <Button variant="outline" className="w-full">Sign In</Button>
                                    </SignInButton>
                                ) : (
                                    <div className="flex items-center gap-2">
                                        <UserButton />
                                        <span className="text-sm font-medium">Account</span>
                                    </div>
                                )}
                                <Link href="/membership" onClick={() => setIsOpen(false)}>
                                    <Button variant="accent" className="w-full">
                                        Join Now
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
