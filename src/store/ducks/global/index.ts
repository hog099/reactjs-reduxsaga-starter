import { GlobalTypes, Globalstate, FetchAction } from './types';
import { Reducer } from 'redux';

const initialState: Globalstate = {
  actionSuccess: false,
  loading: false,
};

const reducer: Reducer<Globalstate, FetchAction> = (state = initialState, action: FetchAction) => {

  switch (action.type) {
    case GlobalTypes.CHANGE_LOADING:
      return { ...state, loading: action.payload };
    case GlobalTypes.ACTION_SUCCESS:
      return { ...state, actionSuccess: action.payload };

    default:
      return state;
  }

};

export default reducer;