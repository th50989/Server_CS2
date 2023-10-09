const admin = require('firebase-admin');

// Replace the following with your own service account key JSON
const serviceAccount = require('../counterstrike2-99f9a-firebase-adminsdk-co602-ca21246696.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://console.firebase.google.com/u/0/project/counterstrike2-99f9a/firestore/data/~2FMaps', // Replace with your Firebase project URL
});

const db = admin.firestore();

module.exports = { db };
