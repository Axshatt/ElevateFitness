'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { LayoutDashboard, Users, Calendar, Dumbbell, Settings, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const router = useRouter();

    const handleLogout = async () => {
        await fetch('/api/auth/logout', { method: 'POST' });
        router.push('/admin/login');
    };

    return (
        <div className="flex min-h-screen bg-muted/20">
            {/* Sidebar */}
            <aside className="w-64 bg-card border-r border-border hidden md:flex flex-col">
                <div className="p-6 border-b border-border">
                    <Link href="/admin" className="flex items-center gap-2">
                        <span className="text-xl font-bold font-heading uppercase">Elevate<span className="text-accent">.</span> Admin</span>
                    </Link>
                </div>

                <nav className="flex-1 p-4 space-y-2">
                    <Link href="/admin">
                        <Button variant="ghost" className="w-full justify-start">
                            <LayoutDashboard className="w-5 h-5 mr-3" /> Dashboard
                        </Button>
                    </Link>
                    <Link href="/admin/leads">
                        <Button variant="ghost" className="w-full justify-start">
                            <Users className="w-5 h-5 mr-3" /> Leads
                        </Button>
                    </Link>
                    <Link href="/admin/schedule">
                        <Button variant="ghost" className="w-full justify-start">
                            <Calendar className="w-5 h-5 mr-3" /> Schedule
                        </Button>
                    </Link>
                    <Link href="/admin/plans">
                        <Button variant="ghost" className="w-full justify-start">
                            <Dumbbell className="w-5 h-5 mr-3" /> Plans
                        </Button>
                    </Link>
                    <Link href="/admin/settings">
                        <Button variant="ghost" className="w-full justify-start">
                            <Settings className="w-5 h-5 mr-3" /> Settings
                        </Button>
                    </Link>
                </nav>

                <div className="p-4 border-t border-border">
                    <Button
                        variant="outline"
                        className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50"
                        onClick={handleLogout}
                    >
                        <LogOut className="w-5 h-5 mr-3" /> Sign Out
                    </Button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8 overflow-y-auto h-screen">
                {children}
            </main>
        </div>
    );
}
