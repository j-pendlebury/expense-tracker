const Payment = require('../models/Payment');
const { responseObj } = require('../helpers/responseObject');

// @route  GET /api/v1/payments
exports.getPayments = async (req, res, next) => {
  try {
    const payments = await Payment.find();
    
    return res.status(200).json(responseObj(true, 200, payments));
  } catch (err) {
    return res.status(500).json(responseObj(false, 500, null, err.message))
  }
}

// @route POST /api/v1/payments
exports.addPayment = async (req, res, next) => {
  try {
    const { description, amount, person } = req.body;
    const payment = await Payment.create(req.body);

    return res.status(201).json(responseObj(true, 201, payment))
  } catch (err) {
    if (err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map(value => value.message);

      return res.status(400).json(responseObj(false, 400, null, messages))
    }

    return res.status(500).json(responseObj(false, 500, null, err.message))
  }
}

// @route DELETE /api/v1/payments/:id
exports.deletePayment = async (req, res, next) => {
  try {
    const payment = await Payment.findById(req.params.id);

    if (!payment) return res.status(404).json(responseObj(false, 404, null, "No transaction found"));

    await payment.remove();

    return res.status(200).json(responseObj(true, 200, {}))
  } catch (err) {
    return res.status(500).json(responseObj(false, 500, null, err.message))
  }
}
