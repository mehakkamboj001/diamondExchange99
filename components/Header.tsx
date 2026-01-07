'use client';
import React, { useState } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Container,
    Box,
    IconButton,
    Stack,
    Drawer,
    List,
    ListItem,
    ListItemText,
    useTheme,
    useMediaQuery
} from '@mui/material';
import DiamondIcon from '@mui/icons-material/Diamond';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import { useWhatsApp } from '../src/hooks/useWhatsApp';

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const { handleWhatsAppClick, whatsappLink } = useWhatsApp();

    const navItems = ['Home', 'Our Games', 'Our Promoter', 'Partners', 'FAQ'];

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box sx={{ textAlign: 'center', p: 2, bgcolor: '#0b0d17', height: '100%', color: '#fff' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mb: 4 }}>
                <DiamondIcon sx={{ color: '#e4b04a', fontSize: 32 }} />
                <Typography variant="h6" fontWeight="900" color="#e4b04a">DIAMOND EXCH</Typography>
            </Box>
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemText
                            primary={
                                <Box
                                    onClick={() => handleWhatsAppClick()}
                                    sx={{ cursor: 'pointer', color: '#fff', display: 'block', padding: '10px 0', fontSize: '1rem', fontWeight: 500 }}
                                >
                                    {item}
                                </Box>
                            }
                        />
                    </ListItem>
                ))}
            </List>
            <Button
                variant="contained"
                fullWidth
                onClick={() => handleWhatsAppClick()}
                sx={{
                    mt: 2,
                    bgcolor: '#e4b04a',
                    color: '#000',
                    fontWeight: 'bold',
                    '&:hover': { bgcolor: '#b38728' }
                }}
            >
                SIGN UP
            </Button>
        </Box>
    );

    return (
        <AppBar component="header" position="sticky" elevation={0} sx={{ bgcolor: '#0b0d17', borderBottom: '1px solid rgba(228, 176, 74, 0.2)' }}>
            {/* Top Bar */}
            <Box sx={{ bgcolor: 'rgba(0,0,0,0.3)', borderBottom: '1px solid rgba(228, 176, 74, 0.1)', py: 1 }}>
                <Container maxWidth="xl">
                    <Stack direction="row" alignItems="center" justifyContent="space-between">
                        <Stack direction="row" spacing={1} alignItems="center">
                            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', fontWeight: 500, display: { xs: 'none', sm: 'block' } }}>Reach Us :</Typography>
                            <Stack direction="row" spacing={0.5}>
                                <IconButton
                                    size="small"
                                    sx={{ color: '#e4b04a' }}
                                    onClick={() => handleWhatsAppClick()}
                                    aria-label="Contact on WhatsApp"
                                >
                                    <WhatsAppIcon fontSize="small" />
                                </IconButton>
                            </Stack>
                        </Stack>

                        <Box sx={{
                            flexGrow: 1,
                            mx: { xs: 1, md: 2 },
                            bgcolor: 'rgba(255,255,255,0.05)',
                            borderRadius: 10,
                            border: '1px solid rgba(228, 176, 74, 0.3)',
                            overflow: 'hidden',
                            position: 'relative',
                            height: '24px',
                            display: 'flex',
                            alignItems: 'center',
                            minWidth: 0 // Added to prevent flex expansion
                        }}>
                            <Box component="div" sx={{
                                whiteSpace: 'nowrap',
                                animation: 'marquee 30s linear infinite',
                                color: '#e4b04a',
                                fontSize: '11px',
                                fontWeight: 'bold',
                                px: 2,
                                display: 'inline-block'
                            }}>
                                • Diamond Exchange99: India's Trusted Sports Site • Get Your Official Cricket ID Now • 24/7 Secure Withdrawals
                            </Box>
                            <style>{`
                                @keyframes marquee {
                                    0% { transform: translateX(100%); }
                                    100% { transform: translateX(-100%); }
                                }
                            `}</style>
                        </Box>

                        <Button
                            variant="outlined"
                            size="small"
                            onClick={() => handleWhatsAppClick()}
                            sx={{
                                color: '#e4b04a',
                                borderColor: '#e4b04a',
                                px: { xs: 1.5, md: 3 },
                                borderRadius: 10,
                                fontWeight: 'bold',
                                fontSize: '11px',
                                display: { xs: 'none', sm: 'flex' },
                                '&:hover': { bgcolor: 'rgba(228, 176, 74, 0.1)', borderColor: '#e4b04a' },
                                marginRight: 1
                            }}
                            aria-label="Login to your account"
                        >
                            Login
                        </Button>

                        <Button
                            variant="outlined"
                            size="small"
                            onClick={() => handleWhatsAppClick()}
                            sx={{
                                color: '#e4b04a',
                                borderColor: '#e4b04a',
                                px: { xs: 1.5, md: 3 },
                                borderRadius: 10,
                                fontWeight: 'bold',
                                fontSize: '11px',
                                display: { xs: 'none', sm: 'flex' },
                                '&:hover': { bgcolor: 'rgba(228, 176, 74, 0.1)', borderColor: '#e4b04a' }
                            }}
                            aria-label="Register for a new Diamond Exchange ID"
                        >
                            SIGN UP
                        </Button>
                    </Stack>
                </Container>
            </Box>

            {/* Main Nav */}
            <Container maxWidth="xl">
                <Toolbar component="nav" disableGutters sx={{ minHeight: { xs: '50px !important', md: '70px !important' } }}>
                    <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none', color: 'inherit' }} title="Diamond Exchange Home">
                        <DiamondIcon sx={{ color: '#e4b04a', fontSize: { xs: 24, md: 32 } }} />
                        <Typography variant="h6" component="h2" fontWeight="900" sx={{ color: '#fff', letterSpacing: 1, fontSize: { xs: '1.1rem', md: '1.4rem' } }}>
                            DIAMOND <Box component="span" sx={{ color: '#e4b04a' }}>EXCH</Box>
                        </Typography>
                    </Link>

                    <Box sx={{ flexGrow: 1 }} />

                    {/* Desktop Menu */}
                    <Stack direction="row" spacing={4} sx={{ display: { xs: 'none', md: 'flex' } }}>
                        {navItems.map((item) => (
                            <Box
                                key={item}
                                onClick={() => handleWhatsAppClick()}
                                sx={{
                                    cursor: 'pointer',
                                    color: '#fff',
                                    fontSize: '15px',
                                    fontWeight: 600,
                                    textTransform: 'uppercase',
                                    letterSpacing: 0.5,
                                    transition: 'color 0.3s ease',
                                    '&:hover': { color: '#e4b04a' }
                                }}
                                aria-label={`View ${item} page`}
                            >
                                {item}
                            </Box>
                        ))}
                    </Stack>

                    {/* Mobile Menu Toggle */}
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ ml: 2, display: { md: 'none' }, color: '#e4b04a' }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </Container>

            {/* Mobile Drawer */}
            <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{ keepMounted: true }}
                sx={{
                    display: { xs: 'block', md: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 280, bgcolor: '#0b0d17' },
                }}
            >
                {drawer}
            </Drawer>
        </AppBar>
    );
}
