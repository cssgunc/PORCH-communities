const { v4: uuidv4 } = require("uuid"),
    Sequelize = require("sequelize");

exports.init_table = function (sequelize) {
    return sequelize.define('volunteers', {
        id: {
            type: Sequelize.UUID,
            allowNull: false,
            unique: true,
            primaryKey: true,
        },
        hours_worked: {
            type: Sequelize.DOUBLE,
            allowNull: false,
            defaultValue: '0.0'
        },
        organization: {
            type: Sequelize.TEXT,
            allowNull: true,
        },
        is_registered: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
    }, {
      timestamps: false
    })
}