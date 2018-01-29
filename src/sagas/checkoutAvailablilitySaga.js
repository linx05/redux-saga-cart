import { take, actionChannel, put } from 'redux-saga/effects';

import {
  SET_SHIPPING_FETCH_STATUS,
  setCanCheckOut,
  FETCHED
} from '../actions';

export function* checkoutAvailabilitySaga() {
  const checkOutAvailabilityChannel = yield actionChannel(SET_SHIPPING_FETCH_STATUS);
  while (true) {
    const { status } = yield take(checkOutAvailabilityChannel);
    yield put(setCanCheckOut(status === FETCHED));
  }

}