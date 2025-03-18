const tripSchema = require('../models/tripModel');
const mongoose = require('mongoose');

const getAllTrips = async (req, res) => {
  const trips = await tripSchema.find().sort({createdAt: -1});

  res.json(trips).status(200);
};

const createTrip = async (req, res) => {
  const { 
    travelFrom,
    travelTo,
    startDate,
    finishDate,
    travelTime,
    avaiableSits,
    price
   } = req.body;

  try {
    const trip = await tripSchema.create({ 
      travelFrom,
      travelTo,
      startDate,
      finishDate,
      travelTime,
      avaiableSits,
      price
     });
    res.status(200).json(trip);
  }
  catch(error) {
    res.status(401).json({ error: error.message });
  }
};

const deleteTrip = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'Could not find such a trip!' });
  }

  const trip = await tripSchema.findOneAndDelete({ _id: id });

  if (!trip) {
    return res.status(400).json({ error: 'Could not find such a trip!' })
  }

  res.status(200).json('Trip is deleted!');
}

const updateTrip = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'Could not find such a trip!' });
  }

  const trip = await tripSchema.findOneAndUpdate({ _id: id }, {
    ...req.body
  });

  if (!trip) {
    return res.status(400).json({ error: 'Could not find such a trip!' })
  }

  res.status(200).json(trip);
}

module.exports = {
  getAllTrips,
  createTrip,
  deleteTrip,
  updateTrip
};