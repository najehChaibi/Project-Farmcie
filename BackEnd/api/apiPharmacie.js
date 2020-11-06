var router = require('express').Router();
var Pharmacie = require('../models/pharmacie');
var User = require('../models/user');
var passport = require('passport');
var jwst = require('jsonwebtoken');
var bcrypt = require('bcrypt');
var multer = require('multer');
var mongoose = require('mongoose');
const saltRounds = 10;
var ObjectID = mongoose.Types.ObjectId;


var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname)
    }
  })
  
  var upload = multer({ storage: storage });

router.post('/RegisterPharmacie',  async function(req, res){
    motdepasse = req.body.password;
    var hash = bcrypt.hashSync(motdepasse, saltRounds);
    req.body.password = hash;
    var pharmacie = new Pharmacie(req.body);
    await pharmacie.save(function (err, pharmacie){
      if(err){
        res.send(err);
      }
      var user = new User(req.body);
      user.pharmacie = pharmacie._id;
      user.role="pharmacie";
      user.save(async function(err1, user){
        if(err1){
          res.send(err1);
        }
        res.send(user);
      })
    })
});

router.get('/AllPharmacie', async function(req, res){
  await Pharmacie.find().exec(function(err, pharmacie){
    if(err){
      res.send(err);
    }
    res.send(pharmacie);
  })
})


router.get('/getPharmacie/:_id', async function (req, res) {
  var _id = ObjectID(req.params._id);
  await Pharmacie.findById(_id).exec((err, pharmacie) => {
    if (err) {
      res.send(err);
    }
  res.send(pharmacie);
  })
});


module.exports = router;