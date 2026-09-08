function FeatureShowcase({ activeTab }) {
    // For Phase 5, we just build the static layout of the Dashboard mockup
    return (
        <div className="rounded-2xl border border-quantix-border bg-quantix-card p-2 shadow-2xl relative">
            {/* Decorative Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-quantix-accent/20 blur-[100px] -z-10 rounded-full"></div>

            <div className="rounded-xl border border-quantix-border/50 bg-quantix-dark overflow-hidden relative z-10">
                {/* Browser/App Header */}
                <div className="flex items-center px-4 py-3 border-b border-quantix-border/50 bg-[#1A1A1A]">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                    </div>
                </div>

                {/* Dashboard Mockup Content */}
                <div className="p-6 sm:p-8">
                    <div className="flex items-center justify-between mb-8">
                        <div className="font-semibold text-lg text-quantix-light">Overview Activity</div>
                        <div className="flex gap-3">
                            <div className="h-9 w-24 bg-quantix-border/30 rounded-md"></div>
                            <div className="h-9 w-9 bg-quantix-accent/20 text-quantix-accent rounded-md flex items-center justify-center">+</div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                        <div className="p-4 sm:p-5 rounded-xl bg-quantix-card border border-quantix-border/50">
                            <div className="text-sm text-quantix-text mb-2 sm:mb-3">Total Events</div>
                            <div className="text-2xl sm:text-3xl font-bold text-quantix-light mb-1">1.2M</div>
                            <div className="text-xs text-quantix-green">+14% this week</div>
                        </div>
                        <div className="p-4 sm:p-5 rounded-xl bg-quantix-card border border-quantix-border/50">
                            <div className="text-sm text-quantix-text mb-2 sm:mb-3">Active Sessions</div>
                            <div className="text-2xl sm:text-3xl font-bold text-quantix-light mb-1">8,432</div>
                            <div className="text-xs text-quantix-green">+5.2% this week</div>
                        </div>
                    </div>

                    <div className="p-5 rounded-xl bg-quantix-card border border-quantix-border/50">
                        <div className="flex items-center justify-between mb-6">
                            <div className="text-sm text-quantix-text">Events over time</div>
                            <div className="h-6 w-16 bg-quantix-border/30 rounded"></div>
                        </div>
                        
                        <div className="flex items-end gap-2 h-32 md:h-40">
                            {[40, 60, 45, 90, 65, 80, 50, 100, 75, 85, 60, 50, 70, 95].map((h, i) => (
                                <div 
                                    key={i} 
                                    className="flex-1 bg-quantix-accent/30 rounded-t-sm hover:bg-quantix-accent/60 transition-colors relative group" 
                                    style={{ height: `${h}%` }}
                                >
                                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-quantix-dark border border-quantix-border text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                        {h * 120}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeatureShowcase;