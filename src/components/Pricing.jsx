import { useState } from "react";
import { Check } from "lucide-react";
import FadeUp from "./FadeUp";

function Pricing({ plans }) {
    const [isAnnual, setIsAnnual] = useState(false);

    return (
        <section className="py-20 bg-quantix-dark scroll-mt-20 sm:scroll-mt-24" id="pricing">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <FadeUp className="text-center mb-10 md:mb-16">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <span className="w-8 h-[2px] bg-quantix-accent"></span>
                        <span className="text-quantix-accent text-sm font-bold tracking-widest uppercase">Pricing</span>
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-quantix-light mb-4">
                        Start free. Scale as you grow.
                    </h2>
                    <p className="text-lg text-quantix-text max-w-2xl mx-auto">
                        No credit card required. Upgrade, downgrade, or cancel anytime.
                    </p>
                </FadeUp>

                {/* Toggle */}
                <FadeUp delay={100} className="flex items-center justify-center gap-4 mb-10 md:mb-16">
                    <span className={`font-medium transition-colors ${!isAnnual ? 'text-quantix-light' : 'text-quantix-text'}`}>
                        Monthly
                    </span>
                    <button 
                        onClick={() => setIsAnnual(!isAnnual)}
                        className="w-14 h-8 rounded-full bg-quantix-card border border-quantix-border relative flex items-center px-1 focus:outline-none focus:ring-2 focus:ring-quantix-accent focus:ring-offset-2 focus:ring-offset-quantix-dark transition-colors"
                    >
                        <span 
                            className={`w-6 h-6 rounded-full bg-quantix-accent block transition-transform duration-300 ease-in-out ${isAnnual ? 'translate-x-6' : 'translate-x-0'}`}
                        ></span>
                    </button>
                    <span className={`font-medium transition-colors ${isAnnual ? 'text-quantix-light' : 'text-quantix-text'}`}>
                        Annually
                    </span>
                    <span className="bg-[#22c55e]/10 text-[#22c55e] text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wider">
                        Save 30%
                    </span>
                </FadeUp>

                {/* Pricing Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto items-stretch">
                    {plans.map((plan, index) => {
                        return (
                            <FadeUp key={plan.name} delay={200 + index * 100} className="h-full">
                                <div
                                    className={`relative rounded-3xl border transition-all duration-300 flex flex-col justify-between ${
                                        plan.popular
                                            ? 'p-8 md:px-8 md:py-12 md:-my-4 md:h-[calc(100%+2rem)] bg-[#24242B] border-quantix-accent/70 shadow-[0_0_40px_rgba(255,107,107,0.18)] z-10'
                                            : 'p-8 h-full bg-[#1E1E24] border-quantix-border/40 hover:border-quantix-border'
                                    }`}
                                >
                                    {plan.popular && (
                                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                                            <span className="bg-quantix-accent text-white text-[11px] font-bold px-3.5 py-1 rounded-full uppercase tracking-wider shadow-[0_0_15px_rgba(255,107,107,0.5)] whitespace-nowrap">
                                                Most Popular
                                            </span>
                                        </div>
                                    )}

                                    {/* Top Part: Title, Price, Subtitle, CTA Button */}
                                    <div>
                                        {/* Title */}
                                        <div className="h-7 mb-4 flex items-center">
                                            <h3 className="text-xl font-semibold text-quantix-light tracking-wide">{plan.name}</h3>
                                        </div>

                                        {/* Main Price */}
                                        <div className="h-12 mb-2 flex items-baseline">
                                            {plan.name === 'Starter' ? (
                                                <span className="text-4xl sm:text-5xl font-extrabold text-quantix-light tracking-tight">
                                                    {plan.priceMonthly}
                                                </span>
                                            ) : (
                                                <div className="flex items-baseline">
                                                    <span className="text-2xl font-bold text-quantix-text mr-1">$</span>
                                                    <span className="text-4xl sm:text-5xl font-extrabold text-quantix-light tracking-tight">
                                                        {isAnnual ? plan.priceAnnual : plan.priceMonthly}
                                                    </span>
                                                </div>
                                            )}
                                        </div>

                                        {/* Sub Price */}
                                        <div className="h-6 mb-8 flex items-center text-sm font-medium text-quantix-text">
                                            {plan.name === 'Starter' ? (
                                                <span>{plan.period}</span>
                                            ) : isAnnual && plan.annualTotal ? (
                                                <span>
                                                    per month <span className="text-quantix-text">(${plan.annualTotal} per year)</span>
                                                </span>
                                            ) : (
                                                <span>per month</span>
                                            )}
                                        </div>

                                        {/* CTA Button */}
                                        <button
                                            className={`w-full py-3.5 px-4 rounded-xl font-semibold mb-8 transition-all duration-200 text-sm ${
                                                plan.popular
                                                    ? 'bg-quantix-accent text-white hover:bg-red-500 shadow-[0_0_20px_rgba(255,107,107,0.35)]'
                                                    : 'bg-[#26262D] border border-quantix-border/70 text-quantix-light hover:bg-quantix-border/50'
                                            }`}
                                        >
                                            {plan.ctaText}
                                        </button>
                                    </div>

                                    {/* Features List */}
                                    <ul className="space-y-4">
                                        {plan.features.map((feature) => (
                                            <li key={feature} className="flex items-center gap-3">
                                                <Check className="w-4 h-4 shrink-0 text-quantix-accent" />
                                                <span className="text-quantix-text text-sm font-normal">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </FadeUp>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Pricing;