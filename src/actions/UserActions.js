/* eslint-disable no-undef */
import axios from 'axios';
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

export const addPokemonCaught = (data ) => (dispatch, getState ) => {
  axios.get(firebaseConfig.databaseURL + '/users/' + getState().userActions.user.localId + '.json')
    .then(response => {
      axios.patch(firebaseConfig.databaseURL + '/users/' + getState().userActions.user.localId + '.json', {
        // add the caught pokemon to the list in firebase
        pokemonsCaught: [data.pokemonCaught].concat(response.data.pokemonsCaught)
      }).then((_) => {
        dispatch(updateUser({
          pokemonsCaught: [data.pokemonCaught].concat(response.data.pokemonsCaught)
        }));
      }).catch((e) => {
        console.log(e);
      });
    }).catch(e => {
      console.log(e);
    });
};

export const addPokemonSeen = (data ) => (dispatch, getState ) => {
  axios.get(firebaseConfig.databaseURL + '/users/' + getState().userActions.user.localId + '.json')
    .then(response => {
        axios.patch(firebaseConfig.databaseURL + '/users/' + getState().userActions.user.localId + '.json', {
          // add the seen pokemon to the list in firebase
          pokemonsSeen: [data.pokemonSeen].concat(response.data.pokemonsSeen)
        }).then(_ => {
          dispatch(updateUser({
            pokemonsSeen: [data.pokemonSeen].concat(response.data.pokemonsSeen)
          }));
        }).catch((e) => {
          console.log(e);
        });
    })
    .catch(e => {
      console.log(e);
    });
};

export const registerFirebase = ( data ) => dispatch => {
  return new Promise((resolve, reject) => {
    axios
      .post(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' +
        firebaseConfig.apiKey,
        {
          email: data.email,
          username: data.username,
          pokemonsCaught: [],
          pokemonsSeen: []
        }).then((response) => {
      dispatch(setUser({
        ...response.data,
        localId: res.data.localId,
        pokemonsCaught: [],
        pokemonsSeen: []
      }));
      resolve();
    }).catch((e) => {
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
        axios.get(firebaseConfig.databaseURL + '/users/' + res.data.localId + '.json')
          .then(response => {
            dispatch(setUser({
              username: response.data.username,
              email: response.data.email,
              localId : res.data.localId,
              pokemonsCaught: response.data.pokemonsCaught,
              pokemonsSeen: response.data.pokemonsSeen
            }));
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
