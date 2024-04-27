const express = require('express');
const router = express.Router();
const barberiasController = require('../controllers/barberiasController');

router.get('/', barberiasController.listarBarberias);
router.post('/', barberiasController.crearBarberia);
router.get('/:id', barberiasController.obtenerBarberiaPorId);
router.put('/:id', barberiasController.actualizarBarberia);
router.delete('/:id', barberiasController.eliminarBarberia);

module.exports = router;