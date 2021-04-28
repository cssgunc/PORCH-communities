const { v4: uuidv4 } = require("uuid"),
    // Transaction = require("../db/sequelize").transactions,
    Donations = require("../db/sequelize").donations;

// let getDonations  = async function() {
//     setTimeout(()=>{}, 3000);
//     let res = await Donations.findAll();
//     console.log("in test")
//     console.log(res);
// }

// let addDonation = async function(donorId, volunteerId, donationDate, donationContent, donationPickedUp) {
//     const newDonationId = uuidv4();
//     await Donations.create({id: newDonationId,
//                             donorId,
//                             volunteerId,
//                             donationDate,
//                             donationContent,
//                             donationPickedUp,});
// }

// getDonations();
// addDonation(1,1,Date.now(),"cans", "pending");

exports.addDonation = async function (donorId, volunteerId, donationDate, donationContent, donationPickedUp) {
    try {
        const newDonationId = uuidv4();
        Donations.create({
            id: newDonationId,
            donorId,
            volunteerId,
            donationDate,
            donationContent,
            donationPickedUp,
        })
        console.log("Donation created")
    } catch (e) {
        console.log("error: " + e)
    }
}

exports.getAllDonations = async function () {
    try {
        let donations = await Donations.findAll();
        return donations;
    } catch (e) {
        console.log("error: "+e)
    }
}
