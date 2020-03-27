import { SET_USER, UNSET_USER } from '../actions/UserActions';

const initialState = {
  user: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.data
      };
    case UNSET_USER:
      localStorage.removeItem('id_token');
      return {
        ...state,
        user: initialState.user
      };
    default:
      return state;
  }
};
