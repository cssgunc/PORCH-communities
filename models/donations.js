const { v4: uuidv4 } = require("uuid"),
    Sequelize = require("sequelize");

exports.init_table = function (sequelize) {
    return sequelize.define('donations', {
        id: {
            type: Sequelize.UUID,
            allowNull: false,
            unique: true,
            primaryKey: true,
        },
        donorId: {
            type: Sequelize.UUID,
            allowNull: false,
        },
        volunteerId: {
            type: Sequelize.UUID,
            allowNull: false,
        },
        donationDate: {
            type: Sequelize.DATE,
            allowNull: false,
        },
        donationContent: {
            type: Sequelize.TEXT,
            allowNull: false,
        },
        donationPickedUp: {
            type: Sequelize.ENUM('pickedUp', 'notPickedUp', 'pending', 'N/A'),
            allowNull: false,
            defaultValue: 'pending',
        },
    },{
        timestamps: false,
        // MySQL recommends snake_case for fields
        // Sequelize recommends camelCase
        // mapping camelCase to snake_case when generating SQL
        underscored: true,
    })
}