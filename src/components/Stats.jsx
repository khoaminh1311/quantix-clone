import CountUp from './CountUp';

function Stats({ stats }) {
    return (
        <section className="stats-section">
            <div className="stats-container">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                    {stats.map((stat, index) => (
                        <div 
                            key={stat.label} 
                            data-aos="fade-up" 
                            data-aos-delay={index * 100}
                            className="flex flex-col items-center justify-center"
                        >
                            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--text-primary)] mb-2">
                                <CountUp 
                                    target={stat.target} 
                                    prefix={stat.prefix} 
                                    suffix={stat.suffix} 
                                    decimals={stat.decimals} 
                                />
                            </h3>
                            <p className="text-xs sm:text-sm font-medium text-[var(--text-secondary)]">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Stats;