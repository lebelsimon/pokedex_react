import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import {bindActionCreators} from "redux";
import alltheActions from "../../actions";
import {connect} from "react-redux";
import { motion } from 'framer-motion';

const NavBar = props => {
  const [isLoggedin, setisLoggedin] = useState(false);
  console.log(props)
  
  useEffect(() => {
    
  }, []);
  return (
    <Container>
      <Menu>
        <nav>
          <Link
            to='/listPokemon'>
            Pokédex
          </Link>
          <Link
            to='/login'>
            Login
          </Link>
          <Link
            to='/profile'>
            Profile
          </Link>
          <Link
            to='/disconnect'>
            Disconnect
          </Link>
          <Link
            to='/settings'>
            Settings
          </Link>
        </nav>
      </Menu>

      {/* <p
        onClick={() => {
          setMenu(menu === 'visible' ? 'hidden' : 'visible')
        }}
      >
        Burger
      </p> */}
    </Container>
  );
};

const menuVariants = {
  visible: {
    x: 0
  },
  hidden: { x: -400 }
}

const Menu = styled(motion.div)`
  width: 100%
  background-color: red;
`

const Container = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    padding: 0 30px;
    height: 90px;
  }

  @media (max-width: 425px) {
    padding: 0 10px;
    height: 45px;
  }
`;
const mapStateToProps = state => ({
  userState: state.userActions
});

const mapDispatchToProps = () => dispatch =>({
  actions:{
    userActions: bindActionCreators(alltheActions.userActions, dispatch)
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
