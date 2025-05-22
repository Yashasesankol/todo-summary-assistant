const { getTodos, addTodo, deleteTodo } = require('../models/todoModel');

const getAllTodos = (req, res) => res.json(getTodos());

const addNewTodo = (req, res) => {
  const { title } = req.body;
  const newTodo = addTodo(title);
  res.status(201).json(newTodo);
};

const deleteTodoById = (req, res) => {
  deleteTodo(req.params.id);
  res.status(204).send();
};

module.exports = { getAllTodos, addNewTodo, deleteTodoById };
