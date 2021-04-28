const sequelize = require("./sequelize");
const donationsService = require("../services/donations-service");
const donorService = require("../services/donor-service");
const volunteerService = require("../services/volunteer-service");
const { v4: uuidv4 } = require("uuid");

// exit param is passed to determine whether or not to exit after running the function
// for scripts, exit should be true
// when called by the server, exit should be false

/**
 * Drops all tables in sequelize
 * @param {boolean} exit - If true, exit the process after finishing
 */
async function dropTables(exit) {
    try {
        await sequelize.drop({ force: true, cascade: true });
        if (exit) process.exit(0);
    } catch (e) {
        console.error(e);
        if (exit) process.exit(1);
    }
}

/**
 * Creates all tables defined in sequelize
 * @param {boolean} exit - If true, exit the process after finishing
 */
async function createTables(exit) {
    try {
        await sequelize.sync();
        if (exit) process.exit(0);
    } catch (e) {
        console.error(e);
        if (exit) process.exit(1);
    }
}

async function initDonor(exit) {
    donorService.addDonor(true, "1234 Home Lane")
    if (exit) process.exit(0);
}

async function initVolunteer(exit) {
    volunteerService.addVolunteer(0, "The Church", true)
    if (exit) process.exit(0);
}

async function initDonation(exit) {
    // const donorId = uuidv4();
    // const volunteerId = uuidv4();
    donationsService.addDonation(1, 1, Date.now(), "Soup", "pending")
    let result = donationsService.getAllDonations()
    result.then(function(res) {
        console.log(res)
    })
    if (exit) process.exit(0);
}

/**
 * Cleans the database for testing
 */
exports.preTestSetup = async () => {
    await dropTables(false);
    await createTables(false);
    await initDonation(false);
    await initDonor(false)
    await initVolunteer(false)
    // await initAdmin(false);
    // await initTestUsers(false);
}

exports.dropTables = dropTables;
exports.createTables = createTables;
exports.initDonation = initDonation;
exports.initDonor = initDonor;
exports.initVolunteer = initVolunteer;