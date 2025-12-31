import React from 'react';
import { Container, Typography, Box } from '@mui/material';

export default function AboutPage() {
    return (
        <Container maxWidth="md" sx={{ py: 10 }}>
            <Typography variant="h3" fontWeight="bold" gutterBottom>About Us</Typography>
            <Typography variant="body1">Placeholder for About page content.</Typography>
        </Container>
    );
}
