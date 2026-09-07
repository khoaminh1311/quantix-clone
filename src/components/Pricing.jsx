function Pricing({ plans }) {
    return (
        <section>
            {plans.map((plan) => (
                <div key={plan.name}>
                    <h3>{plan.name}</h3>
                    <p>{plan.price}</p>
                    <p>{plan.description}</p>
                    <ul>
                        {plan.features.map((feature) => (
                            <li key={feature}>
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </section>
    )
}

export default Pricing