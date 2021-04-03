const express = require('express');
const router = express.Router();
const { getPayments, addPayment, deletePayment } = require('../controllers/payments');

// Get all payments
router.route('/')
  .get(getPayments)
  .post(addPayment);

router.route('/:id')
  .delete(deletePayment);

module.exports = router;
