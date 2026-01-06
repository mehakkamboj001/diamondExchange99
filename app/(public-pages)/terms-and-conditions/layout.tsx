import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms & Conditions | Diamond Exchange99',
    description: 'Read the official terms and conditions for Diamond Exchange99. Learn about our rules, 18+ age restrictions, and responsible gaming policies.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
