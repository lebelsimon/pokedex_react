export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const UPDATE_TODO = 'UPDATE_TODO'

export const addTodo = data => ({
  type: ADD_TODO,
  data: data
})

export const removeTodo = id => ({
  type: REMOVE_TODO,
  remove: id
})

export const updateTodo = () => ({
    type: UPDATE_TODO
  })