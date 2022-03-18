const express = require('express');
const router = express.Router();

const controller = require('./controller');

router.get('/todolist', controller.getAllTodolist)
router.post('/todolist', controller.createTodolist)
router.put('/todolist/:id', controller.updateTodolist)
router.delete('/todolist/:id', controller.deleteTodolist)

module.exports = router;