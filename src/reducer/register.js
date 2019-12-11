import * as actionType from './../actions/actionTypes';
const initialState = {};

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.REGISTER_USER:
      return state = action.payload;
    default:
      return state;
  }
}

export default registerReducer;
