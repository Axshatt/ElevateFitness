'use client';

import { DollarSign, Users, Activity, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function AdminDashboard() {
    return (
        <div>
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-bold font-heading">Dashboard</h1>
                <Button variant="accent">Download Report</Button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {[
                    { label: "Total Revenue", value: "$45,231.89", change: "+20.1% from last month", icon: DollarSign },
                    { label: "Active Members", value: "+2350", change: "+180.1% from last month", icon: Users },
                    { label: "Sales", value: "+12,234", change: "+19.2% from last month", icon: Activity },
                    { label: "Active Now", value: "+573", change: "+201 since last hour", icon: Activity },
                ].map((stat, i) => (
                    <div key={i} className="p-6 bg-card rounded-xl border border-border">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-sm font-medium text-muted-foreground">{stat.label}</span>
                            <stat.icon className="w-4 h-4 text-muted-foreground" />
                        </div>
                        <div className="text-2xl font-bold mb-1">{stat.value}</div>
                        <p className="text-xs text-muted-foreground">{stat.change}</p>
                    </div>
                ))}
            </div>

            {/* Recent Activity / Leads */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="p-6 bg-card rounded-xl border border-border">
                    <h3 className="font-bold font-heading text-lg mb-4">Recent Leads</h3>
                    <div className="space-y-4">
                        {[1, 2, 3, 4, 5].map((_, i) => (
                            <div key={i} className="flex items-center justify-between p-3 hover:bg-muted/50 rounded-lg transition-colors">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center text-accent font-bold">JD</div>
                                    <div>
                                        <p className="font-bold text-sm">John Doe</p>
                                        <p className="text-xs text-muted-foreground">john@example.com</p>
                                    </div>
                                </div>
                                <span className="text-xs font-medium bg-green-100 text-green-700 px-2 py-1 rounded-full">New</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="p-6 bg-card rounded-xl border border-border">
                    <h3 className="font-bold font-heading text-lg mb-4">Recent Sales</h3>
                    <p className="text-muted-foreground">No recent sales data available.</p>
                </div>
            </div>
        </div>
    );
}
