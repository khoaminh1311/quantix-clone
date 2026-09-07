function FeatureShowcase({ showcaseFeatures }) {
    return (
        <section>
            {showcaseFeatures.map((feature) => (
                <div key={feature.title}>
                    <img src={feature.image} alt={feature.title} />

                    <h3>{feature.title}</h3>

                    <p>{feature.description}</p>
                </div>
            ))}
        </section>
    )
}

export default FeatureShowcase