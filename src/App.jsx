import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Features from "./components/Features"
import Stats from "./components/Stats"
import Pricing from "./components/Pricing"
import CTA from "./components/CTA"
import Footer from "./components/Footer"

const stats = [
    {
        target: 50,
        suffix: "M+",
        label: "Events tracked daily"
    },
    {
        target: 99.9,
        suffix: "%",
        decimals: 1,
        label: "Uptime SLA"
    },
    {
        target: 2400,
        suffix: "+",
        label: "Teams worldwide"
    },
    {
        target: 50,
        prefix: "<",
        suffix: "ms",
        label: "Query response time"
    }
]

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
        priceMonthly: "25",
        priceAnnual: "17.50",
        period: "per month",
        annualTotal: "210",
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
        priceMonthly: "120",
        priceAnnual: "84",
        period: "per month",
        annualTotal: "1,008",
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

function App() {

    return (
        <main className="overflow-x-hidden w-full relative min-h-screen flex flex-col">
            <Navbar />
            <Hero />
            <Features />
            <Stats stats={stats} />
            <Pricing plans={plans} />
            <CTA />
            <Footer />
        </main>
    )
}

export default App