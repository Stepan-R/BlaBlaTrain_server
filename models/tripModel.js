const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tripSchema = new Schema({
  startTime: {
    type: String,
    required: true
  },
  finishTime: {
    type: String,
    required: true
  },
  travelFrom: {
    type: String,
    required: true
  },
  travelTo: {
    type: String,
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  finishDate: {
    type: Date,
    required: true
  },
  travelTime: {
    type: String,
    required: true
  },
  avaiableSits: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Trip', tripSchema);