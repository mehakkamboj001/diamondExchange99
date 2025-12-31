'use client';
import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';

export default function Loading() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh', gap: 2 }}>
            <CircularProgress size={60} thickness={4} />
            <Typography variant="h6" color="text.secondary">Loading Diamond Exchange...</Typography>
        </Box>
    );
}
