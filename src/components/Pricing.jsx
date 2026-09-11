import { useState } from "react";
import { Check } from "lucide-react";
import FadeUp from "./FadeUp";

function Pricing({ plans }) {
    const [isAnnual, setIsAnnual] = useState(false);

    return (
        <section className="py-20 bg-quantix-dark" id="pricing">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <FadeUp className="text-center mb-10 md:mb-16">
                    <p className="text-quantix-accent text-sm font-bold tracking-widest uppercase mb-4">Pricing</p>
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
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => {
                        return (
                            <FadeUp key={plan.name} delay={200 + index * 100}>
                                <div
                                    className={`relative p-6 sm:p-8 rounded-2xl border transition-all duration-300 h-full ${plan.popular
                                        ? 'bg-quantix-card border-quantix-accent shadow-[0_0_30px_rgba(255,107,107,0.15)] md:-mt-4 md:mb-4'
                                        : 'bg-quantix-dark border-quantix-border/50 hover:border-quantix-border'
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

                                    {/* Main Price */}
                                    <div className="relative h-10 mb-2">
                                        {plan.name === 'Starter' ? (
                                            <div className="absolute top-0 left-0 flex items-baseline gap-2 w-full opacity-100 translate-y-0">
                                                <span className="text-3xl sm:text-4xl font-extrabold text-quantix-light">
                                                    {plan.priceMonthly}
                                                </span>
                                            </div>
                                        ) : (
                                            <>
                                                <div className={`absolute top-0 left-0 flex items-baseline gap-2 w-full transition-all duration-300 ease-in-out ${!isAnnual ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-[10px] pointer-events-none'}`}>
                                                    <span className="text-2xl font-bold text-quantix-text">$</span>
                                                    <span className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-white to-quantix-light">
                                                        {plan.priceMonthly}
                                                    </span>
                                                </div>
                                                <div className={`absolute top-0 left-0 flex items-baseline gap-2 w-full transition-all duration-300 ease-in-out ${isAnnual ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-[10px] pointer-events-none'}`}>
                                                    <span className="text-2xl font-bold text-quantix-text">$</span>
                                                    <span className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-white to-quantix-light">
                                                        {plan.priceAnnual}
                                                    </span>
                                                </div>
                                            </>
                                        )}
                                    </div>

                                    {/* Sub Price */}
                                    <div className="relative h-5 mb-6">
                                        {plan.name === 'Starter' ? (
                                            <p className="absolute top-0 left-0 text-sm font-medium w-full opacity-100 translate-y-0">
                                                <span className="text-quantix-text">{plan.period}</span>
                                            </p>
                                        ) : (
                                            <>
                                                <p className={`absolute top-0 left-0 text-sm font-medium w-full transition-all duration-300 ease-in-out ${!isAnnual ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-[10px] pointer-events-none'}`}>
                                                    <span className="text-quantix-text">{plan.period}</span>
                                                </p>
                                                <p className={`absolute top-0 left-0 text-sm font-medium w-full transition-all duration-300 ease-in-out ${isAnnual ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-[10px] pointer-events-none'}`}>
                                                    {plan.annualTotal ? (
                                                        <>
                                                            <span className="text-quantix-text">{plan.period}</span>{' '}
                                                            <span className="text-quantix-light">(${plan.annualTotal} per year)</span>
                                                        </>
                                                    ) : (
                                                        <span className="text-quantix-text">{plan.period}</span>
                                                    )}
                                                </p>
                                            </>
                                        )}
                                    </div>

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
                            </FadeUp>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Pricing;