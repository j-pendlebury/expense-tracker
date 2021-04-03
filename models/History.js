const mongoose = require('mongoose');

const HistorySchema = new mongoose.Schema({
  month: {
    type: String,
    trim: true,
    required: (true, 'Add month')
  },
  total: {
    type: Number,
    required: (true, 'Add total')
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('History', HistorySchema);
