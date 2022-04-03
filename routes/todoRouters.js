const { Router } = require('express');
const ToDoController = require('../controllers/TodoController');
const router = Router();

router.get('/', ToDoController.showTodo);
router.post('/add', ToDoController.addTodo);
router.post('/edit', ToDoController.editTodo);
router.post('/update', ToDoController.updateTodo);
router.post('/delete', ToDoController.deleteTodo)

module.exports = router;