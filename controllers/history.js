const History = require('../models/History');
const { responseObj } = require('../helpers/responseObject');

exports.getHistory = async (req, res, next) => {
  try {
    const history = await History.find();

    return res.status(200).json(responseObj(true, 200, history))
  } catch (err) {
    return res.status(500).json(responseObj(false, 500, err.message))
  }
}

exports.addHistory = async (req, res, next) => {
  try {
    const { month, total } = req.body;
    const history = await History.create(req.body);

    return res.status(201).json(responseObj(true, 201, history))
  } catch (err) {
    if (err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map(value => value.message);

      return res.status(400).json(responseObj(false, 400, null, messages))
    }

    return res.status(500).json(responseObj(false, 500, null, err.message))
  }
}

exports.deleteHistory = async (req, res, next) => {
  try {
    const history = await History.findById(req.params.id);

    if (!history) return res.status(404).json(responseObj(false, 404, null, "No transaction found"));

    await history.remove();

    return res.status(200).json(responseObj(true, 200, {}))
  } catch (err) {
    return res.status(500).json(responseObj(false, 500, null, err.message))
  }
}
