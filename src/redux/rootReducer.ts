import { combineReducers } from '@reduxjs/toolkit';
import diamondExchangeReducer from '../../app/diamond-exchange/diamondExchangeSlice';

const rootReducer = combineReducers({
    diamondExchange: diamondExchangeReducer,
    // Add other reducers here as needed
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
