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
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SecurityIcon from '@mui/icons-material/Security';
import PeopleIcon from '@mui/icons-material/People';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';

const StatCard = ({ title, Icon, desc }: any) => (
    <Paper
        elevation={0}
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
        <Icon sx={{ fontSize: 60, color: '#e4b04a', mb: 1, filter: 'drop-shadow(0 0 5px rgba(228, 176, 74, 0.5))' }} />
        <Typography variant="h6" fontWeight="bold" color="#e4b04a">{title}</Typography>
        <Typography variant="body2" color="rgba(255,255,255,0.7)">{desc}</Typography>
    </Paper>
);

const StepCard = ({ number, title, desc }: any) => (
    <Box sx={{ position: 'relative', p: 3, bgcolor: 'rgba(255,255,255,0.03)', borderRadius: 4, borderLeft: '4px solid #e4b04a' }}>
        <Typography variant="h2" sx={{ position: 'absolute', right: 20, top: 10, opacity: 0.05, fontWeight: 900 }}>{number}</Typography>
        <Typography variant="h6" fontWeight="bold" color="#e4b04a" gutterBottom>{title}</Typography>
        <Typography variant="body2" color="rgba(255,255,255,0.7)">{desc}</Typography>
    </Box>
);

const IDServiceCard = ({ title, subtitle, points, btnText }: any) => (
    <Paper
        elevation={0}
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
        <Typography variant="h5" align="center" fontWeight="900" sx={{ mb: 1, color: '#fff' }}>{title}</Typography>
        <Typography variant="subtitle2" align="center" sx={{ mb: 4, color: '#e4b04a', fontWeight: 600 }}>{subtitle}</Typography>

        <Stack spacing={2} sx={{ mb: 3, flexGrow: 1 }}>
            {points.map((point: string) => (
                <Stack key={point} direction="row" spacing={1.5} alignItems="flex-start">
                    <Box sx={{ width: 6, height: 6, bgcolor: '#e4b04a', borderRadius: '2px', mt: 1, boxShadow: '0 0 8px rgba(228, 176, 74, 0.5)' }} />
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.5 }}>{point}</Typography>
                </Stack>
            ))}
        </Stack>
    </Paper>
);

