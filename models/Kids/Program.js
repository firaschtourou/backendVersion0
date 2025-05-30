// backend/models/CodeModel.js
const mongoose = require('mongoose');

const codeSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Code', codeSchema);