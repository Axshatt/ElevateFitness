'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Lock, User } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AdminLoginPage() {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const res = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            });

            if (res.ok) {
                router.push('/admin');
            } else {
                setError('Invalid credentials');
            }
        } catch (err) {
            setError('Something went wrong');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-muted/20 flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-md w-full bg-background p-8 rounded-2xl border border-border shadow-lg"
            >
                <div className="text-center mb-8">
                    <h1 className="text-2xl font-heading font-bold mb-2">Admin Login</h1>
                    <p className="text-muted-foreground text-sm">Use common credentials to access demo dashboard.</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-2">Username</label>
                        <div className="relative">
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full p-3 pl-10 rounded-md border border-border focus:outline-none focus:border-accent"
                                placeholder="Enter username"
                            />
                            <User className="absolute left-3 top-3.5 w-5 h-5 text-muted-foreground" />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-2">Password</label>
                        <div className="relative">
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full p-3 pl-10 rounded-md border border-border focus:outline-none focus:border-accent"
                                placeholder="Enter password"
                            />
                            <Lock className="absolute left-3 top-3.5 w-5 h-5 text-muted-foreground" />
                        </div>
                    </div>

                    {error && <p className="text-red-500 text-sm text-center">{error}</p>}

                    <Button type="submit" variant="accent" className="w-full" disabled={loading}>
                        {loading ? 'Logging in...' : 'Login to Dashboard'}
                    </Button>
                </form>
            </motion.div>
        </div>
    );
}
