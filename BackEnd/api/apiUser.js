var router = require('express').Router();
var User = require('../models/user');
var Client = require('../models/client');
var Pharmacie = require('../models/pharmacie');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');




router.post('/login', function (req, res) {
    var email = req.body.email;
    User.findOne({ email: email }).exec((err, users) => {
      if (err) {
        res.send(err);
      }
      if (!users) {
        res.send('wrong email')
      }
      if (bcrypt.compareSync(req.body.password, users.password)) {
        let token = jwt.sign({data: users}, 's3cr3t', {expiresIn: '1h'});
        res.send({
          success: true,
          message: 'Authentication successful!',
          access_token: token,
        })
      } else {
        res.send('wrong password');
      }
     
    })
  });
  
    router.get('/image/:name', async (req, res) => {
      await res.sendFile('C:\\Users\\john\\Desktop\\Project-Pharmacie\\pharmacie\\BackEnd\\uploads\\'+ req.params.name);
  });




module.exports = router;