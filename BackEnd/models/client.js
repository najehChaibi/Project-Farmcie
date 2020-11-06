var mongoose = require('mongoose');

var ClientSchema = new mongoose.Schema({
    nom : String,
    prenom : String,
    adresse: String,
    telphone: String,
    email: {type: String, unique: true},
    password: String,
    image: String
});

module.exports = mongoose.model('client', ClientSchema);