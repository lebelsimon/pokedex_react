import { SAVE_LANGUAGE } from '../actions/language';

const initialState = {
  language: 'en'
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SAVE_LANGUAGE:
      return {
        ...state,
        language: action.payload
      };
    default:
      return state;
  }
};
