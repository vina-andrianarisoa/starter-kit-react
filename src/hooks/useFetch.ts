import { useState, useEffect } from 'react'

export default function useFetch<T = unknown>(url : string, options?: RequestInit) {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let isMounted = true;

        const fetchData = async () => {
            try {
                setLoading(true);
                const res = await fetch(url, options);

                if (!res.ok) throw new Error("Erreur de chargement");
                const json: T = await res.json();
                if (isMounted) setData(json);
            } catch (error) {
                if (isMounted) {
                    if (error instanceof Error) {
                        setError(error.message);
                    } else {
                        setError(String(error));
                    }
                };
            } finally {
                if (isMounted) setLoading(false);
            }
        };

        fetchData();

        return () => {
            isMounted = false;
        };
    }, [url, options]);

    return { data, loading, error };
}