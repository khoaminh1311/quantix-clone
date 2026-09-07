import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import LogoCloud from "./components/LogoCloud"
import Features from "./components/Features"
import FeatureShowcase from "./components/FeatureShowcase"
import Stats from "./components/Stats"
import Pricing from "./components/Pricing"
import CTA from "./components/CTA"
import Footer from "./components/Footer"

function App() {
    const features = [
        {
            title: "Fast Performance",
            description: "Build and deliver your products faster."
        },
        {
            title: "Secure Platform",
            description: "Keep your data safe and protected."
        },
        {
            title: "Easy Collaboration",
            description: "Work together with your team efficiently."
        }
    ]

    const stats = [
        {
            value: "10K+",
            label: "Active users"
        },
        {
            value: "99.9%",
            label: "Uptime"
        },
        {
            value: "50+",
            label: "Countries"
        }
    ]

    const logos = [
        "Company A",
        "Company B",
        "Company C",
        "Company D",
        "Company E"
    ]

    const plans = [
        {
            name: "Basic",
            price: "$9",
            description: "For individuals and small projects.",
            features: [
                "5 projects",
                "Basic analytics",
                "Email support"
            ]
        },
        {
            name: "Pro",
            price: "$29",
            description: "For growing teams.",
            features: [
                "Unlimited projects",
                "Advanced analytics",
                "Priority support"
            ]
        },
        {
            name: "Enterprise",
            price: "$99",
            description: "For large organizations.",
            features: [
                "Everything in Pro",
                "Custom integrations",
                "Dedicated support"
            ]
        }
    ]

    const showcaseFeatures = [
        {
            title: "Powerful Analytics",
            description: "Track your product performance with detailed analytics.",
            image: "/images/analytics.png"
        },
        {
            title: "Smart Collaboration",
            description: "Work with your team and manage projects efficiently.",
            image: "/images/collaboration.png"
        },
        {
            title: "Advanced Security",
            description: "Protect your data with enterprise-grade security.",
            image: "/images/security.png"
        }
    ]
    return (
        <>
            <Navbar />
            <Hero
                title="Build better products"
                description="Create, manage and grow your business with Quantix."
            />
            <LogoCloud logos={logos} />
            <Features features={features} />
            <FeatureShowcase showcaseFeatures={showcaseFeatures} />
            <Stats stats={stats} />
            <Pricing plans={plans} />
            <CTA />
            <Footer />
        </>
    )
}

export default App