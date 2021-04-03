const express = require('express');
const router = express.Router();
const { getHistory, addHistory, deleteHistory } = require('../controllers/history');

router.route('/')
  .get(getHistory)
  .post(addHistory);

router.route('/:id')
  .delete(deleteHistory)

module.exports = router;
