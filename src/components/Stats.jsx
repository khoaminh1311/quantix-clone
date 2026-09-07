function Stats({ stats }) {
    return (
        <section>
            {stats.map((stat) => (
                <div key={stat.label}>
                    <h3>{stat.value}</h3>
                    <p>{stat.label}</p>
                </div>
            ))}
        </section>
    )
}

export default Stats