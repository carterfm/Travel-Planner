const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Traveler extends Model {}

Traveler.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    }, 
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
            isEmail: true
        }
    }
}, {
    sequelize,
    timestamps: false
});

module.exports = Traveler;