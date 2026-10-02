const express = require('express');
const router = express.Router();

const taskController = require('../controllers/taskController');

// Definindo as rotas para as operações CRUD

router.get('/', taskController.getAllTasks);
router.get('/task/:id', taskController.getTaskId);
router.get('/completed', taskController.getTaskCompleted );
router.post('/create', taskController.createTask ); // falta implementar
router.post('/deletar', taskController.deleteTask);
router.post('/atualizar', taskController.atualizarTask);
router.post('/deletarAll', taskController.deleteAll);
router.post('/filtrarTasks', taskController.filtrarTask);
module.exports = router;
