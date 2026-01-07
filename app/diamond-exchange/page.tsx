import type { Metadata } from 'next';
import DiamondExchangeClient from './DiamondExchangeClient';

export const metadata: Metadata = {
    title: 'Diamond Exchange99 - Official Cricket ID Provider in India',
    description: 'Looking for a Diamond Exchange ID? Join Diamond Exchange99, India\'s most trusted Cricket Betting India platform. Instant IDs, secure settlements, and 24/7 support.',
    keywords: [
        'Diamond Exchange99',
        'Diamond Exchange ID',
        'Cricket Betting India',
        'Online Betting ID India',
        'Best Cricket Betting Site',
        'Betting ID WhatsApp',
        'Cricket Exchange India',
        'Live Cricket Betting',
        'Diamond Exchange Official'
    ],
    alternates: {
        canonical: "https://www.daimondexch99.online/diamond-exchange",
    },
    openGraph: {
        title: 'Cricket Betting India - Diamond Exchange99 Official',
        description: 'India\'s most trusted platform for Cricket Betting. Secure, fast, and transparent exchange with 24/7 support.',
    },
};

export default function DiamondExchangePage() {
    return <DiamondExchangeClient />;
}
