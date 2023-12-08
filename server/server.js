//Load Environment Variables in Development
if (process.env.NODE_ENV != 'production') {
    require("dotenv").config();
}

//Imports
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/connectDB');
const petsController = require('./controllers/petsController');

//Configure Express App
const app = express();
app.use(express.json());
app.use(cors());

// Connect to Database
connectDB();

// Routes
app.get('/api/pets', petsController.fetchPets);
app.get('/api/pets/:petId', petsController.fetchPet);
app.post('/api/pets', petsController.createPet);
app.put('/api/pets/:petId', petsController.updatePet);
app.delete('/api/pets/:petId', petsController.deletePet);

//Server start
app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}/`);
});