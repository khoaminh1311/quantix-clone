import { ArrowRight, CheckCircle2 } from 'lucide-react';
import FadeUp from './FadeUp';

function CTA() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="bg-quantix-dark border border-quantix-border rounded-3xl p-6 sm:p-8 lg:p-16 text-center relative overflow-hidden shadow-2xl">

                    {/* Decorative Background Elements */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-quantix-accent/15 rounded-full blur-[120px] opacity-50 pointer-events-none"></div>

                    <div className="relative z-10 max-w-3xl mx-auto">
                        <FadeUp>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-quantix-light mb-4 sm:mb-6 tracking-tight">
                                Stay in the loop
                            </h2>
                        </FadeUp>
                        <FadeUp delay={100}>
                            <p className="text-base sm:text-lg text-quantix-text mb-8 sm:mb-10">
                                Product updates, engineering insights, and zero spam. Unsubscribe anytime.
                            </p>
                        </FadeUp>

                        <FadeUp delay={200}>
                            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-8" onSubmit={(e) => e.preventDefault()}>
                                <input
                                    type="email"
                                    placeholder="Enter your work email"
                                    className="flex-1 bg-black/20 border border-quantix-border rounded-lg px-4 py-3 text-quantix-light placeholder-quantix-text/50 focus:outline-none focus:border-quantix-accent focus:ring-1 focus:ring-quantix-accent transition-all"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="inline-flex items-center justify-center px-6 py-3 bg-quantix-accent hover:bg-red-500 text-white font-medium rounded-lg transition-colors whitespace-nowrap"
                                >
                                    Get Started <ArrowRight className="ml-2 w-4 h-4" />
                                </button>
                            </form>
                        </FadeUp>

                        <FadeUp delay={300}>
                            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-quantix-text">
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-quantix-green" />
                                    <span>14-day free trial</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-quantix-green" />
                                    <span>No credit card required</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-quantix-green" />
                                    <span>Cancel anytime</span>
                                </div>
                            </div>
                        </FadeUp>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CTA;