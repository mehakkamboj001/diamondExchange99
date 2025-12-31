'use client';
import React from 'react';
import { Box, Container, Typography, Button, Paper, Stack, Avatar } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import HeadsetMicIcon from '@mui/icons-material/SupportAgent';
import QueryStatsIcon from '@mui/icons-material/QueryStats';

import { useWhatsApp } from '../../../src/hooks/useWhatsApp';

export default function WhatsAppHelpPage() {
    const { handleWhatsAppClick } = useWhatsApp();

    return (
        <Box sx={{ bgcolor: 'background.default', minHeight: '80vh', py: 8 }}>
            <Container maxWidth="md">
                <Paper elevation={0} sx={{ p: { xs: 4, md: 8 }, borderRadius: 4, bgcolor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', textAlign: 'center' }}>
                    <Avatar sx={{ width: 80, height: 80, bgcolor: '#25D366', mx: 'auto', mb: 4 }}>
                        <WhatsAppIcon sx={{ fontSize: 50 }} />
                    </Avatar>

                    <Typography variant="h3" fontWeight="bold" gutterBottom color="primary">
                        Instant WhatsApp Support
                    </Typography>

                    <Typography variant="h6" sx={{ mb: 6, opacity: 0.8 }}>
                        Get your ID created instantly or resolve any issues via our official WhatsApp help desk.
                        Our team is available 24/7 to assist you.
                    </Typography>

                    <Stack spacing={4} sx={{ maxWidth: 500, mx: 'auto', mb: 8 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, textAlign: 'left' }}>
                            <HeadsetMicIcon color="primary" />
                            <Typography variant="body1">Request new betting IDs and login details.</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, textAlign: 'left' }}>
                            <QueryStatsIcon color="primary" />
                            <Typography variant="body1">Get help with deposits and withdrawals.</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, textAlign: 'left' }}>
                            <WhatsAppIcon color="primary" />
                            <Typography variant="body1">Real-time chat with our support professional.</Typography>
                        </Box>
                    </Stack>

                    <Button
                        variant="contained"
                        size="large"
                        onClick={() => handleWhatsAppClick("Hi, I need help with Diamond Exchange ID.")}
                        sx={{
                            bgcolor: '#25D366',
                            color: 'white',
                            px: 8,
                            py: 2,
                            fontSize: '1.2rem',
                            '&:hover': { bgcolor: '#128C7E' }
                        }}
                        startIcon={<WhatsAppIcon />}
                    >
                        Chat on WhatsApp
                    </Button>

                    <Typography variant="body2" sx={{ mt: 4, opacity: 0.5 }}>
                        Estimated response time: Under 2 minutes.
                    </Typography>
                </Paper>
            </Container>
        </Box>
    );
}
