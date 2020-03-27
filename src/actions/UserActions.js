/* eslint-disable no-undef */
import axios from 'axios';
import firebaseConfig from '../config/firebase';

export const SET_USER = 'SET_USER';
export const UNSET_USER = 'UNSET_USER';

const jwt =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

export const setUser = data => ({
  type: SET_USER,
  data: data
});

export const isLogin = () => {
  if (localStorage.getItem('id_token')) {
    return true;
  }
  return false;
};

export const unsetUser = data => ({
  type: UNSET_USER,
  data: data
});

export const registerFirebase = data => dispatch => {
  return new Promise((resolve, reject) => {
    axios
      .post(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' +
          firebaseConfig.apiKey,
        {
          email: data.email,
          password: data.password
        }
      )
      .then(res => {
        axios
          .put(
            firebaseConfig.databaseURL + '/users/' + res.data.localId + '.json',
            {
              email: data.email,
              username: data.username
            }
          )
          .then(res => {
            dispatch(
              setUser({
                email: res.data.email,
                username: res.data.username
              })
            );
            resolve();
          })
          .catch(e => {
            reject(e);
          });
      })
      .catch(e => {
        reject(e);
      });
  });
};

export const loginFirebase = data => dispatch => {
  return new Promise((resolve, reject) => {
    axios
      .post(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' +
          firebaseConfig.apiKey,
        {
          email: data.email,
          password: data.password
        }
      )
      .then(res => {
        axios
          .get(
            firebaseConfig.databaseURL + '/users/' + res.data.localId + '.json'
          )
          .then(res => {
            dispatch(
              setUser({
                email: res.data.email,
                username: res.data.username
              })
            );
            resolve();
            localStorage.setItem('id_token', jwt);
          })
          .catch(e => {
            reject(e);
          });
      })
      .catch(e => {
        reject(e);
      });
  });
};
