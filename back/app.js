// importation de package
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const helmet = require('helmet');

//Configuration de dotenv
const dotenv = require('dotenv');
dotenv.config();

//Init des routes
const saucesRoutes = require('./routes/sauces');
const userRoutes = require('./routes/user');

const app = express();

//Récupération des données du .env
const MONGO_ID = process.env.MONGO_ID;
const MONGO_MDP = process.env.MONGO_MDP;
//Lancement du serveur
mongoose.connect(`mongodb+srv://${MONGO_ID}:${MONGO_MDP}@cluster0.gknawcy.mongodb.net/test`,
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(bodyParser.json());
app.use(helmet());

app.use('/api/sauces', saucesRoutes);
app.use('/api/auth', userRoutes );
app.use('/images', express.static(path.join(__dirname, 'images')));

module.exports = app;