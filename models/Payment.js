const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
  description: {
    type: String,
    trim: true,
    required: (true, 'Add description')
  },
  amount: {
    type: Number,
    required: (true, 'Add amount')
  },
  date: {
    type: Date,
    default: Date.now
  },
  person: {
    type: String,
    trim: true,
    required: (true, 'Add person')
  }
})

module.exports = mongoose.model('Payment', PaymentSchema);
