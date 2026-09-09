import { useState } from 'react';
import { LayoutDashboard, Filter, Code, PlayCircle, Shield, Check } from 'lucide-react';
import FeatureShowcase from './FeatureShowcase';

const tabs = [
    { 
        id: 'dashboard', 
        navLabel: 'Dashboard',
        title: 'Real-Time Dashboard', 
        icon: LayoutDashboard,
        description: 'Watch your metrics update live with sub-second latency. Custom widgets, drag-and-drop layout, and instant sharing with your team.',
        bullets: ['Sub-second data refresh', 'Drag-and-drop widgets', 'Scheduled email reports']
    },
    { 
        id: 'funnels', 
        navLabel: 'Funnels',
        title: 'Funnel Analytics', 
        icon: Filter,
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
        icon: PlayCircle,
        description: 'See exactly what your users see. Replay sessions with pixel-perfect accuracy and zero performance impact on your app.',
        bullets: ['Pixel-perfect playback', 'Console log capture', 'Rage click detection']
    },
    { 
        id: 'privacy', 
        navLabel: 'Privacy',
        title: 'Privacy First', 
        icon: Shield,
        description: 'GDPR and CCPA compliant out of the box. Cookieless tracking, automatic PII masking, and EU hosting available.',
        bullets: ['No cookie banners needed', 'EU data residency', 'SOC 2 Type II certified']
    },
];

function Features() {
    const [activeTab, setActiveTab] = useState('dashboard');
    const currentTabData = tabs.find(t => t.id === activeTab);

    return (
        <section className="py-24 bg-quantix-dark" id="features">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-quantix-light mb-4">
                        Everything you need.<br/>Nothing you don't.
                    </h2>
                    <p className="text-lg text-quantix-text max-w-2xl mx-auto">
                        A complete analytics toolkit that replaces five tools in your stack.
                    </p>
                </div>

                {/* Top Tabs Navigation (Floating Pill-shaped) */}
                <div className="flex justify-center mb-16">
                    <div className="inline-flex flex-wrap justify-center items-center gap-1 p-1.5 rounded-full bg-quantix-card/30 backdrop-blur-md border border-quantix-border/50">
                        {tabs.map(tab => {
                            const isActive = activeTab === tab.id;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`px-4 sm:px-6 py-2 rounded-full text-sm font-medium transition-all ${
                                        isActive 
                                        ? 'bg-quantix-accent text-white shadow-md shadow-quantix-accent/20' 
                                        : 'text-quantix-text hover:text-quantix-light hover:bg-quantix-card/50'
                                    }`}
                                >
                                    {tab.navLabel}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Bottom Left Content & Bottom Right Mockup */}
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    
                    {/* Bottom Left: Tab Content */}
                    <div className="flex flex-col gap-6 order-2 lg:order-1 animate-fade-in-up" key={`content-${activeTab}`}>
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-quantix-accent/10 text-quantix-accent mb-2">
                            {currentTabData && <currentTabData.icon className="w-6 h-6" />}
                        </div>
                        <h3 className="text-3xl font-bold text-quantix-light">
                            {currentTabData?.title}
                        </h3>
                        <p className="text-lg text-quantix-text leading-relaxed">
                            {currentTabData?.description}
                        </p>
                        
                        <ul className="space-y-4 mt-4">
                            {currentTabData?.bullets.map((bullet, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-quantix-light font-medium">
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-quantix-accent/20 flex items-center justify-center">
                                        <Check className="w-4 h-4 text-quantix-accent" />
                                    </div>
                                    {bullet}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Bottom Right: Mockup */}
                    <div className="order-1 lg:order-2">
                        <FeatureShowcase activeTab={activeTab} />
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Features;