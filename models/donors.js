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
        is_registered: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: false,
        },
        donor_location: {
            type: Sequelize.TEXT,
            allowNull: false,
        },
    }, {
      timestamps: false
    })
}