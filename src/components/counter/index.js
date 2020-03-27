import React, { useState } from 'react';
import styled from 'styled-components';

import alltheActions from '../../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const Counter = props => {
  console.log(props);
  return (
    <Container>
      <p>{props.label}</p>
      <p>{props.counterState.counter}</p>
      <div>
        <button onClick={props.actions.counter.incrementCounter}>+</button>
        <button onClick={props.actions.counter.decrementCounter}>-</button>
      </div>
    </Container>
  );
};

const Container = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: column;
  background-color: #22222234;
  align-items: center;
  justify-content: center;
  margin: 12px;
`;

Counter.propTypes = {};

const mapDispatchToProps = () => dispatch => ({
  actions: {
    counter: bindActionCreators(alltheActions.counter, dispatch)
  }
});

const mapStateToProps = state => ({
  counterState: state.counter
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
