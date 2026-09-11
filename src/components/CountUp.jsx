import { useState, useEffect, useRef } from 'react';

function CountUp({ target, prefix = '', suffix = '', decimals = 0, duration = 2000 }) {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef();

    // Intersection Observer to trigger animation
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (domRef.current) {
                        observer.unobserve(domRef.current);
                    }
                }
            });
        }, { threshold: 0.1 });

        const currentRef = domRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    // Animation logic
    useEffect(() => {
        if (!isVisible) return;

        let startTime = null;
        let animationFrame;

        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            
            // easeOutExpo easing function for a very nice deceleration
            const easeOutExpo = (x) => {
                return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
            };

            const progressRatio = Math.min(progress / duration, 1);
            const easedProgress = easeOutExpo(progressRatio);
            
            const currentCount = easedProgress * target;
            setCount(currentCount);

            if (progress < duration) {
                animationFrame = requestAnimationFrame(animate);
            } else {
                setCount(target);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrame);
    }, [isVisible, target, duration]);

    // Format the number properly with commas and decimals
    const formattedCount = Number(count).toFixed(decimals);
    const finalDisplay = Number(formattedCount).toLocaleString('en-US', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals
    });

    return (
        <span ref={domRef}>
            {prefix}{finalDisplay}{suffix}
        </span>
    );
}

export default CountUp;
