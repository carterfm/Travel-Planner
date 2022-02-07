const Traveler = require("./Traveler.js");
const Location = require("./Location.js");
const Trip = require("./Trip.js");

//Puts a TravelerId field in Trip
Trip.belongsTo(Traveler);
//Allows a join query combining a traveler w/ all associated trips
Traveler.hasMany(Trip);
//Puts a LocationId field in Trip
Trip.belongsTo(Location);
//Allows a join query combining a location w/ all associated trips
Location.hasMany(Trip);

module.exports = {
    //kosher since keys and value are of the same name here
    Traveler,
    Location,
    Trip
}
