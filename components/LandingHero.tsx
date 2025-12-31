import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';

export default function LandingHero({ title, subtitle }: { title: string, subtitle: string }) {
    return (
        <Box sx={{ py: 12, bgcolor: 'background.paper', textAlign: 'center' }}>
            <Container maxWidth="md">
                <Typography variant="h2" fontWeight="bold" gutterBottom>{title}</Typography>
                <Typography variant="h5" sx={{ mb: 4, opacity: 0.8 }}>{subtitle}</Typography>
                <Button variant="contained" size="large">Join Now</Button>
            </Container>
        </Box>
    );
}
