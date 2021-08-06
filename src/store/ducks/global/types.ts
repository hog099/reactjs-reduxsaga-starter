export enum GlobalTypes {
  EXAMPLE = '@global/EXAMPLE',
  CHANGE_LOADING = '@global/CHANGE_LOADING',
  ACTION_SUCCESS = '@global/ACTION_SUCCESS',
}

export interface Global {
  global?: any;
}

export interface Globalstate {
  readonly loading: boolean;
  readonly actionSuccess: boolean;
}

export interface FetchAction {
  type: string;
  payload: any;
}