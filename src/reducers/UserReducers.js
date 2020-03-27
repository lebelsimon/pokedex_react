import {SET_USER, UNSET_USER, UPDATE_USER} from '../actions/UserActions'

const initialState = {
  user: {
    username: '',
    email: '',
    localId: '',
    pokemonsCaught: [],
    pokemonsSeen: []
  }
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
    case UPDATE_USER:
      return {
        ...state,
        user: Object.assign({}, state.user, action.data)
      };
    default:
      return state;
  }
};
