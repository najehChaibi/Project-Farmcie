var router = require('express').Router();
var Client = require('../models/client');
var User = require('../models/user');
var passport = require('passport');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');
const saltRounds = 10;
var mongoose = require('mongoose');
var multer = require('multer');
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

router.post('/RegisterClient', upload.single('image'), async function(req, res){
    motdepasse = req.body.password;
    var hash = bcrypt.hashSync(motdepasse, saltRounds);
    req.body.password = hash;
    req.body.image= req.file.filename;
    var client = new Client(req.body);
    await client.save(function (err, client){
      if(err){
        res.send(err);
      }
      var user = new User(req.body);
      user.client = client._id;
      user.role="client";

      user.save(async function(err1, user){
        if(err1){
          res.send(err1);
        }
        res.send(user);
      })
    })
});


router.get('/getClient/:_id', async function (req, res) {
  var _id = ObjectID(req.params._id);
  await Client.findById(_id).exec((err, client) => {
    if (err) {
      res.send(err);
    }
  res.send(client);
  })
});







module.exports = router;