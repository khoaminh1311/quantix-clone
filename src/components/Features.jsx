import { useState, useEffect } from 'react';
import { BarChart2, Code, Clock, Lock, Check } from 'lucide-react';
import AOS from 'aos';
import FeatureShowcase from './FeatureShowcase';

const DashboardIcon = (props) => (
    <svg 
        width="22" 
        height="22" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        {...props}
    >
        <path d="M21 12 A9 9 0 1 1 12 3"></path>
        <path d="M21 3v9h-9"></path>
    </svg>
);

const tabs = [
    { 
        id: 'dashboard', 
        navLabel: 'Dashboard',
        title: 'Real-Time Dashboard', 
        icon: DashboardIcon,
        description: 'Watch your metrics update live with sub-second latency. Custom widgets, drag-and-drop layout, and instant sharing with your team.',
        bullets: ['Sub-second data refresh', 'Drag-and-drop widgets', 'Scheduled email reports']
    },
    { 
        id: 'funnels', 
        navLabel: 'Funnels',
        title: 'Funnel Analytics', 
        icon: BarChart2,
        description: 'Identify exactly where users drop off and why. Build funnels in seconds and correlate drop-off with user segments.',
        bullets: ['Visual drop-off analysis', 'Segment correlation', 'Historical comparison']
    },
    { 
        id: 'sdk', 
        navLabel: 'SDK',
        title: 'One-Line SDK', 
        icon: Code,
        description: 'Drop in a single script tag or npm package. Auto-capture pageviews, clicks, and custom events out of the box.',
        bullets: ['Under 4KB gzipped', 'Zero config autocapture', 'TypeScript-first API']
    },
    { 
        id: 'replay', 
        navLabel: 'Session Replay',
        title: 'Session Replay', 
        icon: Clock,
        description: 'See exactly what your users see. Replay sessions with pixel-perfect accuracy and zero performance impact on your app.',
        bullets: ['Pixel-perfect playback', 'Console log capture', 'Rage click detection']
    },
    { 
        id: 'privacy', 
        navLabel: 'Privacy',
        title: 'Privacy First', 
        icon: Lock,
        description: 'GDPR and CCPA compliant out of the box. Cookieless tracking, automatic PII masking, and EU hosting available.',
        bullets: ['No cookie banners needed', 'EU data residency', 'SOC 2 Type II certified']
    },
];

function Features() {
    const [activeTab, setActiveTab] = useState('dashboard');
    const currentTabData = tabs.find(t => t.id === activeTab);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (typeof AOS.refreshHard === 'function') {
                AOS.refreshHard();
            } else {
                AOS.refresh();
            }
        }, 30);
        return () => clearTimeout(timer);
    }, [activeTab]);

    return (
        <section className="pt-8 sm:pt-12 pb-20 sm:pb-24 bg-[var(--deep-space)] scroll-mt-20 sm:scroll-mt-24" id="features">
            <div className="max-w-7xl mx-auto px-4 min-[400px]:px-6 sm:px-10 lg:px-16">
                
                {/* Header */}
                <div data-aos="fade-up" className="text-center mb-10 sm:mb-14">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <span className="w-8 h-[2px] bg-[var(--accent)]"></span>
                        <span className="text-[var(--accent)] text-sm font-bold tracking-widest uppercase">Features</span>
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-[var(--text-primary)] mb-4">
                        Everything you need.<br/>Nothing you don't.
                    </h2>
                    <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
                        A complete analytics toolkit that replaces five tools in your stack.
                    </p>
                </div>

                {/* Top Tabs Navigation (Floating Pill-shaped Dock) */}
                <div data-aos="fade-up" data-aos-delay="100" className="flex justify-center mb-12 sm:mb-16">
                    <div className="inline-flex items-center gap-1 p-1.5 rounded-full bg-[#26262D]/70 backdrop-blur-md border border-white/[0.06] max-w-full overflow-x-auto no-scrollbar [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden shadow-xl">
                        {tabs.map(tab => {
                            const isActive = activeTab === tab.id;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition-all whitespace-nowrap shrink-0 ${
                                        isActive 
                                        ? 'bg-[var(--accent)] text-white shadow-[0_0_24px_rgba(255,107,107,0.45)]' 
                                        : 'text-[rgb(138,139,158)] hover:text-white'
                                    }`}
                                >
                                    {tab.navLabel}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Bottom Left Content & Bottom Right Mockup - Appearing together synchronously */}
                <div data-aos="fade-up" data-aos-delay="200" className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    
                    {/* Bottom Left: Tab Content */}
                    <div 
                        key={`content-${activeTab}`} 
                        className="flex flex-col gap-6 tab-fade-in"
                    >
                        <div className="w-12 h-12 rounded-xl bg-[rgba(255,107,107,0.08)] border border-[rgba(255,107,107,0.2)] flex items-center justify-center text-[var(--accent)]">
                            {currentTabData && <currentTabData.icon className="w-6 h-6 stroke-[1.75]" />}
                        </div>
                        <h3 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] tracking-tight">
                            {currentTabData?.title}
                        </h3>
                        <p className="text-base sm:text-lg text-[rgb(138,139,158)] leading-relaxed">
                            {currentTabData?.description}
                        </p>
                        
                        <ul className="space-y-3.5 mt-2">
                            {currentTabData?.bullets.map((bullet, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-[rgb(138,139,158)] font-medium text-sm sm:text-base">
                                    <Check className="w-4 h-4 text-[var(--accent)] shrink-0 stroke-[2.5]" />
                                    <span>{bullet}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Bottom Right: Mockup */}
                    <div>
                        <FeatureShowcase activeTab={activeTab} />
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Features;