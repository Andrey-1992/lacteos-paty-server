const { Router } = require('express');
const router = Router();
const  { 
  getChesseRecord,
  storeChesseRecord,
  storeChesseRecordOut,
  getChesseRecordById,
  // getProdRecordsByDate,
  updateChesseRecordById,
  updateChesseRecordOutById,
  deleteChesseRecordById
} = require('../controllersCheese/indexControllersCheese')

router.get('/inventario-quesos', getChesseRecord);
router.get('/inventario-quesos/:id', getChesseRecordById);
// router.get(`/inventario-quesos-by-date/${month}/${year}`, getProdRecordsByDate);
router.post('/ingresar-quesos', storeChesseRecord);
router.post('/ingresar-quesos-out', storeChesseRecordOut);
router.put('/actualizar-quesos/:id', updateChesseRecordById);
router.put('/actualizar-quesos-out/:id', updateChesseRecordOutById);
router.delete('/eliminar-quesos/:id', deleteChesseRecordById);

module.exports = router;