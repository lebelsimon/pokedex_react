import axios from 'axios';
import firebaseConfig from "../config/firebase";

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

export const registerFirebase = ( data ) => dispatch => {
  return new Promise((resolve, reject) => {
    axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + firebaseConfig.apiKey, {
      email: data.email,
      password: data.password
    })
      .then(res => {
        console.log('res firebase : ', res);
        dispatch(addUser({
          email: res.data.email,
          refreshToken: res.data.refreshToken
        }));
        resolve();
      }).catch(e => {
        reject(e);
      });
  });
};

export const loginFirebase = ( data ) => dispatch => {
  return new Promise((resolve, reject) => {
    axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + firebaseConfig.apiKey, {
      email: data.email,
      password: data.password
    })
      .then(res => {
        console.log('res firebase : ', res);
        dispatch(addUser({
          email: res.data.email,
          refreshToken: res.data.refreshToken
        }));
        resolve();
      }).catch(e => {
        reject(e);
      });
  });
};