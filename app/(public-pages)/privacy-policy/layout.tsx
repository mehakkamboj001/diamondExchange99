import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy | Diamond Exchange99',
    description: 'Learn how Diamond Exchange99 protects your personal data and ensures a secure sports analysis environment.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
