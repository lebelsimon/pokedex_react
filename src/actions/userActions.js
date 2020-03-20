export const ADD_USER = 'ADD_USER';
export const LOGIN = 'LOGIN';

export const addUser = data => ({
  type: ADD_USER,
  data: data
});

export const login = data => ({
  type: LOGIN,
  data: data
});

// TODO firebase.register
// TODO firebase.login