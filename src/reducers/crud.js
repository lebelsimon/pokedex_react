import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from '../actions/crud'

const initialState = {
  todos: [],
  counter: 0
}


const deleteTodo = (todos, id) => {
  console.log("test delete")
  return todos.filter(todo => todo.id !== id);
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        
        todos:[...state.todos, action.data],
        counter: state.counter + 1
      }
      case REMOVE_TODO:
        return {
          ...state,
          todos: deleteTodo(state.todos, action.remove)
        }
        case UPDATE_TODO:
            return {
                ...state
            }
    default:
      return state
  }
}
