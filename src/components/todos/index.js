import React, { useState } from 'react'
import styled from 'styled-components'

import alltheActions from '../../actions'
import { bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import Todo from './todo'

const Todos = props => {

    const [body, setBody] = useState('');

  const handleBodyChange = event => {
    setBody(event.target.value)
  };

  const handleSubmit = async event => {
    console.log(body);
    event.preventDefault();
    props.actions.crud.addTodo({
      id: props.crudState.counter,
      content: body
    });
    
    setBody('')

  };

  console.log(props);
  return (
    <Container>
        <form className='post-form'>
          <InputContainer>
            <StyledInput
              type='text'
              value={body}
                onChange={handleBodyChange}
              placeholder='Nouvelle tâche...'
              required
            ></StyledInput>
  
            <StyledButton onClick={handleSubmit}>Ajouter une tâche</StyledButton>
          </InputContainer>
        </form>

        <DivTodos>
        {props.crudState.todos.length > 0 ? (
            <div className='todos'>
              {props.crudState.todos.map(todo => (
                console.log("Hello", todo),
                  <Todo key={todo.id} todo={todo}></Todo>
              ))}
            </div>
          ) : (
            <></>
          )}
        </DivTodos>
    </Container>
  )
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
const InputContainer = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: column;
`;
const StyledInput = styled.input`
  box-sizing: border-box;
  height: 45px;
  padding: 0px 10px;
  outline: none;
  border: none;
  margin: 1px 0px 0px 5px;
  border: 1px solid rgba(0, 0, 0, 0.6);
`;

const StyledButton = styled.button`
  background-color: #0073b1;
  height: 45px;
  padding: 0px 10px;
  outline: none;
  border: none;
  margin: 1px 0px;
`;
const DivTodos = styled.div`
display: flex;
flex-direction: column;
align-items: center;
  justify-content: center;
  margin: 12px;
  width:100%;
`;

Todos.propTypes = {};

const mapDispatchToProps = () => dispatch =>({
    actions:{
      crud: bindActionCreators(alltheActions.crud, dispatch)
    }
  });
  
  const mapStateToProps = state => ({
    crudState: state.crud
  });


export default connect(mapStateToProps, mapDispatchToProps)(Todos)
