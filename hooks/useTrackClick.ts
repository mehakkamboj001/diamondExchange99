import { useCallback } from 'react';

export const useTrackClick = () => {
    const trackClick = useCallback(async (elementName: string) => {
        try {
            await fetch('/api/track-click', {
                method: 'POST',
                body: JSON.stringify({ element: elementName }),
            });
        } catch (error) {
            console.error('Click tracking failed', error);
        }
    }, []);

    return { trackClick };
};
