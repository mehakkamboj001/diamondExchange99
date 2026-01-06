'use client';
import React from 'react';
import { Box, Container, Typography, Paper, Divider, Stack } from '@mui/material';
import GavelIcon from '@mui/icons-material/Gavel';
import WarningIcon from '@mui/icons-material/Warning';

export default function TermsAndConditions() {
    return (
        <Box sx={{ bgcolor: '#0b0d17', minHeight: '100vh', py: { xs: 8, md: 12 }, color: '#fff' }}>
            <Container maxWidth="md">
                <Paper
                    elevation={0}
                    sx={{
                        p: { xs: 4, md: 6 },
                        bgcolor: 'rgba(255,255,255,0.02)',
                        borderRadius: 6,
                        border: '1px solid rgba(228, 176, 74, 0.2)',
                        color: '#fff'
                    }}
                >
                    <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 4 }}>
                        <GavelIcon sx={{ color: '#e4b04a', fontSize: 40 }} />
                        <Typography variant="h3" fontWeight="900" sx={{ color: '#e4b04a' }}>
                            Terms & Conditions
                        </Typography>
                    </Stack>

                    <Box sx={{ mb: 6, p: 3, bgcolor: 'rgba(228, 176, 74, 0.1)', borderRadius: 4, border: '1px solid #e4b04a' }}>
                        <Stack direction="row" spacing={2} alignItems="flex-start">
                            <WarningIcon sx={{ color: '#e4b04a', mt: 0.5 }} />
                            <Typography variant="h6" fontWeight="bold" color="#e4b04a">
                                AGE RESTRICTION: 18+ ONLY
                            </Typography>
                        </Stack>
                        <Typography variant="body1" sx={{ mt: 1, opacity: 0.9 }}>
                            By using this platform, you certify that you are at least 18 years of age. Sports analysis and strategic interaction involve financial risk and can be addictive. Please play responsibly.
                        </Typography>
                    </Box>

                    <Stack spacing={4}>
                        <section>
                            <Typography variant="h5" fontWeight="bold" gutterBottom color="#e4b04a">
                                1. Acceptance of Terms
                            </Typography>
                            <Typography variant="body1" sx={{ opacity: 0.7, lineHeight: 1.8 }}>
                                By accessing or using Diamond Exchange99, you agree to be bound by these Terms and Conditions. If you do not agree to all terms, you must not use our services.
                            </Typography>
                        </section>

                        <Divider sx={{ bgcolor: 'rgba(228, 176, 74, 0.1)' }} />

                        <section>
                            <Typography variant="h5" fontWeight="bold" gutterBottom color="#e4b04a">
                                2. User Accounts
                            </Typography>
                            <Typography variant="body1" sx={{ opacity: 0.7, lineHeight: 1.8 }}>
                                Users are responsible for maintaining the confidentiality of their account details. Any activity under your account is your sole responsibility. Multiple accounts per user are strictly prohibited and may lead to permanent suspension.
                            </Typography>
                        </section>

                        <Divider sx={{ bgcolor: 'rgba(228, 176, 74, 0.1)' }} />

                        <section>
                            <Typography variant="h5" fontWeight="bold" gutterBottom color="#e4b04a">
                                3. Strategic Fair Play
                            </Typography>
                            <Typography variant="body1" sx={{ opacity: 0.7, lineHeight: 1.8 }}>
                                Any form of manual or automated manipulation, including bot usage or coordinated activity, is strictly forbidden. We reserve the right to audit accounts and void transactions if unfair practices are detected.
                            </Typography>
                        </section>

                        <Divider sx={{ bgcolor: 'rgba(228, 176, 74, 0.1)' }} />

                        <section>
                            <Typography variant="h5" fontWeight="bold" gutterBottom color="#e4b04a">
                                4. Settlements and Withdrawals
                            </Typography>
                            <Typography variant="body1" sx={{ opacity: 0.7, lineHeight: 1.8 }}>
                                Withdrawals are processed according to our standard internal timelines. Users must ensure all registration details are accurate to avoid delays. Technical errors in data feeds will be handled according to our standard dispute resolution protocol.
                            </Typography>
                        </section>

                        <Divider sx={{ bgcolor: 'rgba(228, 176, 74, 0.1)' }} />

                        <section>
                            <Typography variant="h5" fontWeight="bold" gutterBottom color="#e4b04a">
                                5. Responsible Gaming
                            </Typography>
                            <Typography variant="body1" sx={{ opacity: 0.7, lineHeight: 1.8 }}>
                                Diamond Exchange99 promotes responsible sports interaction. We provide tools for self-exclusion and limit setting. If you feel your sports analysis activities are becoming problematic, please seek professional assistance.
                            </Typography>
                        </section>

                        <Divider sx={{ bgcolor: 'rgba(228, 176, 74, 0.1)' }} />

                        <section>
                            <Typography variant="h5" fontWeight="bold" gutterBottom color="#e4b04a">
                                6. Governing Law
                            </Typography>
                            <Typography variant="body1" sx={{ opacity: 0.7, lineHeight: 1.8 }}>
                                These terms are governed by international standards of sports data interaction and local regulations where applicable.
                            </Typography>
                        </section>
                    </Stack>

                    <Box sx={{ mt: 8, textAlign: 'center', opacity: 0.5 }}>
                        <Typography variant="body2">
                            Last Updated: January 2026
                        </Typography>
                    </Box>
                </Paper>
            </Container>
        </Box>
    );
}
