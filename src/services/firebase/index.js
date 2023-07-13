const {initializeApp, cert} = require("firebase-admin/app");

const serviceAccount = require("../../utils/constants/firebase_service_acount.json");

const app = initializeApp({
  credential: cert(serviceAccount),
  databaseURL: 'https://webintegralpacheco.firebaseio.com'
});

module.exports = app;