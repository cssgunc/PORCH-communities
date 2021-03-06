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
        hoursWorked: {
            type: Sequelize.DOUBLE,
            allowNull: false,
            defaultValue: '0'
        },
        organization: {
            type: Sequelize.TEXT,
            allowNull: false,
        },
        isRegistered: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            // 0 is false
            defaultValue: '0',
        },
    }, {
        timestamps: false,
        // MySQL recommends snake_case for fields
        // Sequelize recommends camelCase
        // mapping camelCase to snake_case when generating SQL
        underscored: true,
    })
}