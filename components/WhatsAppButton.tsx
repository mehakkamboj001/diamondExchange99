import React from 'react';
import { Button } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import { useWhatsApp } from '../src/hooks/useWhatsApp';

export default function WhatsAppButton() {
    const { handleWhatsAppClick } = useWhatsApp();
    return (
        <Button
            variant="contained"
            startIcon={<WhatsAppIcon />}
            sx={{ bgcolor: '#25D366', '&:hover': { bgcolor: '#128C7E' } }}
            onClick={() => handleWhatsAppClick()}
        >
            Chat with us
        </Button>
    );
}
