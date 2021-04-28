const { v4: uuidv4 } = require("uuid"),
    // Transaction = require("../db/sequelize").transactions,
    Donors = require("../db/sequelize").donors;

exports.addDonor = async function (isRegistered, donorLocation) {
    try {
        Donors.create({
            id: 1,
            isRegistered,
            donorLocation,
        })
    } catch (e) {
        console.log("error: " + e)
    }
}