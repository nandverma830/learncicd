import {ADD_WISHLIST} from './Actiontype';

const initialState = {
  userInfo: null,
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_WISHLIST:
      return {wishlist: action.payload, ...state};
      break;
    default:
      return state;
  }
};
export default AppReducer;
