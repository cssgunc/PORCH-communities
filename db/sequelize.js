let Sequelize = require("sequelize"),
    Volunteers = require("../models/volunteers"),
    Donors = require("../models/donors"),
    Donations = require("../models/donations")

if (!process.env.DATABASE_NAME) {
    require("dotenv").config()
}


let options = {
    dialect: 'mysql',
    pool: {
        max: 2,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorsAliases: false,
    logging: false
}

if (process.env.DATABASE_HOST) {
    options.host = process.env.DATABASE_HOST;
}

if (process.env.DATABASE_PORT) {
    options.port = process.env.DATABASE_PORT;
}

options.define ={timestamp: false};


let sequelize = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USER, process.env.DATABASE_PASSWORD, options);


(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();

// define models
sequelize.volunteers = Volunteers.init_table(sequelize);
sequelize.donors = Donors.init_table(sequelize);
sequelize.donations = Donations.init_table(sequelize);

// TODO: DonorID is camelCase, change to snake_case?
sequelize.donations.belongsTo(sequelize.donors, { foreignKey: 'Donor_ID' });
sequelize.donations.belongsTo(sequelize.volunteers, { foreignKey: 'Volunteer_ID' });
module.exports = sequelize;
