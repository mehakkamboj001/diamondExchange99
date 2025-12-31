import { call, put, takeLatest } from 'redux-saga/effects';
import axiosInstance from '../../lib/axiosInstance';
import {
    fetchActiveWhatsAppNumber,
    fetchActiveWhatsAppNumberSuccess,
    fetchActiveWhatsAppNumberFailure,
    trackWhatsAppClick,
    trackWhatsAppClickSuccess,
    trackWhatsAppClickFailure,
} from './diamondExchangeSlice';
import { WhatsAppNumber } from './types';
import { PayloadAction } from '@reduxjs/toolkit';

// Fetch active WhatsApp number saga
function* fetchActiveWhatsAppNumberSaga(): Generator<any, void, any> {
    try {
        const response = yield call(axiosInstance.get, '/whatsapp-numbers/active');
        yield put(fetchActiveWhatsAppNumberSuccess(response.data?.data as WhatsAppNumber));
    } catch (error: any) {
        yield put(fetchActiveWhatsAppNumberFailure(error.message || 'Failed to fetch WhatsApp number'));
    }
}

// Track WhatsApp click saga
function* trackWhatsAppClickSaga(action: PayloadAction<string>): Generator<any, void, any> {
    try {
        console.log(action, "action.payload")
        yield call(axiosInstance.patch, `/whatsapp-numbers/${action.payload}/click`);
        yield put(trackWhatsAppClickSuccess());
    } catch (error: any) {
        yield put(trackWhatsAppClickFailure(error.message || 'Failed to track click'));
    }
}

// Watcher saga
export default function* diamondExchangeSaga() {
    yield takeLatest(fetchActiveWhatsAppNumber.type, fetchActiveWhatsAppNumberSaga);
    yield takeLatest(trackWhatsAppClick.type, trackWhatsAppClickSaga);
}
