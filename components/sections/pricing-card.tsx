'use client';

import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface PlanProps {
    name: string;
    price: string;
    period: string;
    description: string;
    features: string[];
    popular?: boolean;
}

export default function PricingCard({ plan }: { plan: PlanProps }) {
    return (
        <div className={cn(
            "relative p-8 rounded-2xl border flex flex-col h-full bg-background transition-all duration-300 hover:shadow-lg",
            plan.popular ? "border-accent shadow-md shadow-accent/10" : "border-border"
        )}>
            {plan.popular && (
                <div className="absolute top-0 right-0 transform translate-x-1/3 -translate-y-1/3">
                    <span className="bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                        Most Popular
                    </span>
                </div>
            )}

            <div className="mb-8">
                <h3 className="text-xl font-bold font-heading uppercase text-foreground mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm h-10">{plan.description}</p>
            </div>

            <div className="mb-8">
                <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground">/{plan.period}</span>
                </div>
            </div>

            <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-foreground/80">
                        <Check className="w-5 h-5 text-accent shrink-0" />
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>

            <Button
                variant={plan.popular ? "accent" : "outline"}
                className="w-full"
                asChild
            >
                <Link href="/checkout">Choose Plan</Link>
            </Button>
        </div>
    );
}
