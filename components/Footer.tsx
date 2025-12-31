'use client';
import React from 'react';
import { Box, Container, Typography, Grid, IconButton, Stack, Link as MuiLink } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Link from 'next/link';
import { useWhatsApp } from '../src/hooks/useWhatsApp';

export default function Footer() {
    const { handleWhatsAppClick } = useWhatsApp();
    const paymentIcons = [
        { name: 'Bank Deposit', img: 'https://diamond247sports.com/assets/img/icon/bank.png' },
        { name: 'Bitcoin', img: 'https://diamond247sports.com/assets/img/icon/bitcoin.png' },
        { name: 'Paytm', img: 'https://diamond247sports.com/assets/img/icon/paytm.png' },
        { name: 'PhonePe', img: 'https://diamond247sports.com/assets/img/icon/phone-pe.png' },
        { name: 'GPay', img: 'https://diamond247sports.com/assets/img/icon/gpay.png' },
        { name: 'UPI', img: 'https://diamond247sports.com/assets/img/icon/upi.png' },
        { name: 'PayPal', img: 'https://diamond247sports.com/assets/img/icon/paypal.png' },
        { name: 'Ether', img: 'https://diamond247sports.com/assets/img/icon/ether.png' },
        { name: 'USDT', img: 'https://diamond247sports.com/assets/img/icon/usdt.png' },
    ];

    const linkSections = [
        {
            title: 'Our Partners',
            links: []
        },
        {
            title: 'Top Betting Links',
            links: []
        },
        {
            title: 'Sports links',
            links: []
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
                        <Typography variant="h5" fontWeight="900" sx={{ mb: 2, color: '#fff', letterSpacing: 1 }}>
                            DIAMOND <Box component="span" sx={{ color: '#e4b04a' }}>EXCHANGE99</Box>
                        </Typography>
                        <Typography variant="body2" sx={{ opacity: 0.6, mb: 3, lineHeight: 1.8, fontSize: '0.9rem' }}>
                            Diamond Exchange99 is the world's leading sports exchange and betting platform. Established in 2003, providing secure and transparent gaming.
                        </Typography>
                        <Stack direction="row" spacing={1.5}>
                            {/* <IconButton sx={{ bgcolor: 'rgba(228, 176, 74, 0.1)', color: '#e4b04a', '&:hover': { bgcolor: '#e4b04a', color: '#000' } }}>
                                <InstagramIcon fontSize="small" />
                            </IconButton> */}
                            <IconButton
                                onClick={() => handleWhatsAppClick()}
                                sx={{ bgcolor: 'rgba(37, 211, 102, 0.1)', color: '#25D366', '&:hover': { bgcolor: '#25D366', color: '#fff' } }}
                            >
                                <WhatsAppIcon fontSize="small" />
                            </IconButton>
                        </Stack>
                    </Grid>

                    {/* Links */}
                    {linkSections.map((section) => (
                        <Grid size={{ xs: 6, md: 3 }} key={section.title}>
                            <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 3, color: '#e4b04a', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: 1 }}>
                                {section.title}
                            </Typography>
                            <Stack spacing={1.5}>
                                {section.links.map((link) => (
                                    <Link
                                        key={link}
                                        href="#"
                                        style={{
                                            color: 'rgba(255,255,255,0.7)',
                                            textDecoration: 'none',
                                            fontSize: '14px',
                                            transition: 'all 0.2s ease'
                                        }}
                                    >
                                        {link}
                                    </Link>
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
