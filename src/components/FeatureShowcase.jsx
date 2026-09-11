import { ShieldCheck, Cookie, FileLock, Server } from 'lucide-react';

function FeatureShowcase({ activeTab }) {
    
    // Content renders based on activeTab
    const renderContent = () => {
        switch (activeTab) {
            case 'dashboard':
                return (
                    <div className="p-4 sm:p-6 lg:p-8 animate-fade-in-up">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                            <div className="p-4 rounded-lg bg-quantix-card border border-quantix-border/50">
                                <div className="text-xs text-quantix-text mb-1 uppercase tracking-wider font-semibold">Active Users</div>
                                <div className="text-2xl sm:text-3xl font-bold text-quantix-light mb-1">3,842</div>
                                <div className="text-xs text-quantix-green font-medium">+12.3%</div>
                            </div>
                            <div className="p-4 rounded-lg bg-quantix-card border border-quantix-border/50">
                                <div className="text-xs text-quantix-text mb-1 uppercase tracking-wider font-semibold">Conversion</div>
                                <div className="text-2xl sm:text-3xl font-bold text-quantix-light mb-1">12.4%</div>
                                <div className="text-xs text-quantix-green font-medium">+2.1%</div>
                            </div>
                            <div className="p-4 rounded-lg bg-quantix-card border border-quantix-border/50">
                                <div className="text-xs text-quantix-text mb-1 uppercase tracking-wider font-semibold">Churn</div>
                                <div className="text-2xl sm:text-3xl font-bold text-quantix-light mb-1">1.8%</div>
                                <div className="text-xs text-red-400 font-medium">-0.4%</div>
                            </div>
                        </div>

                        <div className="p-5 rounded-lg bg-quantix-card border border-quantix-border/50">
                            <div className="text-sm font-semibold text-quantix-light mb-6">Revenue — Last 7 days</div>
                            
                            <div className="h-32 relative">
                                <svg viewBox="0 0 400 80" preserveAspectRatio="none" className="w-full h-full">
                                    <defs>
                                        <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor="rgba(255,107,107,0.2)"/>
                                            <stop offset="100%" stopColor="rgba(255,107,107,0)"/>
                                        </linearGradient>
                                    </defs>
                                    <path d="M0 60 C40 55 60 40 100 35 S160 30 200 20 S280 25 320 15 S380 10 400 5 V80 H0Z" fill="url(#areaGrad)"/>
                                    <path d="M0 60 C40 55 60 40 100 35 S160 30 200 20 S280 25 320 15 S380 10 400 5" fill="none" stroke="#FF6B6B" strokeWidth="2"/>
                                    <circle cx="320" cy="15" r="4" fill="#FF6B6B" stroke="#1E1E24" strokeWidth="2"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                );
            case 'funnels':
                return (
                    <div className="p-4 sm:p-6 lg:p-8 animate-fade-in-up">
                        <div className="space-y-4">
                            {[
                                { step: 'Landing Page', users: '12,480', fill: '100%', drop: '—', color: 'bg-quantix-accent' },
                                { step: 'Sign Up Started', users: '8,736', fill: '70%', drop: '-30%', color: 'bg-quantix-accent' },
                                { step: 'Email Verified', users: '6,115', fill: '49%', drop: '-30%', color: 'bg-yellow-500' },
                                { step: 'Onboarding Done', users: '3,670', fill: '29%', drop: '-40%', color: 'bg-yellow-500' },
                                { step: 'First Action', users: '2,569', fill: '20.5%', drop: '-30%', color: 'bg-quantix-green' },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4">
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between text-sm font-medium mb-1.5">
                                            <span className="text-quantix-light">{item.step}</span>
                                            <span className="text-quantix-text">{item.users}</span>
                                        </div>
                                        <div className="h-2.5 w-full bg-quantix-dark rounded-full overflow-hidden">
                                            <div className={`h-full rounded-full ${item.color}`} style={{ width: item.fill }}></div>
                                        </div>
                                    </div>
                                    <div className="w-12 text-right text-xs font-semibold text-quantix-text pt-6">
                                        {item.drop}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case 'sdk':
                return (
                    <div className="p-4 sm:p-6 lg:p-8 animate-fade-in-up flex flex-col h-full min-w-0">
                        <div className="flex-1 min-w-0 w-full p-4 sm:p-5 rounded-lg bg-[#0d0d12] border border-quantix-border/50 font-mono text-sm overflow-x-auto whitespace-nowrap text-gray-300">
                            <div className="text-quantix-text mb-4">{'// Install: npm i @quantix/sdk'}</div>
                            
                            <div><span className="text-pink-400">import</span> {'{ Quantix }'} <span className="text-pink-400">from</span> <span className="text-yellow-300">'@quantix/sdk'</span></div>
                            <br/>
                            <div><span className="text-pink-400">const</span> qx = <span className="text-pink-400">new</span> <span className="text-blue-400">Quantix</span>({'{'}</div>
                            <div className="pl-4">apiKey: <span className="text-yellow-300">'qx_live_k8x2...'</span>,</div>
                            <div className="pl-4">autocapture: <span className="text-purple-400">true</span>,</div>
                            <div className="pl-4">sessionReplay: <span className="text-purple-400">true</span>,</div>
                            <div>{'}'})</div>
                            <br/>
                            <div className="text-quantix-text mb-2">{'// Track custom events'}</div>
                            <div>qx.<span className="text-blue-400">track</span>(<span className="text-yellow-300">'checkout'</span>, {'{'}</div>
                            <div className="pl-4">value: <span className="text-purple-400">49.99</span>,</div>
                            <div className="pl-4">plan: <span className="text-yellow-300">'pro'</span></div>
                            <div>{'}'})</div>
                        </div>
                        <div className="mt-4 p-4 rounded-lg bg-quantix-card border border-quantix-border/50">
                            <div className="text-xs text-quantix-text font-semibold uppercase tracking-wider mb-2">Output</div>
                            <div className="flex items-center gap-3 text-sm font-mono text-quantix-green">
                                <span className="w-2 h-2 rounded-full bg-quantix-green animate-pulse"></span>
                                Event tracked in 8ms — 200 OK
                            </div>
                        </div>
                    </div>
                );
            case 'replay':
                return (
                    <div className="p-4 sm:p-6 lg:p-8 animate-fade-in-up h-full flex flex-col min-w-0">
                        <div className="fv-body flex flex-col h-full gap-4">
                            <div className="replay-ui rounded-lg bg-[#0d0d12] border border-quantix-border/50 overflow-hidden flex flex-col flex-1 min-h-[250px]">
                                <div className="replay-header flex items-center justify-between px-4 py-3 border-b border-quantix-border/50 bg-[#1A1A1A] text-xs font-medium">
                                    <span className="rh-left flex items-center gap-2 text-quantix-light">
                                        <span className="live-dot w-2 h-2 rounded-full bg-red-500 animate-pulse"></span> Recording
                                    </span>
                                    <span className="rh-time text-quantix-text font-mono">02:34 / 05:12</span>
                                </div>
                                <div className="replay-viewport flex-1 relative p-4 sm:p-6 bg-quantix-dark/30">
                                    <div className="replay-page w-full h-full border border-quantix-border/30 rounded bg-quantix-dark/80 p-3 opacity-70 flex flex-col gap-2 relative overflow-hidden">
                                        <div className="rp-nav h-2 w-1/3 bg-quantix-border/50 rounded mb-2"></div>
                                        <div className="rp-hero-block h-6 w-full bg-quantix-border/30 rounded"></div>
                                        <div className="rp-hero-block h-6 w-full bg-quantix-border/30 rounded"></div>
                                        <div className="rp-hero-block h-6 w-3/4 bg-quantix-border/30 rounded"></div>
                                        <span className="rp-btn-block inline-block h-5 w-20 bg-quantix-accent/50 rounded mt-1"></span>
                                        <div className="rp-grid grid grid-cols-3 gap-2 mt-3 flex-1">
                                            <div className="rp-card bg-quantix-border/20 rounded h-full min-h-[40px]"></div>
                                            <div className="rp-card bg-quantix-border/20 rounded h-full min-h-[40px]"></div>
                                            <div className="rp-card bg-quantix-border/20 rounded h-full min-h-[40px]"></div>
                                        </div>
                                    </div>
                                    <div className="replay-cursor absolute top-1/2 left-1/2 z-10 drop-shadow-md transform -translate-x-1/2 -translate-y-1/2">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.5 3.21V20.8C5.5 21.46 6.27 21.82 6.77 21.4L11.4 17H18.5C19.05 17 19.5 16.55 19.5 16V4C19.5 3.45 19.05 3 18.5 3H6.5C5.95 3 5.5 3.45 5.5 4V3.21Z" fill="white"/>
                                            <path d="M5.5 3.21V20.8C5.5 21.46 6.27 21.82 6.77 21.4L11.4 17H18.5C19.05 17 19.5 16.55 19.5 16V4C19.5 3.45 19.05 3 18.5 3H6.5C5.95 3 5.5 3.45 5.5 4" stroke="black" strokeWidth="1.5"/>
                                        </svg>
                                    </div>
                                </div>
                                <div className="replay-timeline h-10 border-t border-quantix-border/50 bg-quantix-card flex items-center px-4 gap-3">
                                    <span className="rt-play w-6 h-6 flex items-center justify-center rounded-full bg-quantix-accent text-white pl-0.5">
                                        <svg width="8" height="8" viewBox="0 0 24 24" fill="#fff"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                                    </span>
                                    <div className="rt-track flex-1 h-1.5 bg-quantix-border rounded-full relative overflow-hidden">
                                        <div className="rt-progress absolute top-0 left-0 bottom-0 w-1/2 bg-quantix-accent rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="replay-events flex items-center flex-wrap gap-2">
                                <span className="replay-event-tag flex items-center gap-1.5 px-2 py-1 rounded border border-quantix-border bg-quantix-card text-[10px] text-quantix-text uppercase tracking-wider font-semibold">
                                    <span className="re-dot w-1.5 h-1.5 rounded-full bg-quantix-accent"></span> click
                                </span>
                                <span className="replay-event-tag flex items-center gap-1.5 px-2 py-1 rounded border border-quantix-border bg-quantix-card text-[10px] text-quantix-text uppercase tracking-wider font-semibold">
                                    <span className="re-dot w-1.5 h-1.5 rounded-full bg-yellow-500"></span> scroll
                                </span>
                                <span className="replay-event-tag flex items-center gap-1.5 px-2 py-1 rounded border border-quantix-border bg-quantix-card text-[10px] text-quantix-text uppercase tracking-wider font-semibold">
                                    <span className="re-dot w-1.5 h-1.5 rounded-full bg-rose-500"></span> rage_click
                                </span>
                                <span className="replay-event-tag flex items-center gap-1.5 px-2 py-1 rounded border border-quantix-border bg-quantix-card text-[10px] text-quantix-text uppercase tracking-wider font-semibold">
                                    <span className="re-dot w-1.5 h-1.5 rounded-full bg-green-500"></span> input
                                </span>
                            </div>
                        </div>
                    </div>
                );
            case 'privacy':
                return (
                    <div className="p-4 sm:p-6 lg:p-8 animate-fade-in-up h-full flex flex-col justify-center">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="p-4 sm:p-5 rounded-lg bg-quantix-card border border-quantix-border/50">
                                <div className="w-10 h-10 rounded-lg bg-quantix-border/30 flex items-center justify-center mb-4 text-quantix-light">
                                    <ShieldCheck className="w-5 h-5" />
                                </div>
                                <h4 className="text-base font-bold text-quantix-light mb-1">GDPR Compliant</h4>
                                <p className="text-xs text-quantix-text leading-relaxed">Full compliance with European data regulations</p>
                            </div>
                            <div className="p-4 sm:p-5 rounded-lg bg-quantix-card border border-quantix-border/50">
                                <div className="w-10 h-10 rounded-lg bg-quantix-border/30 flex items-center justify-center mb-4 text-quantix-light">
                                    <Cookie className="w-5 h-5" />
                                </div>
                                <h4 className="text-base font-bold text-quantix-light mb-1">No Cookies</h4>
                                <p className="text-xs text-quantix-text leading-relaxed">Cookieless tracking — no annoying banners</p>
                            </div>
                            <div className="p-4 sm:p-5 rounded-lg bg-quantix-card border border-quantix-border/50">
                                <div className="w-10 h-10 rounded-lg bg-quantix-border/30 flex items-center justify-center mb-4 text-quantix-light">
                                    <FileLock className="w-5 h-5" />
                                </div>
                                <h4 className="text-base font-bold text-quantix-light mb-1">SOC 2 Type II</h4>
                                <p className="text-xs text-quantix-text leading-relaxed">Enterprise-grade security certification</p>
                            </div>
                            <div className="p-4 sm:p-5 rounded-lg bg-quantix-card border border-quantix-border/50">
                                <div className="w-10 h-10 rounded-lg bg-quantix-border/30 flex items-center justify-center mb-4 text-quantix-light">
                                    <Server className="w-5 h-5" />
                                </div>
                                <h4 className="text-base font-bold text-quantix-light mb-1">EU Hosting</h4>
                                <p className="text-xs text-quantix-text leading-relaxed">Data residency in Frankfurt, Germany</p>
                            </div>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="rounded-2xl border border-quantix-border bg-quantix-card p-2 shadow-2xl relative min-h-[440px]">
            {/* Decorative Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-quantix-accent/20 blur-[100px] -z-10 rounded-full"></div>

            <div className="rounded-xl border border-quantix-border/50 bg-quantix-dark overflow-hidden relative z-10 h-full flex flex-col">
                {/* Browser/App Header */}
                <div className="flex items-center px-4 py-3 border-b border-quantix-border/50 bg-[#1A1A1A]">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                    </div>
                </div>

                {/* Dynamic Content */}
                <div className="flex-1">
                    {renderContent()}
                </div>
            </div>
        </div>
    );
}

export default FeatureShowcase;