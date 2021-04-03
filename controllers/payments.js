const Payment = require('../models/Payment');

const resposeObj = (success, responseCode, results = {}, error = '') => {
  const defaultResponse = {
    success,
    responseCode
  }

  if (error !== '') {
    defaultResponse.error = error
  } else {
    defaultResponse.results = results
  };

  return defaultResponse;
}

// @route  GET /api/v1/payments
exports.getPayments = async (req, res, next) => {
  try {
    const payments = await Payment.find();
    
    return res.status(200).json(resposeObj(true, 200, payments));
  } catch (err) {
    return res.status(500).json(resposeObj(false, 500, null, err.message))
  }
}

// @route POST /api/v1/payments
exports.addPayment = async (req, res, next) => {
  try {
    const { description, amount, person } = req.body;
    const payment = await Payment.create(req.body);

    return res.status(201).json(resposeObj(true, 201, payment))
  } catch (err) {
    if (err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map(value => value.message);

      return res.status(400).json(resposeObj(false, 400, null, messages))
    }

    return res.status(500).json(resposeObj(false, 500, null, err.message))
  }
}

// @route DELETE /api/v1/payments/:id
exports.deletePayment = async (req, res, next) => {
  try {
    const payment = await Payment.findById(req.params.id);

    if (!payment) return res.status(404).json(resposeObj(false, 404, null, "No transaction found"));

    await payment.remove();

    return res.status(200).json(resposeObj(true, 200, {}))
  } catch (err) {
    return res.status(500).json(resposeObj(false, 500, null, err.message))
  }
}
