import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';

export default function CTA() {
    return (
        <Box sx={{ py: 8, bgcolor: 'primary.main', color: 'white', textAlign: 'center' }}>
            <Container maxWidth="md">
                <Typography variant="h4" fontWeight="bold" gutterBottom>Ready to start your exchange journey?</Typography>
                <Button variant="contained" color="secondary" size="large" sx={{ mt: 2 }}>Get Started Now</Button>
            </Container>
        </Box>
    );
}
