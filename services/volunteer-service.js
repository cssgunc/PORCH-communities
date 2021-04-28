const { v4: uuidv4 } = require("uuid"),
    // Transaction = require("../db/sequelize").transactions,
    Volunteers = require("../db/sequelize").volunteers;

exports.addVolunteer = async function (hoursWorked, organization, isRegistered) {
    try {
        Volunteers.create({
            id: 1,
            hoursWorked,
            organization,
            isRegistered,
        })
    } catch (e) {
        console.log("error: " + e)
    }
}