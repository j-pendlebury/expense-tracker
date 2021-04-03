const Payment = require('../models/Payment');

const successObj = (success, responseCode, results) => {
  return {
    success,
    responseCode,
    results
  }
}

const failObj = (success, responseCode, error) => {
  return {
    success,
    responseCode,
    error
  }
}

// @route  GET /api/v1/payments
exports.getPayments = async (req, res, next) => {
  try {
    const payments = await Payment.find();
    
    return res.status(200).json(successObj(true, 200, payments));
  } catch (err) {
    return res.status(500).json(failObj(false, 500, err.message))
  }
}

// @route POST /api/v1/payments
exports.addPayment = async (req, res, next) => {
  try {
    const { description, amount, person } = req.body;
    const payment = await Payment.create(req.body);

    return res.status(201).json(successObj(true, 201, payment))
  } catch (err) {
    if (err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map(value => value.message);

      return res.status(400).json(failObj(false, 400, messages))
    }

    return res.status(500).json(failObj(false, 500, err.message))
  }
}

// @route DELETE /api/v1/payments/:id
exports.deletePayment = async (req, res, next) => {
  try {
    const payment = await Payment.findById(req.params.id);

    if (!payment) return res.status(404).json(failObj(false, 404, "No transaction found"));

    await payment.remove();

    return res.status(200).json(successObj(true, 200, {}))
  } catch (err) {
    return res.status(500).json(failObj(false, 500, err.message))
  }
}
