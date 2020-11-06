var mongoose = require('mongoose');

var PharmacieSchema = new mongoose.Schema({
    nom : String,
    adresse : String,
    telphone: Number,
    email : {type: String, unique: true},
    password: String,
});

module.exports= mongoose.model('pharmacie', PharmacieSchema);