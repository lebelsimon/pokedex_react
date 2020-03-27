import background from '../images/testecran.jpg'

import pattern from '../pattern.jpg'



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
  backgroundimage: pattern,
  backgroundposition: 'center',
  backgroundrepeat: 'no-repeat',
  backgroundsize: 'cover'
};

export { themeDark, themeLight };
