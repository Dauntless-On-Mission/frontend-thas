export const addTodo = todo => {
  return {
    type: "ADD_TODO",
    payload: todo
  };
};

export const removeTodo = index => {
  return {
    type: "REMOVE_TODO",
    payload: index
  };
};

export const removeAllTodos = () => {
  return {
    type: "REMOVE_ALL_TODOS",
    payload: []
  };
};

export const loadTodos = () => {
  return dispatch => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(res => res.json())
      .then(todos => {
        return dispatch({
          type: "LOAD_TODOS",
          payload: todos.slice(0, 10).map(todo => todo.title)
        });
      });
  };
};

const todoReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      // state: append new todo;
      return [...state, action.payload];
    case "REMOVE_TODO":
      // state: remove index todo
      return state.filter((todo, index) => index !== action.payload);
    case "REMOVE_ALL_TODOS":
      return action.payload;
    case "LOAD_TODOS":
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export default todoReducer;
