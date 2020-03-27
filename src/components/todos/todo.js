import React from 'react';
import styled from 'styled-components';

import alltheActions from '../../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const Todo = props => {
    const todo = props.todo;
    return (
        <AllContainer>
      <DivPublication>
        <DivID>
          <h1>Todo : {todo.content}</h1>
          <DeleteTodo onClick={() => props.actions.crud.removeTodo(todo.id)}>
            Supprimer
          </DeleteTodo>
        </DivID>
      </DivPublication>
    </AllContainer>
  );
};

const DeleteTodo = styled.button`
  background-color: #0073b1;
  height: 45px;
  padding: 0px 10px;
  outline: none;
  border: none;
  margin: 1px 0px;
  margin-left: 10px;
`;

const AllContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 12px;
  border: none;
  border-bottom: 1px solid black;
  border-top: 1px solid black;
`;
const DivID = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
const DivTools = styled.div`
  display: flex;
  margin-left: 5px;
  width: 100%;
`;
const DivPublication = styled.div`
  display: flex;
  border: none;
  margin-bottom: 5px;
`;
const mapDispatchToProps = () => dispatch => ({
  actions: {
    crud: bindActionCreators(alltheActions.crud, dispatch)
  }
});

const mapStateToProps = state => ({
  crudState: state.crud
});

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
