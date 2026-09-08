import { LayoutDashboard, Filter, Code, PlayCircle, Shield } from 'lucide-react';
import FeatureShowcase from './FeatureShowcase';

const tabs = [
    { 
        id: 'dashboard', 
        label: 'Real-Time Dashboard', 
        icon: LayoutDashboard,
        description: 'Watch your metrics update live with sub-second latency. Custom widgets, drag-and-drop layout, and instant sharing with your team.'
    },
    { 
        id: 'funnels', 
        label: 'Funnel Analytics', 
        icon: Filter,
        description: 'Identify exactly where users drop off and why. Build funnels in seconds and correlate drop-off with user segments.'
    },
    { 
        id: 'sdk', 
        label: 'One-Line SDK', 
        icon: Code,
        description: 'Drop in a single script tag or npm package. Auto-capture pageviews, clicks, and custom events out of the box.'
    },
    { 
        id: 'replay', 
        label: 'Session Replay', 
        icon: PlayCircle,
        description: 'See exactly what your users see. Replay sessions with pixel-perfect accuracy and zero performance impact on your app.'
    },
    { 
        id: 'privacy', 
        label: 'Privacy First', 
        icon: Shield,
        description: 'GDPR and CCPA compliant out of the box. Cookieless tracking, automatic PII masking, and EU hosting available.'
    },
];

function Features() {
    // For Phase 5, we use a static active tab. Interactivity comes in Phase 7.
    const activeTab = 'dashboard';

    return (
        <section className="py-24 bg-quantix-dark" id="features">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-quantix-light mb-4">
                        Everything you need.<br/>Nothing you don't.
                    </h2>
                    <p className="text-lg text-quantix-text max-w-2xl mx-auto">
                        A complete analytics toolkit that replaces five tools in your stack.
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-12 items-start">
                    {/* Tabs Sidebar */}
                    <div className="lg:col-span-4 flex flex-col gap-2">
                        {tabs.map(tab => (
                            <button
                                key={tab.id}
                                className={`flex items-start gap-3 sm:gap-4 px-4 sm:px-6 py-3 sm:py-4 rounded-xl text-left transition-all ${
                                    activeTab === tab.id 
                                    ? 'bg-quantix-card border border-quantix-border shadow-lg' 
                                    : 'hover:bg-quantix-card/50 text-quantix-text hover:text-quantix-light border border-transparent'
                                }`}
                            >
                                <div className={`p-1.5 sm:p-2 rounded-lg mt-0.5 ${activeTab === tab.id ? 'bg-quantix-accent/10 text-quantix-accent' : 'bg-quantix-border/50 text-quantix-text'}`}>
                                    <tab.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                                </div>
                                <div>
                                    <div className={`font-semibold ${activeTab === tab.id ? 'text-quantix-light' : 'text-quantix-light'}`}>
                                        {tab.label}
                                    </div>
                                    {activeTab === tab.id && (
                                        <div className="text-sm text-quantix-text mt-1 leading-relaxed">
                                            {tab.description}
                                        </div>
                                    )}
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Showcase Area */}
                    <div className="lg:col-span-8">
                        <FeatureShowcase activeTab={activeTab} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Features;