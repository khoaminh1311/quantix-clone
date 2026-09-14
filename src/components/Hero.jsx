import { ArrowRight, Play, TrendingUp, TrendingDown } from 'lucide-react'

function Hero() {
    return (
        <section className="relative pt-20 sm:pt-24 pb-8 sm:pb-12 overflow-hidden">
            {/* Lưới kẻ ô vuông mờ (SVG overlay stroke-white/[0.04]) */}
            <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
                <svg
                    className="absolute inset-0 w-full h-full stroke-white/[0.04]"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                >
                    <defs>
                        <pattern id="hero-grid-pattern" width="80" height="80" patternUnits="userSpaceOnUse">
                            <path d="M 80 0 L 0 0 0 80" fill="none" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" strokeWidth="0" fill="url(#hero-grid-pattern)" />
                </svg>
            </div>

            {/* Hiệu ứng vầng sáng đỏ/san hô (Radial glow / bloom) nhỏ, nhạt ở chính giữa */}
            <div
                className="hero-radial-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[420px] h-[280px] sm:h-[360px] bg-[#FF6B6B]/10 blur-[80px] rounded-full pointer-events-none -z-10"
                aria-hidden="true"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-16 items-center">

                    {/* Left Content */}
                    <div className="mb-12 lg:mb-0 order-1 lg:col-start-1 lg:row-start-1">
                        <div data-aos="fade-up" data-aos-delay="100">
                            <div
                                className="hero-badge inline-flex items-center gap-2 px-3 py-1 rounded-full mb-6 text-sm font-medium"
                                style={{
                                    backgroundColor: 'rgba(255, 107, 107, 0.08)',
                                    borderColor: 'rgba(255, 107, 107, 0.2)',
                                    borderBottomColor: 'rgba(255, 107, 107, 0.2)',
                                    borderLeftColor: 'rgba(255, 107, 107, 0.2)',
                                    borderRightColor: 'rgba(255, 107, 107, 0.2)',
                                    borderTopColor: 'rgba(255, 107, 107, 0.2)',
                                    color: 'rgb(255, 155, 155)',
                                }}
                            >
                                <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E]"></span>
                                <span>Version 2.0 is Live</span>
                            </div>
                        </div>

                        <div data-aos="fade-up" data-aos-delay="200">
                            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-6">
                                Analytics that<br />
                                <span
                                    className="hero-gradient-text"
                                    style={{
                                        backgroundColor: 'rgba(0, 0, 0, 0)',
                                        backgroundImage: 'linear-gradient(135deg, rgb(255, 212, 212) 0%, rgb(255, 107, 107) 60%, rgb(255, 155, 155) 100%)',
                                        color: 'rgb(238, 238, 240)',
                                        WebkitBackgroundClip: 'text',
                                        backgroundClip: 'text',
                                        WebkitTextFillColor: 'rgba(0, 0, 0, 0)',
                                    }}
                                >
                                    move the needle
                                </span>
                            </h1>
                        </div>

                        <div data-aos="fade-up" data-aos-delay="300">
                            <p className="text-lg text-quantix-text mb-8 max-w-xl">
                                Ship faster with real-time product analytics, session replay, and feature flags — all in one platform built for engineering teams.
                            </p>
                        </div>

                        <div data-aos="fade-up" data-aos-delay="400">
                            <div className="flex flex-col sm:flex-row gap-4 mb-12 lg:mb-0">
                                <a
                                    href="#"
                                    className="hero-btn-primary inline-flex items-center justify-center px-6 py-3 rounded-[100px] shadow-[0_0_30px_rgba(255,107,107,0.45)] text-white font-medium transition-all hover:shadow-[0_0_40px_rgba(255,107,107,0.6)]"
                                    style={{ borderBottomLeftRadius: '100px', borderBottomRightRadius: '100px' }}
                                >
                                    Get Started Free <ArrowRight className="ml-2 w-4 h-4" />
                                </a>
                                <a
                                    href="#"
                                    className="hero-btn-secondary inline-flex items-center justify-center px-6 py-3 rounded-[100px] border border-white/[0.08] bg-[#26262D]/80 text-[#EEEEF0] hover:bg-[#2E2E36] transition-colors"
                                    style={{ borderBottomLeftRadius: '100px', borderBottomRightRadius: '100px' }}
                                >
                                    <Play className="w-3.5 h-3.5 mr-2 text-white" />
                                    Watch Demo
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Mockup */}
                    <div data-aos="fade-up" data-aos-delay="300" className="relative mt-8 lg:mt-0 order-2 lg:col-start-2 lg:row-start-1 lg:row-span-2 w-full">
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
                    </div>

                    {/* Trusted By */}
                    <div data-aos="fade-up" data-aos-delay="500" className="w-full order-3 lg:col-start-1 lg:row-start-2 border-t border-[var(--border-subtle)] pt-8 mt-8 lg:pt-6 lg:mt-0">
                        <p
                            className="hero-trusted-title text-xs font-semibold uppercase tracking-wider mb-4 text-center sm:text-left"
                            style={{ color: 'rgb(85, 86, 106)' }}
                        >
                            TRUSTED BY 2,400+ TEAMS
                        </p>
                        <div className="flex flex-wrap justify-center sm:justify-start gap-x-6 sm:gap-x-8 gap-y-4">
                            <div className="hero-trusted-item flex items-center gap-2 text-sm sm:text-base font-semibold" style={{ color: 'rgb(138, 139, 158)' }}>
                                <span className="hero-trusted-icon w-[18px] h-[18px] rounded-[4px] bg-white/[0.06] border border-white/[0.04] inline-block shrink-0" aria-hidden="true" />
                                <span>Vercel</span>
                            </div>
                            <div className="hero-trusted-item flex items-center gap-2 text-sm sm:text-base font-semibold" style={{ color: 'rgb(138, 139, 158)' }}>
                                <span className="hero-trusted-icon w-[18px] h-[18px] rounded-[4px] bg-white/[0.06] border border-white/[0.04] inline-block shrink-0" aria-hidden="true" />
                                <span>Linear</span>
                            </div>
                            <div className="hero-trusted-item flex items-center gap-2 text-sm sm:text-base font-semibold" style={{ color: 'rgb(138, 139, 158)' }}>
                                <span className="hero-trusted-icon w-[18px] h-[18px] rounded-[4px] bg-white/[0.06] border border-white/[0.04] inline-block shrink-0" aria-hidden="true" />
                                <span>Raycast</span>
                            </div>
                            <div className="hero-trusted-item flex items-center gap-2 text-sm sm:text-base font-semibold" style={{ color: 'rgb(138, 139, 158)' }}>
                                <span className="hero-trusted-icon w-[18px] h-[18px] rounded-[4px] bg-white/[0.06] border border-white/[0.04] inline-block shrink-0" aria-hidden="true" />
                                <span>Resend</span>
                            </div>
                            <div className="hero-trusted-item flex items-center gap-2 text-sm sm:text-base font-semibold" style={{ color: 'rgb(138, 139, 158)' }}>
                                <span className="hero-trusted-icon w-[18px] h-[18px] rounded-[4px] bg-white/[0.06] border border-white/[0.04] inline-block shrink-0" aria-hidden="true" />
                                <span>Supabase</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Hero