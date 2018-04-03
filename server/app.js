const express = require('express');
const mongoose = require('mongoose');
const Boat = require('./models/boats');

const app = express();
const port = 3001;

// connect mongoose to mLab
mongoose.connect('mongodb://nunezrip:coco123@ds133659.mlab.com:33659/boats2');

// get boats
app.get('/boats', (req, res) => {
	res.json([
		{ id: 1, model: 'OneBoat' },
		{ id: 2, model: 'TwoBoat' },
		{ id: 3, model: 'ThreeBoat' },
	]);
});

// post boats
app.post('/boats', (req, res) => {
	// Receive the JSON Boat object
	const boatObj = new Boat({
		model: req.body.model,
		brand: req.body.brand,
		hp: req.body.hp,
		size: req.body.size,
	});
	console.log(boatObj);
	boatObj.save(err => {
		if (err) {
			res.send(err);
		}
		res.json({ message: 'Boat created' });
	});
});

app.listen(port, () => {
	console.log(`app served on port ${port}`);
});
