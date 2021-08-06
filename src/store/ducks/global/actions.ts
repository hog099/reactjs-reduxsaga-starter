import { GlobalTypes, Global } from './types';
import { action } from 'typesafe-actions';

export const examplesagafunction = () => action(GlobalTypes.EXAMPLE, true);
export const changeLoadingOn = () => action(GlobalTypes.CHANGE_LOADING, true);
export const changeLoadingOff = () => action(GlobalTypes.CHANGE_LOADING, false);

export const actionSuccess = (payload: boolean) => action(GlobalTypes.ACTION_SUCCESS, payload);

