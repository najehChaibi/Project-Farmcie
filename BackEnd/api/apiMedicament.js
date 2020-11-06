var router = require('express').Router();
var Medicament = require('../models/medicament');
var Client = require('../models/client');
var mongoose = require('mongoose');
var Pharmacie = require('../models/pharmacie');
var passport = require('passport');
var ObjectID = mongoose.Types.ObjectId;
var multer = require('multer');


var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname)
    }
  })
  
  var upload = multer({ storage: storage });


router.post('/addMedicament/:id_pharmacy', upload.single('image'), async (req, res) =>{
    req.body.pharmacie = req.params.id_pharmacy
    req.body.image = req.file.filename;
    const result = await Medicament.create(req.body).catch(err => err)
     res.send(result)
});

router.get('/allMedicament', async function (req, res) {
    await Medicament.find().populate('pharmacie').exec(function (err, medicaments) {
        if (err) {
            res.send(err);
        }
        res.send(medicaments);

    })
});

router.get('/allMedicamentPharm/:id', async function (req, res) {
   // var _id = req.params.id;
    await Medicament.find({pharmacie:ObjectID(req.params.id)}).exec(function (err, medicaments) {
        if (err) {
            res.send(err);
        }
        res.send(medicaments);
    })
});

router.get('/allMedicamentCat/:categorie', async function (req, res) {
    await Medicament.find({ categorie: req.params.categorie }).exec(function (err, medicaments) {
        if (err) {
            res.send(err);
        }
        res.send(medicaments);
    })
});

router.post('/AjoutePanier/:medicamentId/:clientId', async function (req, res) {
  
    
    await Medicament.findById({ _id: req.params.medicamentId }).exec(function (err, medicaments) {
        if (err) {
            res.send(err);
        }
        Medicament.findByIdAndUpdate({ _id: req.params.medicamentId }, { $push: { panier: { idClient: req.params.clientId } } },
            function (err2, medicamentss) {
                if (err2) {
                    res.send(err2);
                }
                res.send(medicamentss);
            });
    res.send(medicaments);        
    })
});

router.get('/AffichPanier/:clientId', async function (req, res) {
    await Medicament.find().populate('medicament').exec(function (err, medicaments) {
        if (err) {
            res.send(err);
        }
        res.send(medicaments)
    })

});


router.get('/oneMedicament/:_id', async function (req, res) {
    var _id = ObjectID(req.params._id);
    await Medicament.findById(_id).exec(function (err, medicaments) {
        if (err) {
            res.send(err);
        }
        res.send(medicaments);
    })
});


module.exports = router;