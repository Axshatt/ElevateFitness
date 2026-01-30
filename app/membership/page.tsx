import PricingCard from '@/components/sections/pricing-card';

const plans = [
    {
        name: "Month-to-Month",
        price: "₹1,999",
        period: "mo",
        description: "Flexible commitment for those who want freedom.",
        features: [
            "Access to gym floor",
            "Locker room access",
            "Free WiFi",
            "1 Guest pass per month"
        ],
        popular: false
    },
    {
        name: "12-Month Plan",
        price: "₹14,999",
        period: "yr",
        description: "Best value for committed fitness enthusiasts.",
        features: [
            "All Month-to-Month benefits",
            "Unlimited Group Classes",
            "2 Personal Training Sessions",
            "Diet Consultation",
            "Free Merchandise"
        ],
        popular: true
    },
    {
        name: "Quarterly",
        price: "₹5,499",
        period: "3 mo",
        description: "A balanced choice for seasonal goals.",
        features: [
            "All Month-to-Month benefits",
            "5 Group Classes per month",
            "Quarterly fitness assessment"
        ],
        popular: false
    }
];

export default function MembershipPage() {
    return (
        <div className="py-24 bg-background">
            <div className="container mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">INVEST IN YOURSELF</h1>
                    <p className="text-xl text-muted-foreground">
                        Choose the plan that fits your goals. No hidden fees, no complicated contracts.
                        Just premium fitness.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <PricingCard key={index} plan={plan} />
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <h3 className="text-2xl font-bold font-heading mb-4">Questions?</h3>
                    <p className="text-muted-foreground mb-4">Contact our membership team for corporate rates and student discounts.</p>
                </div>
            </div>
        </div>
    );
}
