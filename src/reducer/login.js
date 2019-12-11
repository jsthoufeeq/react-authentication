import * as actionType from './../actions/actionTypes';
const initialState = {};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SET_TOKEN:
      return state = action.payload;
    default: return state;
  }
}

export default loginReducer;
