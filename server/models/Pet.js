const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
    petName: { type: String, required: true },
    petImage: { type: String, required: true },
    species: { type: String, enum: ['Dog', 'Cat', 'Bird'], required: true },
    isFriendly: { type: Boolean, default: false },
});
const Pet = mongoose.model('Pet', petSchema);
module.exports = Pet;