import CountUp from './CountUp';
import FadeUp from './FadeUp';

function Stats({ stats }) {
    return (
        <section className="py-20 bg-quantix-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-quantix-border border border-quantix-border rounded-2xl overflow-hidden shadow-xl">
                    {stats.map((stat, index) => (
                        <FadeUp key={stat.label} delay={index * 100} className="p-6 sm:p-8 lg:p-10 text-center flex flex-col items-center justify-center bg-quantix-card">
                            <h3 className="text-4xl lg:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white to-quantix-text mb-2 sm:mb-3">
                                <CountUp 
                                    target={stat.target} 
                                    prefix={stat.prefix} 
                                    suffix={stat.suffix} 
                                    decimals={stat.decimals} 
                                />
                            </h3>
                            <p className="text-xs sm:text-sm font-semibold text-quantix-text uppercase tracking-wider">
                                {stat.label}
                            </p>
                        </FadeUp>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Stats