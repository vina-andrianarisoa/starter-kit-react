import { useState } from "react"

export default function useCopyToClipboard() {
    const [copied, setCopied] = useState(false);

    const copy = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);

            setTimeout(() => setCopied(false), 2000);
        } catch (error) {
            if (error instanceof Error) { console.error(error.message); }
            setCopied(false);
        }
    };

    return { copied, copy }
}