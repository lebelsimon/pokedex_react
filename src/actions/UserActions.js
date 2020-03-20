import axios from 'axios';
import firebaseConfig from "../config/firebase";

export const SET_USER = 'SET_USER';

export const setUser = data => ({
  type: SET_USER,
  data: data
});

export const registerFirebase = ( data ) => dispatch => {
  return new Promise((resolve, reject) => {
    axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + firebaseConfig.apiKey, {
      email: data.email,
      password: data.password
    })
      .then(res => {
        axios.put(firebaseConfig.databaseURL + '/users/' + res.data.localId + '.json', {
          email: data.email,
          username: data.username
        }).then((res) => {
          dispatch(setUser({
            email: res.data.email,
            username: res.data.username
          }));
          resolve();
        }).catch((e) => {
          reject(e);
        });
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
        console.log(res);
        axios.get(firebaseConfig.databaseURL + '/users/' + res.data.localId + '.json')
          .then(res => {
            dispatch(setUser({
              email: res.data.email,
              username: res.data.username
            }));
            resolve();
          }).catch(e => {
            reject(e);
        });
      }).catch(e => {
        reject(e);
      });
  });
};