export default function DiamondExchangeLanding() {
    const theme = useTheme();
    const dispatch = useAppDispatch();
    const { activeWhatsAppNumber, loading } = useAppSelector((state) => state.diamondExchange);

    useEffect(() => {
        dispatch(fetchActiveWhatsAppNumber());
    }, [dispatch]);
    console.log(activeWhatsAppNumber, "activeWhatsAppNumber")
    const handleWhatsAppClick = () => {
        if (activeWhatsAppNumber) {
            dispatch(trackWhatsAppClick(activeWhatsAppNumber.id));
            window.open(`https://wa.me/${activeWhatsAppNumber?.number}`, '_blank');
        }
    };

    return (
        <Box sx={{ bgcolor: '#0b0d17', minHeight: '100vh', color: '#fff', overflowX: 'hidden' }}>
            {/* Hero Section */}
            <Box sx={{
                position: 'relative',
                height: { xs: 'auto', md: '600px' },
                background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("/images/hero_replica.png")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                pt: { xs: 8, md: 0 }
            }}>
                <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
                    <Stack spacing={3} sx={{ maxWidth: 850, color: '#fff', py: { xs: 8, sm: 12, md: 0 }, px: { xs: 2, md: 0 } }}>
                        <Typography variant="h2" fontWeight="900" sx={{
                            lineHeight: 1.1,
                            textTransform: 'uppercase',
                            fontSize: { xs: '2rem', sm: '3.5rem', md: '4.5rem' },
                            textShadow: '2px 2px 10px rgba(0,0,0,0.5)'
                        }}>
                            Experience Ultimate Betting With <Box component="span" sx={{ color: '#e4b04a' }}>Diamond Exchange99</Box>
                        </Typography>
                        <Typography variant="h4" fontWeight="bold" sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, color: '#fff', opacity: 0.9 }}>
                            India's Premier 24/7 Gaming Destination
                        </Typography>
                        <Box sx={{ width: 120, height: 6, bgcolor: '#e4b04a', borderRadius: 3 }} />
                        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: 2 }}>
                            <Button variant="contained" sx={{ bgcolor: '#e4b04a', color: '#000', fontWeight: 'bold', px: 4, py: 1.5, fontSize: '1.1rem', '&:hover': { bgcolor: '#c99a3b' } }}>
                                Get Your ID Now
                            </Button>
                            <Button variant="outlined" sx={{ color: '#fff', borderColor: '#fff', px: 4, py: 1.5, fontSize: '1.1rem', '&:hover': { borderColor: '#e4b04a', color: '#e4b04a' } }}>
                                Learn More
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
                                Welcome to Diamond Exchange ID: India's Trusted Betting Platform
                            </Typography>
                            <Typography variant="body1" sx={{ opacity: 0.9, lineHeight: 1.9, mb: 3, fontSize: { xs: '1.1rem', md: '1.25rem' } }}>
                                In India, cricket is more than just a sport—it's a shared passion that brings millions together. At DiamondExchange99, we capture that thrill by providing the most reliable <b>Diamond Exchange ID</b> for events like the IPL and World Cup.
                            </Typography>
                            <Typography variant="body1" sx={{ opacity: 0.9, lineHeight: 1.9, mb: 4, fontStyle: 'italic' }}>
                                "Join the community of winners and experience the adrenaline surge of live betting with our top-tier services."
                            </Typography>
                            <Stack direction="row" spacing={4} sx={{ mt: 4 }}>
                                <Box>
                                    <Typography variant="h5" fontWeight="bold" color="#e4b04a">100+</Typography>
                                    <Typography variant="body2" sx={{ opacity: 0.7 }}>Betting Markets</Typography>
                                </Box>
                                <Divider orientation="vertical" flexItem sx={{ bgcolor: 'rgba(228, 176, 74, 0.3)' }} />
                                <Box>
                                    <Typography variant="h5" fontWeight="bold" color="#e4b04a">Instant</Typography>
                                    <Typography variant="body2" sx={{ opacity: 0.7 }}>Withdrawals</Typography>
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
                                <Typography variant="h5" fontWeight="bold" color="#e4b04a" gutterBottom>Why Choose Diamond Exchange99 ?</Typography>
                                <Stack spacing={2} sx={{ mt: 3 }}>
                                    {[
                                        'Multiple Registration Options (Phone, Email, Social)',
                                        'Exclusive Mobile App for Android & iOS',
                                        'Secure SSL Encrypted Transactions',
                                        'International & Local Cricket Coverage',
                                        'High Potential Payouts with Fair Wagering'
                                    ].map((text) => (
                                        <Stack key={text} direction="row" spacing={2} alignItems="flex-start">
                                            <CheckCircleIcon sx={{ color: '#e4b04a', mt: 0.5 }} />
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
            <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: '#0b0d17' }}>
                <Container maxWidth="xl">
                    <Typography variant="h3" textAlign="center" fontWeight="900" color="#e4b04a" gutterBottom sx={{ mb: 8 }}>
                        Start Your Journey in 4 Simple Steps
                    </Typography>
                    <Grid container spacing={3}>
                        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                            <StepCard
                                number="01"
                                title="Sign Up"
                                desc="Visit our homepage and click 'Sign Up'. Enter your details and create a secure password."
                            />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                            <StepCard
                                number="02"
                                title="Verify Account"
                                desc="Validate your identity via the Personal Data section to ensure account safety and compliance."
                            />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                            <StepCard
                                number="03"
                                title="Add Funds"
                                desc="Choose from multiple payment methods like UPI, Paytm, or Net Banking to deposit funds instantly."
                            />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                            <StepCard
                                number="04"
                                title="Start Winning"
                                desc="Pick your favorite sports, analyze the odds, and place your bets to start winning big."
                            />
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Professional ID Solutions Section */}
            <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: '#0b0d17', position: 'relative', overflow: 'hidden' }}>
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '100%',
                    height: '100%',
                    background: 'radial-gradient(circle, rgba(228, 176, 74, 0.05) 0%, transparent 70%)',
                    zIndex: 0
                }} />
                <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
                    <Typography variant="h3" textAlign="center" fontWeight="900" color="#e4b04a" gutterBottom sx={{ mb: 8 }}>
                        Professional Trading & Betting Solutions
                    </Typography>

                    <Grid container spacing={4}>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <IDServiceCard
                                btnText="Get Master ID"
                                title="Master ID Provider"
                                subtitle="Scale Your Betting Operations"
                                points={[
                                    "India's leading trusted offline cricket master portal",
                                    "Seamless self-deposit and 24/7 withdrawal systems",
                                    "Direct user ID creation with profit sharing capability",
                                    "Exclusive access to high-definition match streaming"
                                ]}
                            />
                        </Grid>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <IDServiceCard
                                btnText="Get Super Master ID"
                                title="Super Master ID"
                                subtitle="The Ultimate Control Center"
                                points={[
                                    "Premier diamond exchange infrastructure in the country",
                                    "Infinite capability for Master and User ID generation",
                                    "Comprehensive live master account statement tracking",
                                    "Lag-free real-time sports broadcasting integration"
                                ]}
                            />
                        </Grid>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <IDServiceCard
                                btnText="Get Agent ID"
                                title="Premium Agent ID"
                                subtitle="Build Your Online Cricket Hub"
                                points={[
                                    "Consolidated Agent and Super Master dashboard",
                                    "Priority placement in top-tier sports exchanges",
                                    "State-of-the-art secure mobile apps for fantasy games",
                                    "24/7 technical assistance for network management"
                                ]}
                            />
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Stats Cards Section */}
            <Box sx={{
                py: { xs: 8, md: 12 },
                background: `linear-gradient(rgba(11, 13, 23, 0.9), rgba(11, 13, 23, 0.9)), url("/images/stat_bg.png")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderTop: '1px solid rgba(228, 176, 74, 0.1)',
                borderBottom: '1px solid rgba(228, 176, 74, 0.1)'
            }}>
                <Container maxWidth="xl">
                    <Grid container spacing={3}>
                        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                            <StatCard
                                title="50 Lakh+"
                                Icon={PeopleIcon}
                                desc="Trusted Active Users"
                            />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                            <StatCard
                                title="24*7"
                                Icon={SupportAgentIcon}
                                desc="Personalized Calling Support"
                            />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                            <StatCard
                                title="Unlimited"
                                Icon={SportsEsportsIcon}
                                desc="Daily Games & Markets"
                            />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                            <StatCard
                                title="Bonus Rewards"
                                Icon={CardGiftcardIcon}
                                desc="Exciting Sign-up Offers"
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
                                Diverse Betting Markets
                            </Typography>
                            <Typography variant="body1" color="rgba(255,255,255,0.7)" paragraph sx={{ mb: 6, fontSize: '1.1rem' }}>
                                From predicting the match outcome to specific player milestones, we offer a comprehensive range of betting possibilities matched only by your knowledge of the game.
                            </Typography>

                            <Grid container spacing={4}>
                                {[
                                    { t: 'Match Winner', d: 'Predict the victorious team.' },
                                    { t: 'Top Batsman', d: 'Pick the leading run-scorer.' },
                                    { t: 'Top Bowler', d: 'Predict the highest wicket-taker.' },
                                    { t: 'Toss Result', d: 'Bet on the pre-match coin flip.' },
                                    { t: 'Player Performance', d: 'Specific player-based milestones.' },
                                    { t: 'Over/Under', d: 'Predict scores within specific ratios.' }
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
                                {/* <Box
                                    component="img"
                                    src="https://images.unsplash.com/photo-1540747913346-19e3adca174f?auto=format&fit=crop&q=80"
                                    sx={{ width: '100%', borderRadius: 8, boxShadow: '0 25px 50px -12px rgba(228, 176, 74, 0.25)' }}
                                /> */}
                                <Box sx={{
                                    position: 'absolute',
                                    bottom: -20,
                                    right: -20,
                                    bgcolor: '#e4b04a',
                                    p: 3,
                                    borderRadius: 4,
                                    display: { xs: 'none', md: 'block' }
                                }}>
                                    <Typography variant="h5" fontWeight="bold" color="#000">100% Safe</Typography>
                                    <Typography variant="body2" color="#000">Certified Platform</Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Diamond Exchange99 Gaming Section */}
            <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: '#0b0d17' }}>
                <Container maxWidth="xl">
                    <Stack spacing={4} textAlign="center" sx={{ mb: 8 }}>
                        <Typography variant="h3" fontWeight="900" color="#e4b04a">
                            Diamond Exchange99 Gaming Experience
                        </Typography>
                        <Typography variant="body1" sx={{ opacity: 0.8, fontSize: '1.2rem', maxWidth: 900, mx: 'auto' }}>
                            Explore our comprehensive range of gaming options, from high-stakes casino games to real-time sports betting. We provide a seamless and immersive experience for all types of players.
                        </Typography>
                    </Stack>

                    <TableContainer component={Paper} sx={{
                        bgcolor: '#1c1f2b',
                        borderRadius: 6,
                        border: '1px solid rgba(228, 176, 74, 0.2)',
                        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.4)',
                        overflow: 'hidden'
                    }}>
                        <Table>
                            <TableHead>
                                <TableRow sx={{ bgcolor: 'rgba(228, 176, 74, 0.1)' }}>
                                    <TableCell sx={{ color: '#e4b04a', fontWeight: 'bold', fontSize: '1.2rem', py: 3, borderBottom: '1px solid rgba(228, 176, 74, 0.2)' }}>
                                        Gaming Category
                                    </TableCell>
                                    <TableCell sx={{ color: '#e4b04a', fontWeight: 'bold', fontSize: '1.2rem', py: 3, borderBottom: '1px solid rgba(228, 176, 74, 0.2)' }}>
                                        Popular Games & Markets
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {[
                                    { type: 'Casino', games: 'Roulette, Teen Patti, Poker, Baccarat, Blackjack, Dragon Tiger' },
                                    { type: 'Live Betting', games: 'Real-time Match Odds, Ball-by-Ball Session, In-play Markets' },
                                    { type: 'Global Coverage', games: 'IPL, World Cup, EPL, Champions League, NBA, Grand Slams' },
                                    { type: 'Sports', games: 'Cricket, Football, Tennis, Horse Racing, Kabaddi, Greyhounds' }
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
            <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: '#1c1f2b' }}>
                <Container maxWidth="xl">
                    <Stack spacing={4} textAlign="center" maxWidth={900} sx={{ mx: 'auto', mb: 8 }}>
                        <SecurityIcon sx={{ fontSize: 60, color: '#e4b04a', alignSelf: 'center' }} />
                        <Typography variant="h3" fontWeight="900" color="#e4b04a">Compromise-Free Security</Typography>
                        <Typography variant="body1" sx={{ opacity: 0.8, fontSize: '1.2rem' }}>
                            We operate under a strict Curacao license, ensuring that every interaction on our platform is transparent and legally compliant. Our mandatory KYC process is designed to protect users from intruders and maintain a fair play atmosphere.
                        </Typography>
                    </Stack>

                    <Grid container spacing={4}>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <Paper sx={{ p: 4, bgcolor: 'rgba(255,255,255,0.02)', height: '100%', borderRadius: 6, border: '1px solid rgba(255,255,255,0.05)' }}>
                                <Typography variant="h5" fontWeight="bold" color="#e4b04a" gutterBottom>Rapid Payments</Typography>
                                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                                    Experience the most convenient payment ecosystem in India. From traditional Net Banking to modern Cryptocurrencies, our withdrawals are processed with unmatched speed.
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <Paper sx={{ p: 4, bgcolor: 'rgba(255,255,255,0.02)', height: '100%', borderRadius: 6, border: '1px solid rgba(255,255,255,0.05)' }}>
                                <Typography variant="h5" fontWeight="bold" color="#e4b04a" gutterBottom>Fair Wagering</Typography>
                                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                                    Transparency is our core value. Our wagering requirements are designed to be fair and achievable, giving you a real shot at converting your bonuses into winnings.
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <Paper sx={{ p: 4, bgcolor: 'rgba(255,255,255,0.02)', height: '100%', borderRadius: 6, border: '1px solid rgba(255,255,255,0.05)' }}>
                                <Typography variant="h5" fontWeight="bold" color="#e4b04a" gutterBottom>Live Interaction</Typography>
                                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                                    Switch seamlessly between local championships and international tournaments. Our platform offers a dynamic, real-time interface that keeps you in the heat of the action.
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
                onClick={handleWhatsAppClick}
                disabled={!activeWhatsAppNumber || loading}
            >
                <WhatsAppIcon sx={{ fontSize: { xs: 24, md: 32 } }} />
            </Fab>
        </Box>
    );
}
