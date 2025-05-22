const { v4: uuidv4 } = require('uuid');
let todos = [];

const getTodos = () => todos;

const addTodo = (title) => {
  const newTodo = { id: uuidv4(), title };
  todos.push(newTodo);
  return newTodo;
};

const deleteTodo = (id) => {
  todos = todos.filter(todo => todo.id !== id);
};

module.exports = { getTodos, addTodo, deleteTodo };
