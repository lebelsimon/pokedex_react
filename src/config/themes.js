import background from '../images/pokeball_gold.jpg'

import destroyedPokeball from '../images/pokeball_destroyed.jpg'

import pokeballEvoli from '../images/pokeball_evoli.jpg'


import pattern from '../pattern.jpg';

const themeLight = {
  primary: 'white',
  secondary: 'green',
  height: '100vh',
  backgroundimage: background,
  backgroundposition: 'center',
  backgroundrepeat: 'no-repeat',
  backgroundsize: 'cover'
};

const themeDark = {
  primary: 'black',
  secondary: 'red',
  height: '100vh',
  backgroundimage: destroyedPokeball,
  backgroundposition: 'center',
  backgroundrepeat: 'no-repeat',
  backgroundsize: 'cover'
};

const themeEvoli = {
  primary: 'black',
  secondary: 'red',
  height: '100vh',
  backgroundimage: pokeballEvoli,
  backgroundposition: 'center',
  backgroundrepeat: 'no-repeat',
  backgroundsize: 'cover'
};

export { themeDark, themeLight, themeEvoli };
