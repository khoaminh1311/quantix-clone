import { ArrowRight, Play, TrendingUp, TrendingDown } from 'lucide-react'
import FadeUp from './FadeUp'

function Hero() {
    return (
        <section className="pt-20 sm:pt-24 pb-8 sm:pb-12 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-16 items-center">

                    {/* Left Content */}
                    <div className="mb-12 lg:mb-0 order-1 lg:col-start-1 lg:row-start-1">
                        <FadeUp delay={100}>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-quantix-border/50 border border-quantix-border mb-6">
                                <span className="w-2 h-2 rounded-full bg-quantix-green animate-pulse"></span>
                                <span className="text-sm font-medium text-quantix-text">Version 2.0 is Live</span>
                            </div>
                        </FadeUp>

                        <FadeUp delay={200}>
                            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-6">
                                Analytics that<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-quantix-accent to-orange-400">
                                    move the needle
                                </span>
                            </h1>
                        </FadeUp>

                        <FadeUp delay={300}>
                            <p className="text-lg text-quantix-text mb-8 max-w-xl">
                                Ship faster with real-time product analytics, session replay, and feature flags — all in one platform built for engineering teams.
                            </p>
                        </FadeUp>

                        <FadeUp delay={400}>
                            <div className="flex flex-col sm:flex-row gap-4 mb-12 lg:mb-0">
                                <a href="#" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-quantix-accent text-white font-medium hover:bg-red-500 transition-colors">
                                    Get Started Free <ArrowRight className="ml-2 w-4 h-4" />
                                </a>
                                <a href="#" className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-quantix-border bg-quantix-card text-quantix-light hover:bg-quantix-border transition-colors">
                                    <Play className="w-4 h-4 mr-2 fill-current" />
                                    Watch Demo
                                </a>
                            </div>
                        </FadeUp>
                    </div>

                    {/* Right Mockup */}
                    <FadeUp delay={300} className="relative mt-8 lg:mt-0 order-2 lg:col-start-2 lg:row-start-1 lg:row-span-2 w-full">
                        <div className="relative rounded-xl border border-quantix-border bg-quantix-card shadow-2xl overflow-hidden">
                            {/* Toolbar */}
                            <div className="flex items-center gap-2 px-4 py-3 border-b border-quantix-border bg-quantix-dark/50">
                                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                            </div>

                            {/* Mockup Body */}
                            <div className="p-3 sm:p-6">
                                <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6 sm:mb-8">
                                    <div className="p-2.5 sm:p-4 rounded-lg bg-quantix-dark border border-quantix-border min-w-0">
                                        <div className="text-[10px] sm:text-xs text-quantix-text mb-0.5 sm:mb-1 truncate">Page Views</div>
                                        <div className="text-sm sm:text-2xl font-bold text-quantix-light truncate">24.8K</div>
                                        <div className="flex items-center gap-0.5 sm:gap-1 text-[10px] sm:text-xs text-quantix-green mt-0.5 sm:mt-1">
                                            <TrendingUp className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
                                            <span>+12.3%</span>
                                        </div>
                                    </div>
                                    <div className="p-2.5 sm:p-4 rounded-lg bg-quantix-dark border border-quantix-border min-w-0">
                                        <div className="text-[10px] sm:text-xs text-quantix-text mb-0.5 sm:mb-1 truncate">Conversions</div>
                                        <div className="text-sm sm:text-2xl font-bold text-quantix-light truncate">1,847</div>
                                        <div className="flex items-center gap-0.5 sm:gap-1 text-[10px] sm:text-xs text-quantix-green mt-0.5 sm:mt-1">
                                            <TrendingUp className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
                                            <span>+8.1%</span>
                                        </div>
                                    </div>
                                    <div className="p-2.5 sm:p-4 rounded-lg bg-quantix-dark border border-quantix-border min-w-0">
                                        <div className="text-[10px] sm:text-xs text-quantix-text mb-0.5 sm:mb-1 truncate">Bounce Rate</div>
                                        <div className="text-sm sm:text-2xl font-bold text-quantix-light truncate">32%</div>
                                        <div className="flex items-center gap-0.5 sm:gap-1 text-[10px] sm:text-xs text-red-400 mt-0.5 sm:mt-1">
                                            <TrendingDown className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
                                            <span>-4.2%</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 rounded-lg bg-quantix-dark border border-quantix-border">
                                    <div className="text-sm font-medium text-quantix-text mb-4">Traffic — Last 30 days</div>
                                    <div className="h-32 relative">
                                        <svg viewBox="0 0 300 80" preserveAspectRatio="none" className="w-full h-full">
                                            <defs>
                                                <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="0%" stopColor="rgba(255,107,107,0.3)" />
                                                    <stop offset="100%" stopColor="rgba(255,107,107,0)" />
                                                </linearGradient>
                                            </defs>
                                            <path
                                                d="M 0 68 C 30 65, 60 60, 90 54 C 120 48, 140 44, 165 38 C 185 32, 195 35, 205 45 C 215 50, 225 45, 235 30 C 242 16, 252 14, 260 18 C 270 24, 278 48, 288 44 C 293 40, 297 32, 300 28 V 80 H 0 Z"
                                                fill="url(#lineGrad)"
                                            />
                                            <path
                                                d="M 0 68 C 30 65, 60 60, 90 54 C 120 48, 140 44, 165 38 C 185 32, 195 35, 205 45 C 215 50, 225 45, 235 30 C 242 16, 252 14, 260 18 C 270 24, 278 48, 288 44 C 293 40, 297 32, 300 28"
                                                fill="none"
                                                stroke="#FF6B6B"
                                                strokeWidth="2.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Glow */}
                        <div className="absolute -inset-0.5 bg-gradient-to-tr from-quantix-accent/20 to-orange-400/20 blur-3xl -z-10 rounded-full opacity-50"></div>
                    </FadeUp>

                    {/* Trusted By */}
                    <FadeUp delay={500} className="w-full order-3 lg:col-start-1 lg:row-start-2 border-t border-quantix-border pt-8 mt-8 lg:pt-6 lg:mt-0">
                        <p className="text-sm text-quantix-text mb-4 text-center sm:text-left">Trusted by 2,400+ teams</p>
                        <div className="flex flex-wrap justify-center sm:justify-start gap-x-8 gap-y-4 opacity-70 grayscale">
                            <div className="flex items-center font-bold text-lg">▲ Vercel</div>
                            <div className="flex items-center font-bold text-lg">Linear</div>
                            <div className="flex items-center font-bold text-lg">Raycast</div>
                            <div className="flex items-center font-bold text-lg">Resend</div>
                            <div className="flex items-center font-bold text-lg">Supabase</div>
                        </div>
                    </FadeUp>

                </div>
            </div>
        </section>
    )
}

export default Hero