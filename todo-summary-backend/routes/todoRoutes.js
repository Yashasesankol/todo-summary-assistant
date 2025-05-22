const express = require('express');
const router = express.Router();
const { getAllTodos, addNewTodo, deleteTodoById } = require('../controllers/todoController');

router.get('/', getAllTodos);
router.post('/', addNewTodo);
router.delete('/:id', deleteTodoById);

module.exports = router;
