var mongoose = require('mongoose');

var MedicamentSchema = new mongoose.Schema({
    nom: String,
    description: String,
    categorie: String,
    date_fin: Date,
    image: String,
    quantite: Number,
    prix: Number,
    pharmacie: { type: mongoose.Schema.Types.ObjectId, ref: 'pharmacie' },
    panier: [{idClient:{ type: mongoose.Schema.Types.ObjectId, ref: 'client' },
        qnt: { type: Number, default: '1' }}]
    // panier: [{type: mongoose.Schema.Types.ObjectId, ref:'client'}, 
    //    {qnt: Number, default:'1'}]


});

module.exports = mongoose.model('medicament', MedicamentSchema);