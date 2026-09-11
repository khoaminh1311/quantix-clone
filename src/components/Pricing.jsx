import { useState } from "react";
import { Check } from "lucide-react";

function Pricing({ plans }) {
    const [isAnnual, setIsAnnual] = useState(false);

    return (
        <section className="py-20 bg-quantix-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Toggle */}
                <div className="flex items-center justify-center gap-4 mb-16">
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
                    <span className="bg-quantix-accent/10 text-quantix-accent text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wider">
                        Save 30%
                    </span>
                </div>

                {/* Pricing Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan) => {
                        const currentPrice = isAnnual ? plan.priceAnnual : plan.priceMonthly;
                        
                        return (
                            <div
                                key={plan.name}
                                className={`relative p-6 sm:p-8 rounded-2xl border transition-all duration-300 ${plan.popular
                                    ? 'bg-quantix-card border-quantix-accent shadow-[0_0_30px_rgba(255,107,107,0.15)] md:-mt-4 md:mb-4'
                                    : 'bg-[#1a1a20] border-quantix-border/50 hover:border-quantix-border'
                                    }`}
                            >
                                {plan.popular && (
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                        <span className="bg-quantix-accent text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                                            Most Popular
                                        </span>
                                    </div>
                                )}

                                <h3 className="text-xl font-bold text-quantix-light mb-4">{plan.name}</h3>

                                <div className="flex items-baseline gap-2 mb-2">
                                    {currentPrice !== 'FREE' && (
                                        <span className="text-2xl font-bold text-quantix-text">$</span>
                                    )}
                                    <span className={`text-3xl sm:text-4xl font-extrabold ${currentPrice === 'FREE' ? 'text-quantix-light' : 'text-transparent bg-clip-text bg-gradient-to-br from-white to-quantix-light'}`}>
                                        {currentPrice}
                                    </span>
                                </div>

                                <p className="text-sm font-medium mb-6 h-5">
                                    {isAnnual && plan.annualTotal ? (
                                        <>
                                            <span className="text-quantix-text">{plan.period}</span>{' '}
                                            <span className="text-quantix-light">(${plan.annualTotal} per year)</span>
                                        </>
                                    ) : (
                                        <span className="text-quantix-text">{plan.period}</span>
                                    )}
                                </p>

                                <p className="text-quantix-text text-sm mb-8 h-10">
                                    {plan.description}
                                </p>

                                <button className={`w-full py-3 px-4 rounded-lg font-semibold mb-8 transition-colors ${plan.popular
                                    ? 'bg-quantix-accent text-white hover:bg-red-500 shadow-md'
                                    : 'bg-quantix-card border border-quantix-border text-quantix-light hover:bg-quantix-border/80'
                                    }`}>
                                    {plan.ctaText}
                                </button>

                                <div className="h-px w-full bg-quantix-border/50 mb-8"></div>

                                <ul className="space-y-4">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="flex items-start gap-3">
                                            <Check className={`w-5 h-5 shrink-0 ${plan.popular ? 'text-quantix-accent' : 'text-quantix-text'}`} />
                                            <span className="text-quantix-light text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Pricing;