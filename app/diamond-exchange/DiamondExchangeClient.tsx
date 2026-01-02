'use client';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../src/redux/hooks';
import { fetchActiveWhatsAppNumber, trackWhatsAppClick } from './diamondExchangeSlice';
import {
    Box,
    Container,
    Typography,
    Button,
    Grid,
    Paper,
    Stack,
    Fab,
    useTheme,
    alpha,
    Divider,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ShieldIcon from '@mui/icons-material/Shield';
import SecurityIcon from '@mui/icons-material/Security';
import PeopleIcon from '@mui/icons-material/People';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

import Image from 'next/image';
import { useWhatsApp } from '../../src/hooks/useWhatsApp';

const StatCard = ({ title, Icon, desc }: any) => (
    <Paper
        elevation={0}
        component="article"
        sx={{
            p: 3,
            textAlign: 'center',
            bgcolor: '#1c1f2b',
            borderRadius: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 1,
            minHeight: '150px',
            justifyContent: 'center',
            border: '1px solid rgba(228, 176, 74, 0.1)',
            transition: 'all 0.3s ease',
            '&:hover': {
                transform: 'translateY(-5px)',
                borderColor: '#e4b04a',
                boxShadow: '0 10px 30px rgba(228, 176, 74, 0.1)'
            }
        }}
    >
        <Icon sx={{ fontSize: 60, color: '#e4b04a', mb: 1, filter: 'drop-shadow(0 0 5px rgba(228, 176, 74, 0.5))' }} aria-hidden="true" />
        <Typography variant="h6" component="h3" fontWeight="bold" color="#e4b04a">{title}</Typography>
        <Typography variant="body2" color="rgba(255,255,255,0.7)">{desc}</Typography>
    </Paper>
);

const StepCard = ({ number, title, desc }: any) => (
    <Box component="article" sx={{ position: 'relative', p: 3, bgcolor: 'rgba(255,255,255,0.03)', borderRadius: 4, borderLeft: '4px solid #e4b04a' }}>
        <Typography variant="h2" component="span" sx={{ position: 'absolute', right: 20, top: 10, opacity: 0.05, fontWeight: 900 }} aria-hidden="true">{number}</Typography>
        <Typography variant="h6" component="h3" fontWeight="bold" color="#e4b04a" gutterBottom>{title}</Typography>
        <Typography variant="body2" color="rgba(255,255,255,0.7)">{desc}</Typography>
    </Box>
);

const IDServiceCard = ({ title, subtitle, points, btnText }: any) => (
    <Paper
        elevation={0}
        component="article"
        sx={{
            p: 4,
            height: '100%',
            background: 'linear-gradient(135deg, #1c1f2b 0%, #0b0d17 100%)',
            borderRadius: 6,
            border: '1px solid rgba(228, 176, 74, 0.2)',
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.4)',
            transition: 'all 0.3s ease',
            display: 'flex',
            flexDirection: 'column',
            '&:hover': {
                transform: 'translateY(-10px)',
                borderColor: '#e4b04a',
                boxShadow: '0 15px 50px rgba(228, 176, 74, 0.1)',
            }
        }}
    >
        <Box sx={{
            display: 'inline-block',
            bgcolor: 'rgba(228, 176, 74, 0.1)',
            color: '#e4b04a',
            px: 2,
            py: 0.5,
            borderRadius: 2,
            fontSize: '0.8rem',
            fontWeight: 'bold',
            mb: 2,
            alignSelf: 'center',
            border: '1px solid rgba(228, 176, 74, 0.3)'
        }}>
            {btnText}
        </Box>
        <Typography variant="h5" component="h3" align="center" fontWeight="900" sx={{ mb: 1, color: '#fff' }}>{title}</Typography>
        <Typography variant="subtitle2" align="center" sx={{ mb: 4, color: '#e4b04a', fontWeight: 600 }}>{subtitle}</Typography>

        <Stack spacing={2} sx={{ mb: 3, flexGrow: 1 }}>
            {points.map((point: string) => (
                <Stack key={point} direction="row" spacing={1.5} alignItems="flex-start">
                    <Box sx={{ width: 6, height: 6, bgcolor: '#e4b04a', borderRadius: '2px', mt: 1, boxShadow: '0 0 8px rgba(228, 176, 74, 0.5)' }} aria-hidden="true" />
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.5 }}>{point}</Typography>
                </Stack>
            ))}
        </Stack>
    </Paper>
);

