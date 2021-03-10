const sequelize = require("./sequelize");

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

/**
 * Cleans the database for testing
 */
exports.preTestSetup = async () => {
    await dropTables(false);
    await createTables(false);
    await initAdmin(false);
    await initTestUsers(false);
}

exports.dropTables = dropTables;
exports.createTables = createTables;