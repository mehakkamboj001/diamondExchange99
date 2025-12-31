import { all } from 'redux-saga/effects';
import diamondExchangeSaga from '../../app/diamond-Exchange/diamondExchangeSaga';

export default function* rootSaga() {
    yield all([
        diamondExchangeSaga(),
        // Add other sagas here as needed
    ]);
}
