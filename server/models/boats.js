// Requiring MongoDB's mongoose
const mongoose = require('mongoose');

// Building the Boat Object Schema
const BoatSchema = new mongoose.Schema({
	model: { type: String },
	brand: { type: String },
	hp: { type: Number },
	size: { type: Number },
});

// Exporting the Module

const Boat = mongoose.model('Boat', BoatSchema);

module.exports = Boat;