export default function DiamondExchangeClient() {
    const theme = useTheme();
    const { handleWhatsAppClick, loading, activeWhatsAppNumber } = useWhatsApp();

    return (
        <Box component="main" sx={{ bgcolor: '#0b0d17', minHeight: '100vh', color: '#fff', overflowX: 'hidden' }}>
            {/* Hero Section */}
            <Box component="section" sx={{
                position: 'relative',
                height: { xs: 'auto', md: '600px' },
                display: 'flex',
                alignItems: 'center',
                pt: { xs: 8, md: 0 },
                overflow: 'hidden'
            }}>
                <Image
                    src="/images/hero.png"
                    alt="Diamond Exchange Sports Portal"
                    fill
                    priority
                    style={{ objectFit: 'cover', zIndex: 0 }}
                />
                <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
                    <Stack spacing={3} sx={{ maxWidth: 850, color: '#fff', py: { xs: 8, sm: 12, md: 0 }, px: { xs: 2, md: 0 } }}>
                        <Typography variant="h2" component="h1" fontWeight="900" sx={{
                            lineHeight: 1.1,
                            textTransform: 'uppercase',
                            fontSize: { xs: '2rem', sm: '3.5rem', md: '4.5rem' },
                            textShadow: '2px 2px 10px rgba(0,0,0,0.5)'
                        }}>
                            Advanced Sports Interaction with <Box component="span" sx={{ color: '#e4b04a' }}>Diamond Exchange99</Box>
                        </Typography>
                        <Typography variant="h4" component="p" fontWeight="bold" sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, color: '#fff', opacity: 0.9 }}>
                            India's Premier Digital Sports Analysis Destination
                        </Typography>
                        <Box sx={{ width: 120, height: 6, bgcolor: '#e4b04a', borderRadius: 3 }} aria-hidden="true" />
                        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: 2 }}>
                            <Button
                                variant="contained"
                                onClick={() => handleWhatsAppClick()}
                                sx={{ bgcolor: '#e4b04a', color: '#000', fontWeight: 'bold', px: 4, py: 1.5, fontSize: '1.1rem', '&:hover': { bgcolor: '#c99a3b' } }}
                                aria-label="Get your access pass now"
                            >
                                Get Access Now
                            </Button>
                            <Button
                                variant="outlined"
                                onClick={() => handleWhatsAppClick()}
                                sx={{ color: '#fff', borderColor: '#fff', px: 4, py: 1.5, fontSize: '1.1rem', '&:hover': { borderColor: '#e4b04a', color: '#e4b04a' } }}
                                aria-label="Explore platform solutions"
                            >
                                Platform Overview
                            </Button>
                        </Stack>
                    </Stack>
                </Container>
            </Box>

            {/* Welcome Section */}
            <Box sx={{ bgcolor: '#1c1f2b', color: '#fff', py: { xs: 8, md: 12 }, borderTop: '1px solid rgba(228, 176, 74, 0.2)' }}>
                <Container maxWidth="xl">
                    <Grid container spacing={8} alignItems="center">
                        <Grid size={{ xs: 12, md: 7 }}>
                            <Typography variant="h3" fontWeight="900" gutterBottom sx={{ fontSize: { xs: '1.8rem', sm: '2.8rem', md: '3.5rem' }, color: '#e4b04a', mb: 4 }}>
                                Welcome to Diamond Exchange: India's Trusted Performance Portal
                            </Typography>
                            <Typography variant="body1" sx={{ opacity: 0.9, lineHeight: 1.9, mb: 3, fontSize: { xs: '1.1rem', md: '1.25rem' } }}>
                                At DiamondExchange99, we provide the most reliable <b>Digital Access Keys</b> for sports enthusiasts. Our platform is built for professional analysis and seamless sports interaction across all major global tournaments.
                            </Typography>
                            <Typography variant="body1" sx={{ opacity: 0.9, lineHeight: 1.9, mb: 4, fontStyle: 'italic' }}>
                                "Join the elite sports community and experience the power of real-time performance tracking with our premium services."
                            </Typography>
                            <Stack direction="row" spacing={4} sx={{ mt: 4 }}>
                                <Box>
                                    <Typography variant="h5" fontWeight="bold" color="#e4b04a">100+</Typography>
                                    <Typography variant="body2" sx={{ opacity: 0.7 }}>Analysis Pools</Typography>
                                </Box>
                                <Divider orientation="vertical" flexItem sx={{ bgcolor: 'rgba(228, 176, 74, 0.3)' }} />
                                <Box>
                                    <Typography variant="h5" fontWeight="bold" color="#e4b04a">Instant</Typography>
                                    <Typography variant="body2" sx={{ opacity: 0.7 }}>Settlements</Typography>
                                </Box>
                                <Divider orientation="vertical" flexItem sx={{ bgcolor: 'rgba(228, 176, 74, 0.3)' }} />
                                <Box>
                                    <Typography variant="h5" fontWeight="bold" color="#e4b04a">24/7</Typography>
                                    <Typography variant="body2" sx={{ opacity: 0.7 }}>Support</Typography>
                                </Box>
                            </Stack>
                        </Grid>
                        <Grid size={{ xs: 12, md: 5 }}>
                            <Box sx={{ p: 4, bgcolor: 'rgba(228, 176, 74, 0.05)', borderRadius: 8, border: '1px solid rgba(228, 176, 74, 0.2)' }}>
                                <Typography variant="h5" fontWeight="bold" color="#e4b04a" gutterBottom>Comprehensive Solutions</Typography>
                                <Stack spacing={2} sx={{ mt: 3 }}>
                                    {[
                                        'Multiple Secure Access Options',
                                        'Exclusive Responsive Mobile Portal',
                                        'Secure SSL Encrypted Architecture',
                                        'Global Sports Data Coverage',
                                        'High Reliability & Technical Support'
                                    ].map((text) => (
                                        <Stack key={text} direction="row" spacing={2} alignItems="flex-start">
                                            <VerifiedUserIcon sx={{ color: '#e4b04a', mt: 0.5 }} />
                                            <Typography variant="body1">{text}</Typography>
                                        </Stack>
                                    ))}
                                </Stack>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* How to Get Started */}
            <Box component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: '#0b0d17' }}>
                <Container maxWidth="xl">
                    <Typography variant="h3" component="h2" textAlign="center" fontWeight="900" color="#e4b04a" gutterBottom sx={{ mb: 8 }}>
                        Start Your Journey in 4 Simple Steps
                    </Typography>
                    <Grid container spacing={3}>
                        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                            <StepCard
                                number="01"
                                title="Registration"
                                desc="Securely sign up with your credentials and create a unique profile on our portal."
                            />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                            <StepCard
                                number="02"
                                title="Verification"
                                desc="Complete a simple identity check to ensure account security and compliance."
                            />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                            <StepCard
                                number="03"
                                title="Account Funding"
                                desc="Choose from multiple secure settlement methods to manage your sports portfolio."
                            />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                            <StepCard
                                number="04"
                                title="Live Interaction"
                                desc="Access professional sports consoles and start your strategic analysis journey."
                            />
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Professional ID Solutions Section */}
            <Box component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: '#0b0d17', position: 'relative', overflow: 'hidden' }}>
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '100%',
                    height: '100%',
                    background: 'radial-gradient(circle, rgba(228, 176, 74, 0.05) 0%, transparent 70%)',
                    zIndex: 0
                }} aria-hidden="true" />
                <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
                    <Typography variant="h3" component="h2" textAlign="center" fontWeight="900" color="#e4b04a" gutterBottom sx={{ mb: 8 }}>
                        Professional Sports Management Services
                    </Typography>

                    <Grid container spacing={4}>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <IDServiceCard
                                btnText="Get Portal Entry"
                                title="Master Account Provider"
                                subtitle="Professional Resource Management"
                                points={[
                                    "India's leading trusted sports portal management",
                                    "Seamless account settlements and 24/7 support",
                                    "Direct sub-account generation and tracking",
                                    "Exclusive high-definition match analysis streaming"
                                ]}
                            />
                        </Grid>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <IDServiceCard
                                btnText="Get Super Access"
                                title="Senior Portal Access"
                                subtitle="Total Strategic Control"
                                points={[
                                    "Premier sports exchange architecture management",
                                    "Advanced capability for multi-tier account generation",
                                    "Comprehensive real-time activity tracking consoles",
                                    "Ultra-low latency sports data integration"
                                ]}
                            />
                        </Grid>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <IDServiceCard
                                btnText="Get Agent Console"
                                title="Agent Support Tools"
                                subtitle="Infrastructure Solutions"
                                points={[
                                    "Consolidated Agent and Admin control dashboards",
                                    "Priority placement in top-tier sports networks",
                                    "State-of-the-art secure mobile interfaces",
                                    "24/7 expert technical assistance"
                                ]}
                            />
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Stats Cards Section */}
            <Box component="section" sx={{
                position: 'relative',
                py: { xs: 8, md: 12 },
                overflow: 'hidden',
                borderTop: '1px solid rgba(228, 176, 74, 0.1)',
                borderBottom: '1px solid rgba(228, 176, 74, 0.1)'
            }}>
                {/* <Image
                    src="/images/hero.png"
                    alt="Statistics Background"
                    fill
                    style={{ objectFit: 'cover', zIndex: 0, opacity: 0.1 }}
                /> */}
                <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
                    <Grid container spacing={3}>
                        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                            <StatCard
                                title="50 Lakh+"
                                Icon={PeopleIcon}
                                desc="Verified Community Members"
                            />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                            <StatCard
                                title="24*7"
                                Icon={SupportAgentIcon}
                                desc="Expert Relationship Support"
                            />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                            <StatCard
                                title="Unlimited"
                                Icon={SportsEsportsIcon}
                                desc="Strategic Sports Metrics"
                            />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                            <StatCard
                                title="Tiered Rewards"
                                Icon={ShieldIcon}
                                desc="Secure Incentives for Loyalty"
                            />
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Betting Options Section */}
            <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: '#0b0d17', color: '#fff' }}>
                <Container maxWidth="xl">
                    <Grid container spacing={8} alignItems="center">
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Typography variant="h3" fontWeight="900" color="#e4b04a" gutterBottom sx={{ mb: 4 }}>
                                Advanced Sports Analysis
                            </Typography>
                            <Typography variant="body1" color="rgba(255,255,255,0.7)" paragraph sx={{ mb: 6, fontSize: '1.1rem' }}>
                                From predicting match statistics to analyzing player trends, we offer a professional environment matched by your knowledge of the sports ecosystem.
                            </Typography>

                            <Grid container spacing={4}>
                                {[
                                    { t: 'Performance Analysis', d: 'Track victorious outcomes.' },
                                    { t: 'Strategic Insights', d: 'Analyze leading metrics.' },
                                    { t: 'Market Ratios', d: 'Predict sports trends.' },
                                    { t: 'Pre-event Data', d: 'Analyze initial statistics.' },
                                    { t: 'Professional Tools', d: 'Elite player tracking.' },
                                    { t: 'Data Analytics', d: 'Compare historical performance.' }
                                ].map((option) => (
                                    <Grid size={{ xs: 12, sm: 6 }} key={option.t}>
                                        <Stack spacing={1}>
                                            <Stack direction="row" spacing={1} alignItems="center">
                                                <Box sx={{ width: 10, height: 10, bgcolor: '#e4b04a', borderRadius: '50%' }} />
                                                <Typography variant="h6" fontWeight="bold" sx={{ color: '#fff' }}>{option.t}</Typography>
                                            </Stack>
                                            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)', ml: 2.5 }}>{option.d}</Typography>
                                        </Stack>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Box sx={{ position: 'relative' }}>
                                <Box sx={{
                                    position: 'absolute',
                                    bottom: -20,
                                    right: -20,
                                    bgcolor: '#e4b04a',
                                    p: 3,
                                    borderRadius: 4,
                                    display: { xs: 'none', md: 'block' }
                                }}>
                                    <Typography variant="h5" fontWeight="bold" color="#000">100% Secure</Typography>
                                    <Typography variant="body2" color="#000">Verified Web Presence</Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Diamond Exchange99 Gaming Section */}
            <Box component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: '#0b0d17' }}>
                <Container maxWidth="xl">
                    <Stack spacing={4} textAlign="center" sx={{ mb: 8 }}>
                        <Typography variant="h3" component="h2" fontWeight="900" color="#e4b04a">
                            Diamond Exchange Professional Ecosystem
                        </Typography>
                        <Typography variant="body1" sx={{ opacity: 0.8, fontSize: '1.2rem', maxWidth: 900, mx: 'auto' }}>
                            Explore our comprehensive range of sports metrics and interact with a seamless, immersive dashboard for all strategic enthusiasts.
                        </Typography>
                    </Stack>

                    <TableContainer component={Paper} sx={{
                        bgcolor: '#1c1f2b',
                        borderRadius: 6,
                        border: '1px solid rgba(228, 176, 74, 0.2)',
                        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.4)',
                        overflow: 'hidden'
                    }}>
                        <Table aria-label="Professional Data Categories">
                            <TableHead>
                                <TableRow sx={{ bgcolor: 'rgba(228, 176, 74, 0.1)' }}>
                                    <TableCell sx={{ color: '#e4b04a', fontWeight: 'bold', fontSize: '1.2rem', py: 3, borderBottom: '1px solid rgba(228, 176, 74, 0.2)' }}>
                                        Platform Category
                                    </TableCell>
                                    <TableCell sx={{ color: '#e4b04a', fontWeight: 'bold', fontSize: '1.2rem', py: 3, borderBottom: '1px solid rgba(228, 176, 74, 0.2)' }}>
                                        Interactive Data Modules
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {[
                                    { type: 'Strategic Interaction', games: 'Live Analysis, Match Performance, Multi-Tier Statistics' },
                                    { type: 'Data Streams', games: 'Real-time Analytics, Ball-by-Ball Data, Strategic Trends' },
                                    { type: 'Global Metrics', games: 'International Sports Data, Global Tournament Performance' },
                                    { type: 'Sports Analysis', games: 'Cricket, Football, Tennis, Global Strategic Networks' }
                                ].map((row, index) => (
                                    <TableRow key={row.type} sx={{
                                        '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.02)' },
                                        transition: 'background-color 0.2s'
                                    }}>
                                        <TableCell sx={{
                                            color: '#fff',
                                            fontWeight: 'bold',
                                            fontSize: '1.1rem',
                                            py: 3,
                                            borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
                                        }}>
                                            {row.type}
                                        </TableCell>
                                        <TableCell sx={{
                                            color: 'rgba(255, 255, 255, 0.8)',
                                            fontSize: '1rem',
                                            py: 3,
                                            borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
                                        }}>
                                            {row.games}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Container>
            </Box>

            {/* Trust & Security Section */}
            <Box component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: '#1c1f2b' }}>
                <Container maxWidth="xl">
                    <Stack spacing={4} textAlign="center" maxWidth={900} sx={{ mx: 'auto', mb: 8 }}>
                        <SecurityIcon sx={{ fontSize: 60, color: '#e4b04a', alignSelf: 'center' }} aria-hidden="true" />
                        <Typography variant="h3" component="h2" fontWeight="900" color="#e4b04a">Secure Global Compliance</Typography>
                        <Typography variant="body1" sx={{ opacity: 0.8, fontSize: '1.2rem' }}>
                            We operate under strict international standards, ensuring that every interaction on our portal is transparent and secure. Our robust verification process is designed to protect all members and maintain an elite atmosphere.
                        </Typography>
                    </Stack>

                    <Grid container spacing={4}>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <Paper component="article" sx={{ p: 4, bgcolor: 'rgba(255,255,255,0.02)', height: '100%', borderRadius: 6, border: '1px solid rgba(255,255,255,0.05)' }}>
                                <Typography variant="h5" component="h3" fontWeight="bold" color="#e4b04a" gutterBottom>Rapid Management</Typography>
                                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                                    Experience the most efficient account management ecosystem. From traditional banking support to modern settlement systems, our portal is unparalleled.
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <Paper component="article" sx={{ p: 4, bgcolor: 'rgba(255,255,255,0.02)', height: '100%', borderRadius: 6, border: '1px solid rgba(255,255,255,0.05)' }}>
                                <Typography variant="h5" component="h3" fontWeight="bold" color="#e4b04a" gutterBottom>Fair Interaction</Typography>
                                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                                    Transparency is our core value. Our service requirements are designed to be fair and ethical, providing you a real professional sports analysis experience.
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <Paper component="article" sx={{ p: 4, bgcolor: 'rgba(255,255,255,0.02)', height: '100%', borderRadius: 6, border: '1px solid rgba(255,255,255,0.05)' }}>
                                <Typography variant="h5" component="h3" fontWeight="bold" color="#e4b04a" gutterBottom>Live Console</Typography>
                                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                                    Switch seamlessly between national championships and global tournaments. Our console offers a dynamic, real-time interface for data enthusiasts.
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Floating WhatsApp */}
            <Fab
                sx={{
                    position: 'fixed',
                    bottom: 32,
                    right: 32,
                    bgcolor: '#25D366',
                    color: '#fff',
                    '&:hover': { bgcolor: '#128C7E' },
                    width: 64,
                    height: 64,
                    zIndex: 1000,
                    boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)'
                }}
                onClick={() => handleWhatsAppClick()}
                disabled={!activeWhatsAppNumber || loading}
                aria-label="Contact Platform Support"
            >
                <WhatsAppIcon sx={{ fontSize: { xs: 24, md: 32 } }} />
            </Fab>
        </Box>
    );
}
