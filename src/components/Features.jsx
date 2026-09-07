function Features({ features }) {
    return (
        <section>
            {features.map((feature) => (
                <div key={feature.title}>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                </div>
            ))}
        </section>
    )
}

export default Features