import { ADD_USER } from '../actions/registerActions'

const initialState = {
  users: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        users:[...state.users, action.data]
      };
    default:
      return state
  }
}
