'use client';
import React, { useEffect } from 'react';
import { Box, CircularProgress, Typography, Stack } from '@mui/material';
import { useRouter } from 'next/navigation';
import DiamondIcon from '@mui/icons-material/Diamond';

export default function RootRedirectPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/diamond-exchange');
    }, 1500);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <Box sx={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      bgcolor: '#0B0F19',
      color: 'white'
    }}>
      <Stack spacing={3} alignItems="center">
        <DiamondIcon sx={{ fontSize: 60, color: '#e4b04a', mb: 1 }} className="animate-pulse" />
        <CircularProgress size={40} thickness={4} sx={{ color: '#e4b04a' }} />
        <Typography variant="h6" sx={{ opacity: 0.8, letterSpacing: 2, fontWeight: 300 }}>
          LOADING DIAMOND EXCHANGE...
        </Typography>
      </Stack>
    </Box>
  );
}
