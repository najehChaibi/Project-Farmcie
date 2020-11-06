var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    email: {type: String, unique: true},
    password: String,
    role:{type: String, enum:['client', 'pharmacie']},
    client: {type: mongoose.Schema.Types.ObjectId, ref:'client'},
    pharmacie: {type: mongoose.Schema.Types.ObjectId, ref:'pharmacie'}
});

module.exports= mongoose.model('user', UserSchema);