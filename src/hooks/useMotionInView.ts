import { useEffect, useState, useRef } from 'react'

export default function useMotionInView(options?: IntersectionObserverInit) {
    const ref = useRef<HTMLDivElement | null>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const currentRef = ref.current;

        if(!currentRef) return;

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) setInView(true);
        }, options);

        if (ref.current) observer.observe(ref.current);

        return () => {
            observer.unobserve(currentRef);
        };
    }, [options]);

    return { ref, inView };
}