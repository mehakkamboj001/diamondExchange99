import type { Metadata } from 'next';
import DiamondExchangeClient from './DiamondExchangeClient';

export const metadata: Metadata = {
    title: 'Diamond Exchange | Online Betting ID & Sports Exchange',
    description: 'Get your official Diamond Exchange ID instantly. Join India\'s most trusted sports betting platform with fast withdrawals, 24/7 support, and the best odds on cricket, football, and tennis.',
    keywords: ['cricket id', 'betting id', 'online sports betting', 'diamond exchange id', 'sports exchange india'],
    alternates: {
        canonical: "https://www.daimondexch99.online/diamond-Exchange",
    },
    openGraph: {
        title: 'Diamond Exchange | Official Betting ID',
        description: 'Join the world\'s leading sports exchange. Secure, fast, and transparent.',
    },
};

export default function DiamondExchangePage() {
    return <DiamondExchangeClient />;
}
