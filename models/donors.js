const { v4: uuidv4 } = require("uuid"),
    Sequelize = require("sequelize");

exports.init_table = function (sequelize) {
    return sequelize.define('donors', {
        id: {
            type: Sequelize.UUID,
            allowNull: false,
            unique: true,
            primaryKey: true,
        },
        isRegistered: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: false,
        },
        donorLocation: {
            type: Sequelize.TEXT,
            allowNull: false,
        },
    }, {
        timestamps: false,
        // MySQL recommends snake_case for fields
        // Sequelize recommends camelCase
        // mapping camelCase to snake_case when generating SQL
        underscored: true,
    })
}