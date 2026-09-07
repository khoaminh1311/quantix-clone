function Stats({ stats }) {
    return (
        <section className="py-20 bg-quantix-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 lg:divide-x divide-quantix-border border border-quantix-border rounded-2xl bg-quantix-card overflow-hidden shadow-xl">
                    {stats.map((stat) => (
                        <div key={stat.label} className="p-8 lg:p-10 text-center flex flex-col items-center justify-center">
                            <h3 className="text-4xl lg:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white to-quantix-text mb-3">
                                {stat.value}
                            </h3>
                            <p className="text-xs sm:text-sm font-semibold text-quantix-text uppercase tracking-wider">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Stats