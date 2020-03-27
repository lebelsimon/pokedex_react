import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import alltheActions from '../actions';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
// import ReactPaginate from 'react-paginate'

const ProfileScreen = props => {
  const history = useHistory();
  useEffect(() => {
    if (
      Object.keys(props.userState.user).length === 0 &&
      props.userState.user.constructor === Object
    ) {
      history.push('/login');
    }
  }, []);
  return (
    <div>
      <h1>ProfileScreen</h1>
      <dl>
        <dd>Email</dd>
        <dt>{props.userState.user.email}</dt>
        <dd>Username</dd>
        <dt>{props.userState.user.username}</dt>
      </dl>
    </div>
  );
};

const mapDispatchToProps = () => dispatch => ({
  actions: {
    userActions: bindActionCreators(alltheActions.userActions, dispatch)
  }
});

const mapStateToProps = state => ({
  userState: state.userActions
});

ProfileScreen.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
