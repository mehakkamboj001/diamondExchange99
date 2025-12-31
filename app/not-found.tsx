import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import Link from 'next/link';

export default function NotFound() {
    return (
        <Container maxWidth="md" sx={{ py: 15, textAlign: 'center' }}>
            <Typography variant="h1" fontWeight="bold" color="primary">404</Typography>
            <Typography variant="h4" sx={{ mb: 4 }}>Oops! Page not found.</Typography>
            <Typography variant="body1" sx={{ mb: 6, opacity: 0.7 }}>
                The page you are looking for might have been moved or deleted.
            </Typography>
            <Link href="/" passHref style={{ textDecoration: 'none' }}>
                <Button variant="contained" size="large">
                    Go Back Home
                </Button>
            </Link>
        </Container>
    );
}
