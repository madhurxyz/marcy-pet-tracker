const Pet = require('../models/Pet')

const fetchPets = async (req, res) => {
    //Find pets
    const pets = await Pet.find();
    //Respond with pets
    res.json({ pets: pets });
}

const fetchPet = async (req, res) => {
    //Get id off url
    const petId = req.params.petId;
    //Find pet using id
    const pet = await Pet.findById(petId);
    //Respond with pet
    res.json({ pet: pet });
};

const createPet = async (req, res) => {
    //Get sent in data off request body
    const { petName, petImage, species, isFriendly } = req.body;
    //Create pet with it
    const pet = await Pet.create({
        petName,
        petImage,
        species,
        isFriendly
    });

    //Respond with new pet
    res.json({ pet: pet });
};

const updatePet = async (req, res) => {
    //Get Id from URL
    const petId = req.params.petId;

    //Get data we want to update from request body
    const { petName, petImage, species, isFriendly } = req.body;

    //Find and update record
    await Pet.findByIdAndUpdate(petId, {
        petName,
        petImage,
        species,
        isFriendly
    });

    //Find updated pet
    const pet = await Pet.findById(petId);

    //Respond with pet
    res.json({ pet: pet });
};

const deletePet = async (req, res) => {
    //Get Id off URL
    const petId = req.params.petId;

    //Delete Record
    await Pet.deleteOne({ _id: petId });

    //Respond
    res.json({ success: "Pet Record Deleted" });
};

module.exports = {
    fetchPets: fetchPets,
    fetchPet: fetchPet,
    createPet: createPet,
    updatePet: updatePet,
    deletePet: deletePet
}