import React, {useEffect} from 'react';
import './SideDrawer.css';


import {bindActionCreators} from "redux";
import alltheActions from "../../../actions";
import {connect} from "react-redux";

const SideDrawer = props => {
  console.log(props, 'props')
  // console.log(test)

  useEffect(() => {
    const handler = setTimeout(() => {
      get();
    }, 500);
    return () => {
      clearTimeout(handler);
    };
  }, []);

  const get = async () => {
    try {
      const test = props.actions.userActions.isLogin();
      console.log(test)
    } catch (err) {
      console.log(err);
    }
  };

  return (
    // {test ? (
      <nav className='side-drawer'>
    <ul>
      <li>
        <a href='/listPokemon'>Pokédex</a>
      </li>
      <li>
        <a href='/login'>Login</a>
      </li>
      <li>
        <a href='/profile'>Profile</a>
      </li>
      <li>
        <a href='/settings'>Settings</a>
      </li>
      <li>
        <a href='/disconnect'>Disconnect</a>
      </li>
      <li>
        <a href='/capture'>Capture</a>
      </li>
    </ul>
  </nav>
    // ) : (
    //   <>
    //   </>
    // )}
    
  );
};

const mapDispatchToProps = () => dispatch =>({
  actions:{
    userActions: bindActionCreators(alltheActions.userActions, dispatch)
  }
});

const mapStateToProps = state => ({
  userState: state.userActions
});

export default connect(mapStateToProps, mapDispatchToProps)(SideDrawer);
