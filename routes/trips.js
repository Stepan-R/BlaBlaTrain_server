const express = require('express');
const {
  getAllTrips,
  createTrip,
  deleteTrip,
  updateTrip
} = require('../controllers/tripController');
const router = express.Router();

router.get('/', getAllTrips);

router.post('/', createTrip);

router.delete('/:id', deleteTrip);

router.patch('/:id', updateTrip);

module.exports = router;