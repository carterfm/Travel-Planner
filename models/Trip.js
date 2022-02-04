const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Trip extends Model {}

Trip.init({
    trip_budget: {
        type: DataTypes.DECIMAL
    },
    traveler_amount: {
        type: DataTypes.INTEGER
    }
}, {
    sequelize
});

module.exports = Trip;