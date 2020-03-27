import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import alltheActions from '../actions';
import { connect } from 'react-redux';
// import ReactPaginate from 'react-paginate'

const DisconnectScreen = props => {
  useEffect(() => {
    props.actions.userActions.unsetUser();
  }, []);
  return <h1>See ya!</h1>;
};

DisconnectScreen.propTypes = {};

const mapDispatchToProps = () => dispatch => ({
  actions: {
    userActions: bindActionCreators(alltheActions.userActions, dispatch)
  }
});

const mapStateToProps = state => ({
  userState: state.userActions
});

export default connect(mapStateToProps, mapDispatchToProps)(DisconnectScreen);
