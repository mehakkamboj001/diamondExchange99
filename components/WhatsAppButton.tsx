import React from 'react';
import { Button } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function WhatsAppButton() {
    return (
        <Button
            variant="contained"
            startIcon={<WhatsAppIcon />}
            sx={{ bgcolor: '#25D366', '&:hover': { bgcolor: '#128C7E' } }}
            href="https://wa.me/+919000000000"
            target="_blank"
        >
            Chat with us
        </Button>
    );
}
