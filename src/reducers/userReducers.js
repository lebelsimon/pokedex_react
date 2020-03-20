import {ADD_USER, LOGIN} from '../actions/userActions'

const initialState = {
  user: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        user: action.data
      };
    case LOGIN:
      return {
        ...state,
        user: action.data
      };
    default:
      return state
  }
}
