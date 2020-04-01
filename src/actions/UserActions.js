/* eslint-disable no-undef */
import axios from '../config/axios';

import * as firebase from 'firebase';

import firebaseConfig from '../config/firebase';

export const SET_USER = 'SET_USER';
export const UNSET_USER = 'UNSET_USER';
export const UPDATE_USER = 'UPDATE_USER';

const jwt =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

export const setUser = data => ({
  type: SET_USER,
  data: data
});

export const isLogin = () => {
  return !!localStorage.getItem('id_token');
};

export const unsetUser = data => ({
  type: UNSET_USER,
  data: data
});

export const updateUser = data => ({
  type: UPDATE_USER,
  data: data
});

// export function someAction() {
//   return (dispatch, getState) => {
//     const {items} = getState().otherReducer;
//
//     dispatch(anotherAction(items));
//   }
// }

export const addPokemonCaught = data => (dispatch, getState) => {
  console.log('data', data);

  axios
    .get('/user/' + getState().userActions.user.localId)
    .then(response => {
      console.log(response);
      axios
        .put('/user/' + getState().userActions.user.localId, {
          pokemonCaught: [data.pokemonCaught].concat(response.data.pokemonCaught)
        })
        .then(_ => {
          dispatch(
            updateUser({
              pokemonsSeen: [data.pokemonCaught].concat(response.data.pokemonCaught)
            })
          );
        })
        .catch(e => {
          console.log(e);
        });
    })
    .catch(e => {
      console.log(e);
    });
};

export const addPokemonSeen = data => (dispatch, getState) => {
  axios
    .get('/user/' + getState().userActions.user.localId)
    .then(response => {
      axios
        .put('/user/' + getState().userActions.user.localId, {
          pokemonSeen: [data.pokemonSeen].concat(response.data.pokemonSeen)
        })
        .then(_ => {
          dispatch(
            updateUser({
              pokemonsSeen: [data.pokemonSeen].concat(response.data.pokemonSeen)
            })
          );
        })
        .catch(e => {
          console.log(e);
        });
    })
    .catch(e => {
      console.log(e);
    });
};

export const fetchUserData = localId => dispatch => {
  axios
    .get('/user/' + localId)
    .then(response => {
      dispatch(
        setUser({
          username: response.data.username,
          email: response.data.email,
          localId: localId,
          pokemonsCaught: response.data.pokemonCaught,
          pokemonsSeen: response.data.pokemonSeen
        })
      );
      resolve();
    })
    .catch(e => {
      console.log(e);
    });
};

export const register = data => dispatch => {
  return axios
    .post('/signup', {
      email: data.email,
      username: data.username,
      password: data.password
    })
    .catch(e => {
      console.log(e);
    });
};

export const login = data => dispatch => {
  return axios
    .post('/login', {
      login: data.email,
      password: data.password
    })
    .then(res => {

      localStorage.setItem('id_token', res.data.token);
      dispatch(
        setUser({
          localId: res.data.id
        })
      );
    })
    .catch(e => {
      console.log(e);
    });
};
