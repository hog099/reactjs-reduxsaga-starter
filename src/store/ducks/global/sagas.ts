import { call, put, takeLatest, delay } from 'redux-saga/effects';
import { FetchAction, GlobalTypes } from './types';
import { changeLoadingOff, actionSuccess} from './actions';


import {api} from '../../../services/api';
import { store } from '../../../store/index';

export interface ResponseGenerator{
  config?:any,
  data?:any,
  headers?:any,
  request?:any,
  status?:number,
  statusText?:string
}

function* examplesagafunction() {
  try {
    //exemplo de como pegar algo do estado no saga
    let tokenpush = store.getState().global.actionSuccess;

    const response: ResponseGenerator = yield call(api.get, 'url');

    yield put(changeLoadingOff());

  } catch (e) {
    // console.log('Error adshome', e.response.data);
    // yield put(fetchUserFailure(e.message));
  }
}


export default function* root() {
  yield takeLatest(GlobalTypes.EXAMPLE, examplesagafunction);
}