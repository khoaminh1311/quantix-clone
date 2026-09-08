import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
// import LogoCloud from "./components/LogoCloud"
import Features from "./components/Features"
import Stats from "./components/Stats"
import Pricing from "./components/Pricing"
import CTA from "./components/CTA"
import Footer from "./components/Footer"

function App() {
    const stats = [
        {
            value: "50M+",
            label: "Events tracked daily"
        },
        {
            value: "99.9%",
            label: "Uptime SLA"
        },
        {
            value: "2,400+",
            label: "Teams worldwide"
        },
        {
            value: "<50ms",
            label: "Query response time"
        }
    ]

    // const logos = [
    //     "Vercel",
    //     "Linear",
    //     "Raycast",
    //     "Resend",
    //     "Supabase"
    // ]

    const plans = [
        {
            name: "Starter",
            priceMonthly: "FREE",
            priceAnnual: "FREE",
            period: "Free forever",
            description: "Free forever for side projects & early ideas.",
            ctaText: "Get Started",
            popular: false,
            features: [
                "Up to 10K events/mo",
                "1 project",
                "Core analytics",
                "Community support"
            ]
        },
        {
            name: "Pro",
            priceMonthly: "$25",
            priceAnnual: "$19",
            period: "per month",
            description: "For fast-growing products and engineering teams.",
            ctaText: "Start Free Trial",
            popular: true,
            features: [
                "Up to 1M events/mo",
                "Unlimited projects",
                "Session replay",
                "Feature flags & A/B",
                "Priority support"
            ]
        },
        {
            name: "Scale",
            priceMonthly: "$120",
            priceAnnual: "$99",
            period: "per month",
            description: "For high-scale enterprises with custom security.",
            ctaText: "Contact Sales",
            popular: false,
            features: [
                "Unlimited events",
                "SSO & SAML",
                "Custom retention",
                "Dedicated CSM",
                "SLA guarantee"
            ]
        }
    ]

    return (
        <>
            <Navbar />
            <Hero />
            <Features />
            <Stats stats={stats} />
            <Pricing plans={plans} />
            <CTA />
            <Footer />
        </>
    )
}

export default App