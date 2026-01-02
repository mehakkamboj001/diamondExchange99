import type { Metadata } from 'next';
import DiamondExchangeClient from './DiamondExchangeClient';

export const metadata: Metadata = {
    title: 'Diamond Exchange99 | Secure Sports Analysis & Portal Access',
    description: 'Get your official Diamond Exchange access key instantly. Join India\'s most trusted sports analysis platform with secure settlements, 24/7 support, and elite performance tracking.',
    keywords: ['sports interaction', 'data analysis portal', 'strategic sports management', 'diamond exchange access', 'sports performance metrics india'],
    alternates: {
        canonical: "https://www.daimondexch99.online/diamond-exchange",
    },
    openGraph: {
        title: 'Diamond Exchange | Professional Sports Management',
        description: 'Global leader in sports analysis and strategic data interaction. Secure, fast, and transparent.',
    },
};

export default function DiamondExchangePage() {
    return <DiamondExchangeClient />;
}
