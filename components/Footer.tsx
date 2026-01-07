'use client';
import React from 'react';
import { Box, Container, Typography, Grid, IconButton, Stack, Link as MuiLink } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Link from 'next/link';
import { useWhatsApp } from '../src/hooks/useWhatsApp';

export default function Footer() {
    const { handleWhatsAppClick } = useWhatsApp();

    const linkSections = [
        {
            title: 'Our Partners',
            links: [
                { name: 'A', path: '#' },
            ]
        },
        {
            title: 'Quick Links',
            links: [
                { name: 'Terms & Conditions', path: '/terms-and-conditions' },
                { name: 'Privacy Policy', path: '/privacy-policy' },
            ]
        },
        {
            title: 'Sports Links',
            links: [
                { name: 'Cricket', path: '#' },
            ]
        }
    ];

    return (
        <Box component="footer" sx={{ bgcolor: '#0b0d17', color: '#fff', pt: 8, pb: 4, borderTop: '1px solid rgba(228, 176, 74, 0.2)' }}>
            <Container maxWidth="xl">
                {/* Payment Strip */}
                {/* <Box sx={{
                    bgcolor: 'rgba(255,255,255,0.02)',
                    py: 3,
                    px: 4,
                    borderRadius: 4,
                    mb: 8,
                    overflow: 'hidden',
                    border: '1px solid rgba(255,255,255,0.05)'
                }}>
                    <Stack direction="row" spacing={6} justifyContent="center" alignItems="center" sx={{ flexWrap: 'wrap', gap: 3 }}>
                        {paymentIcons.map((icon) => (
                            <Box key={icon.name} sx={{ textAlign: 'center' }}>
                                <Box
                                    component="img"
                                    src={icon.img}
                                    alt={icon.name}
                                    sx={{ height: 35, filter: 'brightness(1.2) grayscale(0.5)', transition: 'all 0.3s ease', '&:hover': { filter: 'brightness(1.5) grayscale(0)', transform: 'scale(1.1)' }, mb: 1 }}
                                />
                                <Typography variant="caption" sx={{ display: 'block', fontSize: '10px', opacity: 0.5, color: '#fff' }}>{icon.name}</Typography>
                            </Box>
                        ))}
                    </Stack>
                </Box> */}

                <Grid container spacing={4}>
                    {/* Brand Info */}
                    <Grid size={{ xs: 12, md: 3 }}>
                        <Typography variant="h5" component="h2" fontWeight="900" sx={{ mb: 2, color: '#fff', letterSpacing: 1 }}>
                            DIAMOND <Box component="span" sx={{ color: '#e4b04a' }}>EXCHANGE99</Box>
                        </Typography>
                        <Typography variant="body2" sx={{ opacity: 0.6, mb: 3, lineHeight: 1.8, fontSize: '0.9rem' }}>
                            Diamond Exchange99 is the world's leading sports exchange. Providing secure and transparent online Cricket IDs for Indian users since 2025.
                        </Typography>
                        <Stack direction="row" spacing={1.5}>
                            <IconButton
                                onClick={() => handleWhatsAppClick()}
                                sx={{ bgcolor: 'rgba(37, 211, 102, 0.1)', color: '#25D366', '&:hover': { bgcolor: '#25D366', color: '#fff' } }}
                                aria-label="Contact support on WhatsApp"
                            >
                                <WhatsAppIcon fontSize="small" />
                            </IconButton>
                        </Stack>
                    </Grid>

                    {/* Links */}
                    {linkSections.map((section) => (
                        <Grid size={{ xs: 6, md: 3 }} key={section.title} component="nav" aria-label={section.title}>
                            <Typography variant="subtitle1" component="h3" fontWeight="bold" sx={{ mb: 3, color: '#e4b04a', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: 1 }}>
                                {section.title}
                            </Typography>
                            <Stack spacing={1.5} component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                                {section.links.map((link) => (
                                    <Box component="li" key={link.name}>
                                        <Link
                                            href={link.path}
                                            style={{
                                                color: 'rgba(255,255,255,0.7)',
                                                textDecoration: 'none',
                                                fontSize: '14px',
                                                transition: 'all 0.2s ease'
                                            }}
                                            title={`Go to ${link.name}`}
                                        >
                                            {link.name}
                                        </Link>
                                    </Box>
                                ))}
                            </Stack>
                        </Grid>
                    ))}
                </Grid>

                <Box sx={{ mt: 8, pt: 4, borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
                    <Typography variant="caption" sx={{ opacity: 0.4, letterSpacing: 0.5 }}>
                        © 2003-{new Date().getFullYear()} DIAMOND EXCH. ALL RIGHTS RESERVED. | 18+ PLAY RESPONSIBLY
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}
