let Sequelize = require("sequelize")

if (!process.env.DATABASE_NAME) {
    require("dotenv").config()
}