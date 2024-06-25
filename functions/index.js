/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const functions = require('firebase-functions')
// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const express = require('express');
const dotenv = require("dotenv").config();
const bodyParser = require('body-parser');

const app = express();
const port = 4000;


const racineProjet = process.cwd();



app.use(express.static(racineProjet+"/views"));
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());


//Rediriger tous les path "/"
app.use("/", require("./routes/userRoutes"));

// Middleware pour gérer les requêtes vers des chemins inexistants
app.use((req, res, next) => {
    res.status(404).sendFile(racineProjet+'/views/pages/notFound.html');
  });


//Lancer le serveur
app.listen(port, ()=> console.log("Le serveur a demarré au port: "+port))

exports.app = onRequest(app);