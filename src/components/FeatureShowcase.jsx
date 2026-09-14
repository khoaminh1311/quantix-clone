import { Shield, XCircle, Lock, MapPin, Play } from 'lucide-react';

function FeatureShowcase({ activeTab }) {
    
    // Content renders based on activeTab
    const renderContent = () => {
        switch (activeTab) {
            case 'dashboard':
                return (
                    <div className="p-3 sm:p-5 lg:p-6 animate-fade-in-up">
                        {/* 3 Top Metric Cards */}
                        <div className="grid grid-cols-3 gap-2.5 sm:gap-4 mb-4 sm:mb-6">
                            <div className="p-3 sm:p-4 rounded-xl bg-[rgb(46,46,54)] border border-[rgba(255,255,255,0.06)] min-w-0">
                                <div className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[rgb(138,139,158)] mb-1 truncate">
                                    Active Users
                                </div>
                                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-0.5 sm:mb-1 truncate">
                                    3,842
                                </div>
                                <div className="text-[11px] sm:text-xs text-[#22C55E] font-medium">
                                    +12.3%
                                </div>
                            </div>
                            <div className="p-3 sm:p-4 rounded-xl bg-[rgb(46,46,54)] border border-[rgba(255,255,255,0.06)] min-w-0">
                                <div className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[rgb(138,139,158)] mb-1 truncate">
                                    Conversion
                                </div>
                                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-0.5 sm:mb-1 truncate">
                                    12.4%
                                </div>
                                <div className="text-[11px] sm:text-xs text-[#22C55E] font-medium">
                                    +2.1%
                                </div>
                            </div>
                            <div className="p-3 sm:p-4 rounded-xl bg-[rgb(46,46,54)] border border-[rgba(255,255,255,0.06)] min-w-0">
                                <div className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[rgb(138,139,158)] mb-1 truncate">
                                    Churn
                                </div>
                                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-0.5 sm:mb-1 truncate">
                                    1.8%
                                </div>
                                <div className="text-[11px] sm:text-xs text-[#FF6B6B] font-medium">
                                    -0.4%
                                </div>
                            </div>
                        </div>

                        {/* Revenue Line Chart Card */}
                        <div className="p-4 sm:p-5 rounded-xl bg-[rgb(46,46,54)] border border-[rgba(255,255,255,0.06)]">
                            <div className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[rgb(138,139,158)] mb-4">
                                Revenue — Last 7 days
                            </div>
                            <div className="h-28 sm:h-32 relative">
                                <svg viewBox="0 0 400 90" preserveAspectRatio="none" className="w-full h-full">
                                    <defs>
                                        <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor="rgba(255,107,107,0.25)" />
                                            <stop offset="100%" stopColor="rgba(255,107,107,0)" />
                                        </linearGradient>
                                    </defs>
                                    <path d="M 0 75 C 60 72, 100 60, 160 50 C 220 40, 260 36, 300 32 C 320 30, 335 30, 350 28 C 370 26, 385 24, 400 22 V 90 H 0 Z" fill="url(#revGrad)" />
                                    <path d="M 0 75 C 60 72, 100 60, 160 50 C 220 40, 260 36, 300 32 C 320 30, 335 30, 350 28 C 370 26, 385 24, 400 22" fill="none" stroke="#FF6B6B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <circle cx="340" cy="28.5" r="4.5" fill="rgb(46, 46, 54)" stroke="#FF6B6B" strokeWidth="2.5" />
                                </svg>
                            </div>
                        </div>
                    </div>
                );
            case 'funnels':
                return (
                    <div className="p-3 sm:p-5 lg:p-6 animate-fade-in-up space-y-3">
                        {[
                            { step: 'Landing Page', users: '12,480', fill: '100%', drop: '—', color: 'bg-[#FF6B6B]' },
                            { step: 'Sign Up Started', users: '8,736', fill: '70%', drop: '-30%', color: 'bg-[#FF6B6B]' },
                            { step: 'Email Verified', users: '6,115', fill: '49%', drop: '-30%', color: 'bg-[#F59E0B]' },
                            { step: 'Onboarding Done', users: '3,670', fill: '29%', drop: '-40%', color: 'bg-[#F59E0B]' },
                            { step: 'First Action', users: '2,569', fill: '20.5%', drop: '-30%', color: 'bg-[#22C55E]' },
                        ].map((item) => (
                            <div key={item.step} className="p-3 sm:p-3.5 rounded-xl bg-[rgb(46,46,54)] border border-[rgba(255,255,255,0.06)]">
                                <div className="flex items-center justify-between text-xs sm:text-sm font-medium mb-2">
                                    <span className="text-[#EEEEF0]">{item.step}</span>
                                    <div className="flex items-center gap-4 sm:gap-6">
                                        <span className="text-[rgb(138,139,158)] font-mono text-xs sm:text-sm">{item.users}</span>
                                        <span className={`w-10 text-right text-xs font-semibold ${item.drop === '—' ? 'text-[rgb(138,139,158)]' : 'text-[#FF6B6B]'}`}>{item.drop}</span>
                                    </div>
                                </div>
                                <div className="h-1.5 sm:h-2 w-full bg-white/[0.06] rounded-full overflow-hidden">
                                    <div className={`h-full rounded-full ${item.color}`} style={{ width: item.fill }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                );
            case 'sdk':
                return (
                    <div className="p-3 sm:p-5 lg:p-6 animate-fade-in-up flex flex-col h-full min-w-0">
                        {/* Code Editor */}
                        <div className="flex-1 min-w-0 w-full p-4 sm:p-5 rounded-xl bg-[#1E1E24] border border-[rgba(255,255,255,0.06)] font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto whitespace-pre text-gray-300">
                            <div className="text-[#55566A] mb-3">{'// Install: npm i @quantix/sdk'}</div>
                            
                            <div className="mb-3">
                                <span className="text-[#FF6B6B]">import</span> {'{ Quantix }'} <span className="text-[#FF6B6B]">from</span> <span className="text-[#22C55E]">'@quantix/sdk'</span>
                            </div>
                            
                            <div>
                                <span className="text-[#FF6B6B]">const</span> qx = <span className="text-[#FF6B6B]">new</span> <span className="text-[#FFD4D4]">Quantix</span>({'{'}
                            </div>
                            <div className="pl-4">
                                <span className="text-[rgb(138,139,158)]">apiKey:</span> <span className="text-[#22C55E]">'qx_live_k8x2...'</span>,
                            </div>
                            <div className="pl-4">
                                <span className="text-[rgb(138,139,158)]">autocapture:</span> <span className="text-[#FF6B6B]">true</span>,
                            </div>
                            <div className="pl-4">
                                <span className="text-[rgb(138,139,158)]">sessionReplay:</span> <span className="text-[#FF6B6B]">true</span>,
                            </div>
                            <div>{'}'})</div>
                            
                            <div className="text-[#55566A] mt-4 mb-2">{'// Track custom events'}</div>
                            <div>
                                qx.<span className="text-[#F59E0B]">track</span>(<span className="text-[#22C55E]">'checkout'</span>, {'{'}
                            </div>
                            <div className="pl-4">
                                <span className="text-[rgb(138,139,158)]">value:</span> <span className="text-[#FF6B6B]">49.99</span>,
                            </div>
                            <div className="pl-4">
                                <span className="text-[rgb(138,139,158)]">plan:</span> <span className="text-[#22C55E]">'pro'</span>
                            </div>
                            <div>{'}'})</div>
                        </div>

                        {/* Output Card */}
                        <div className="mt-4 p-3.5 sm:p-4 rounded-xl bg-[#1E1E24] border border-[rgba(255,255,255,0.06)]">
                            <div className="text-[10px] font-semibold tracking-wider text-[#55566A] uppercase mb-1.5">Output</div>
                            <div className="flex items-center gap-2.5 text-xs sm:text-sm font-mono text-[#22C55E]">
                                <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse shrink-0"></span>
                                <span>Event tracked in 8ms — 200 OK</span>
                            </div>
                        </div>
                    </div>
                );
            case 'replay':
                return (
                    <div className="p-3 sm:p-5 lg:p-6 animate-fade-in-up h-full flex flex-col min-w-0">
                        <div className="flex flex-col h-full gap-4">
                            <div className="rounded-xl bg-[rgb(46,46,54)] border border-[rgba(255,255,255,0.06)] overflow-hidden flex flex-col flex-1 min-h-[260px]">
                                {/* Replay Header */}
                                <div className="flex items-center justify-between px-4 py-2.5 border-b border-[rgba(255,255,255,0.06)] bg-white/[0.02] text-xs font-medium">
                                    <span className="flex items-center gap-2 text-[rgb(138,139,158)]">
                                        <span className="w-2 h-2 rounded-full bg-[#FF6B6B] animate-pulse"></span> Recording
                                    </span>
                                    <span className="text-[rgb(138,139,158)] font-mono">02:34 / 05:12</span>
                                </div>
                                
                                {/* Replay Viewport */}
                                <div className="flex-1 relative p-4 sm:p-6 bg-[rgb(38,38,45)]/60 flex flex-col justify-between">
                                    <div className="w-full flex flex-col gap-2.5">
                                        <div className="h-1.5 w-1/3 bg-white/[0.08] rounded"></div>
                                        <div className="h-3.5 w-full bg-white/[0.05] rounded"></div>
                                        <div className="h-3.5 w-3/4 bg-white/[0.05] rounded"></div>
                                        <div className="flex items-center gap-3 mt-1">
                                            <span className="h-4 w-16 bg-[#FF6B6B]/80 rounded-full inline-block"></span>
                                            {/* Cursor pointer */}
                                            <svg className="w-4 h-4 text-[#FF6B6B] -ml-2 drop-shadow" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M4 0l16 12-7 2-4 9-2-1 3-8-6-2v-12z" />
                                            </svg>
                                        </div>
                                    </div>
                                    
                                    {/* Wireframe Grid */}
                                    <div className="grid grid-cols-3 gap-2.5 mt-4 pt-2">
                                        <div className="h-14 rounded-lg bg-white/[0.03] border border-white/[0.04]"></div>
                                        <div className="h-14 rounded-lg bg-white/[0.03] border border-white/[0.04]"></div>
                                        <div className="h-14 rounded-lg bg-white/[0.03] border border-white/[0.04]"></div>
                                    </div>
                                </div>

                                {/* Timeline Player Bar */}
                                <div className="h-11 border-t border-[rgba(255,255,255,0.06)] bg-white/[0.02] flex items-center px-4 gap-3">
                                    <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#FF6B6B] text-white shrink-0 shadow-sm">
                                        <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
                                    </span>
                                    <div className="flex-1 h-1.5 bg-white/[0.08] rounded-full relative overflow-hidden">
                                        <div className="absolute top-0 left-0 bottom-0 w-1/2 bg-[#FF6B6B] rounded-full"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Event Chips */}
                            <div className="flex items-center flex-wrap gap-2 pt-1">
                                <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-[rgba(255,255,255,0.06)] bg-[rgb(46,46,54)] text-[11px] text-[rgb(138,139,158)] font-mono">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B6B]"></span> click
                                </span>
                                <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-[rgba(255,255,255,0.06)] bg-[rgb(46,46,54)] text-[11px] text-[rgb(138,139,158)] font-mono">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]"></span> scroll
                                </span>
                                <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-[rgba(255,255,255,0.06)] bg-[rgb(46,46,54)] text-[11px] text-[rgb(138,139,158)] font-mono">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#F43F5E]"></span> rage_click
                                </span>
                                <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-[rgba(255,255,255,0.06)] bg-[rgb(46,46,54)] text-[11px] text-[rgb(138,139,158)] font-mono">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E]"></span> input
                                </span>
                            </div>
                        </div>
                    </div>
                );
            case 'privacy':
                return (
                    <div className="p-3 sm:p-5 lg:p-6 animate-fade-in-up h-full flex flex-col justify-center">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                            {[
                                {
                                    icon: Shield,
                                    title: 'GDPR Compliant',
                                    desc: 'Full compliance with European data regulations',
                                },
                                {
                                    icon: XCircle,
                                    title: 'No Cookies',
                                    desc: 'Cookieless tracking — no annoying banners',
                                },
                                {
                                    icon: Lock,
                                    title: 'SOC 2 Type II',
                                    desc: 'Enterprise-grade security certification',
                                },
                                {
                                    icon: MapPin,
                                    title: 'EU Hosting',
                                    desc: 'Data residency in Frankfurt, Germany',
                                },
                            ].map((item) => (
                                <div key={item.title} className="p-4 sm:p-5 rounded-xl bg-[rgb(46,46,54)] border border-[rgba(255,255,255,0.06)] flex flex-col justify-between">
                                    <div className="w-8 h-8 rounded-lg bg-[#22C55E]/10 border border-[#22C55E]/20 flex items-center justify-center text-[#22C55E] mb-3 shrink-0">
                                        <item.icon className="w-4.5 h-4.5" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm sm:text-base font-bold text-white mb-1">{item.title}</h4>
                                        <p className="text-xs text-[rgb(138,139,158)] leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div 
            className="mockup-outer rounded-2xl border p-2 shadow-2xl relative min-h-[440px]"
            style={{ 
                backgroundColor: 'rgb(46, 46, 54)',
                borderColor: 'rgba(255, 255, 255, 0.06)',
                color: 'rgb(238, 238, 240)' 
            }}
        >
            {/* Window Container */}
            <div 
                className="mockup-inner rounded-xl border overflow-hidden relative z-10 h-full flex flex-col"
                style={{ 
                    backgroundColor: 'rgb(46, 46, 54)', 
                    borderColor: 'rgba(255, 255, 255, 0.06)',
                    borderBottomColor: 'rgba(255, 255, 255, 0.06)' 
                }}
            >
                {/* Browser/Window Header */}
                <div 
                    className="mockup-header flex items-center px-4 py-3 border-b"
                    style={{ 
                        backgroundColor: 'rgb(46, 46, 54)', 
                        borderBottomColor: 'rgba(255, 255, 255, 0.06)' 
                    }}
                >
                    <div className="flex gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]"></div>
                    </div>
                </div>

                {/* Dynamic Content */}
                <div key={activeTab} data-aos="fade" data-aos-duration="200" className="flex-1 tab-fade-in">
                    {renderContent()}
                </div>
            </div>
        </div>
    );
}

export default FeatureShowcase;