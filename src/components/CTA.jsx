import { Check } from 'lucide-react';

function CTA() {
    return (
        <section className="py-20 sm:py-24 relative overflow-hidden bg-[var(--deep-space)]" id="cta">
            {/* 80px Grid Background */}
            <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 1px, transparent 1px)',
                    backgroundSize: '80px 80px'
                }}
            />

            {/* Red Radial Glow */}
            <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(rgba(255, 107, 107, 0.06) 0%, rgba(0, 0, 0, 0) 60%)'
                }}
            />

            {/* Container */}
            <div className="w-full max-w-[1200px] mx-auto px-6 text-center relative z-10">
                {/* Inner */}
                <div data-aos="fade-up" className="relative z-10 max-w-[520px] mx-auto p-0">
                    <h2 className="mb-3 p-0 text-[clamp(24px,3.5vw,36px)] font-extrabold leading-[1.1] tracking-[-0.04em] text-[var(--text-primary)]">
                        Stay in the loop
                    </h2>
                    <p className="max-w-[380px] mx-auto mb-8 p-0 text-[15px] leading-[1.7] text-[var(--text-secondary)]">
                        Product updates, engineering insights, and zero spam. Unsubscribe anytime.
                    </p>

                    {/* Input + Subscribe Button Pill Container */}
                    <form 
                        onSubmit={(e) => e.preventDefault()} 
                        className="w-full max-w-[480px] mx-auto flex items-center p-1.5 rounded-2xl border border-[rgba(255,255,255,0.06)] bg-[var(--surface-1)] transition-all focus-within:border-[var(--accent-border)] focus-within:shadow-[0_0_20px_rgba(255,107,107,0.15)] mb-8"
                    >
                        <label htmlFor="cta-email" className="sr-only">Email address</label>
                        <input
                            id="cta-email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            placeholder="you@company.com"
                            required
                            className="flex-1 bg-transparent pl-4 pr-2 py-2 text-sm sm:text-[15px] text-[var(--text-primary)] placeholder-[rgb(138,139,158)] focus:outline-none"
                        />
                        <button
                            type="submit"
                            className="rounded-[10px] text-white font-semibold text-sm sm:text-[15px] px-6 sm:px-7 py-2.5 sm:py-3 transition-all cursor-pointer shrink-0 bg-[var(--accent)] hover:bg-[var(--accent-light)] shadow-[0_0_24px_rgba(255,107,107,0.35)] hover:shadow-[0_0_28px_rgba(255,107,107,0.5)] active:scale-[0.98]"
                            style={{ borderRadius: '10px' }}
                        >
                            Subscribe
                        </button>
                    </form>

                    {/* Trust Badges */}
                    <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-[var(--text-secondary)]">
                        <div className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-[var(--accent)] stroke-[2.5]" />
                            <span>6,200+ subscribers</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-[var(--accent)] stroke-[2.5]" />
                            <span>Monthly digest</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-[var(--accent)] stroke-[2.5]" />
                            <span>Unsubscribe anytime</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CTA;