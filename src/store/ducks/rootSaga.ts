import {all} from 'redux-saga/effects';
import global from './global/sagas';

export default function* root() {
  yield all([
    global(), 
  ]);
}