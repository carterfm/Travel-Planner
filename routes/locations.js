const router = require('express').Router();
const { response } = require('express');
const { Location } = require('../models');

// It's done when the GET route /api/locations returns all location data in Insomnia.
router.get("/", async (req, res) => {
    try {
        const locationsData = await Location.findAll();
        res.status(200).json(locationsData);
    } catch (err) {
        response.status(500).json(err);
    }
});

// It's done when the GET route /api/locations/:id returns a single location's data, 
// with its associated trips, in Insomnia.
router.get("/:id", async (req, res) => {
    try {
        const locationData = await Location.findByPk(req.params.id);
        if (!locationData) {
            res.status(404).json({ message: 'No location found with that id!' });
            return;
        }
        res.status(200).json(travelerData);
    } catch (err) {
        response.status(500).json(err);
    }
})

// It's done when the POST route /api/locations creates location data and returns a successful response in Insomnia.
router.post("/", async (req, res) => {
    try {
        const newLocation = await Location.create(req.body);
        //question: is this an ok way to check that what we're doing is kosher?
        if(!newLocation) {
            res.status(404).json({ message: 'Cannot create new location; data missing.' });
            return;
        }
        res.status(200).json(newLocation);
    } catch (err) {
        response.status(500).json(err);
    }
})

// It's done when the DELETE route /api/locations/:id removes a location and any trips 
// associated with it and returns a successful response in Insomnia.
router.delete("/:id", async (req, res) => {
    try {
        const deletedLocation = await Location.destroy({ where: { id: req.params.id }});
        if(!deletedLocation) {
            res.status(404).json({ message: 'No location found with that id.' });
            return;
        }
        res.status(200).json(deletedLocation);
    } catch (err) {
        response.status(500).json(err);
    }
})

module.exports = router;