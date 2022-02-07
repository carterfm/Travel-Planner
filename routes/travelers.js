const router = require('express').Router();
const { Traveler, Location, Trip } = require('../models');

// It's done when the GET route /api/travellers returns all traveller data without associated trips in Insomnia.
router.get("/", async (req, res) => {
    try {
        const travelersData = await Traveler.findAll();
        res.status(200).json(travelersData);
    } catch (err) {
        response.status(500).json(err);
    }
});

// It's done when the GET route /api/travellers/:id returns a single traveller's 
// data with their associated trips and a list of locations in Insomnia.
router.get("/:id", async (req, res) => {
    try {
        const travelerData = await Traveler.findByPk(req.params.id,
            { include: [{ model: Trip, include: [Location]}]});
        if (!travelerData) {
            res.status(404).json({ message: 'No traveler found with that id!' });
            return;
        }
        res.status(200).json(travelerData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// It's done when the POST route /api/travellers creates traveller data and returns a successful response in Insomnia.
router.post("/", async (req, res) => {
    try {
        const newTraveler = await Traveler.create(req.body);
        //If this doesn't work, it'll throw an error
        res.status(200).json(newTraveler);
    } catch (err) {
        res.status(500).json(err);
    }
});

// It's done when the DELETE route /api/travellers/:id removes a traveller and 
// any trips associated with them and returns a successful response in Insomnia.
router.delete("/:id", async (req, res) => {
    try {
        const deletedTraveler = await Traveler.destroy({ where: { id: req.params.id }});
        if(!deletedTraveler) {
            res.status(404).json({ message: 'No traveler found with that id.' });
            return;
        }
        res.status(200).json(deletedTraveler);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;

