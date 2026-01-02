import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DiamondExchangeState, WhatsAppNumber } from './types';

const initialState: DiamondExchangeState = {
    activeWhatsAppNumber: null,
    loading: false,
    fetched: false,
    error: null,
    clickLoading: false,
};

const diamondExchangeSlice = createSlice({
    name: 'diamondExchange',
    initialState,
    reducers: {
        // Fetch active WhatsApp number
        fetchActiveWhatsAppNumber: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchActiveWhatsAppNumberSuccess: (state, action: PayloadAction<WhatsAppNumber>) => {
            state.loading = false;
            state.fetched = true;
            state.activeWhatsAppNumber = action.payload;
            state.error = null;
        },
        fetchActiveWhatsAppNumberFailure: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.fetched = true;
            state.error = action.payload;
        },

        // Track WhatsApp WhatsApp click
        trackWhatsAppClick: (state, action: PayloadAction<string>) => {
            state.clickLoading = true;
        },
        trackWhatsAppClickSuccess: (state) => {
            state.clickLoading = false;
            if (state.activeWhatsAppNumber) {
                state.activeWhatsAppNumber.click_count += 1;
            }
        },
        trackWhatsAppClickFailure: (state, action: PayloadAction<string>) => {
            state.clickLoading = false;
            state.error = action.payload;
        },
    },
});

export const {
    fetchActiveWhatsAppNumber,
    fetchActiveWhatsAppNumberSuccess,
    fetchActiveWhatsAppNumberFailure,
    trackWhatsAppClick,
    trackWhatsAppClickSuccess,
    trackWhatsAppClickFailure,
} = diamondExchangeSlice.actions;

export default diamondExchangeSlice.reducer;
