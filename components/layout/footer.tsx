import Link from 'next/link';
import { Dumbbell, Instagram, Twitter, Facebook, Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
    return (
        <footer className="bg-primary text-primary-foreground pt-16 pb-8 border-t border-white/10">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                {/* Brand */}
                <div className="space-y-4">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-accent rounded-md flex items-center justify-center">
                            <Dumbbell className="w-5 h-5 text-accent-foreground" />
                        </div>
                        <span className="text-xl font-bold uppercase font-heading">Elevate.</span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                        Premium fitness facilities designed to help you crush your goals.
                        Join a community of achievers.
                    </p>
                    <div className="flex gap-4">
                        <Link href="#" className="p-2 bg-white/5 rounded-full hover:bg-accent hover:text-accent-foreground transition-colors">
                            <Instagram className="w-4 h-4" />
                        </Link>
                        <Link href="#" className="p-2 bg-white/5 rounded-full hover:bg-accent hover:text-accent-foreground transition-colors">
                            <Twitter className="w-4 h-4" />
                        </Link>
                        <Link href="#" className="p-2 bg-white/5 rounded-full hover:bg-accent hover:text-accent-foreground transition-colors">
                            <Facebook className="w-4 h-4" />
                        </Link>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="font-heading font-bold text-lg mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><Link href="/classes" className="text-muted-foreground hover:text-accent transition-colors text-sm">Classes</Link></li>
                        <li><Link href="/trainers" className="text-muted-foreground hover:text-accent transition-colors text-sm">Trainers</Link></li>
                        <li><Link href="/membership" className="text-muted-foreground hover:text-accent transition-colors text-sm">Membership</Link></li>
                        <li><Link href="/blog" className="text-muted-foreground hover:text-accent transition-colors text-sm">Fitness Blog</Link></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="font-heading font-bold text-lg mb-4">Contact Us</h3>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3 text-sm text-muted-foreground">
                            <MapPin className="w-5 h-5 text-accent shrink-0" />
                            <span>2nd Floor, City Mall, Park Road,<br />Civil Lines, Gorakhpur, UP 273001</span>
                        </li>
                        <li className="flex items-center gap-3 text-sm text-muted-foreground">
                            <Phone className="w-5 h-5 text-accent shrink-0" />
                            <span>+91 98765 43210</span>
                        </li>
                        <li className="flex items-center gap-3 text-sm text-muted-foreground">
                            <Mail className="w-5 h-5 text-accent shrink-0" />
                            <span>contact@elevatefitness.in</span>
                        </li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h3 className="font-heading font-bold text-lg mb-4">Newsletter</h3>
                    <p className="text-muted-foreground text-sm mb-4">Subscribe for tips, news, and exclusive offers.</p>
                    <div className="flex gap-2">
                        <input
                            type="email"
                            placeholder="Your email"
                            className="bg-white/5 border border-white/10 rounded-md px-3 py-2 text-sm w-full focus:outline-none focus:border-accent text-white"
                        />
                        <Button variant="accent" size="icon" className="shrink-0">
                            <Mail className="w-4 h-4" />
                        </Button>
                    </div>
                </div>
            </div>

            <div className="container mx-auto pt-8 border-t border-white/10 text-center text-muted-foreground text-xs">
                <p>&copy; {new Date().getFullYear()} Elevate Fitness. All rights reserved.</p>
            </div>
        </footer>
    );
}
