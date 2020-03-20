import {SET_USER} from '../actions/UserActions'

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
    default:
      return state
  }
}
