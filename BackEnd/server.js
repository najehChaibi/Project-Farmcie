var express = require('express');
var bodyParesr = require('body-parser');
var clientCrud = require('./api/apiClient');
var pharmacieCrud = require('./api/apiPharmacie');
var medicamentCrud = require('./api/apiMedicament');
var userCrud = require('./api/apiUser');
var app = express();
var db = require('./database/db');
var http = require('http').createServer(app);
var cors = require('cors');
app.use(cors());

app.use(bodyParesr.json());
app.use(bodyParesr.urlencoded({ extended:false }));

app.use('/clients', clientCrud);
app.use('/pharmacies', pharmacieCrud);
app.use('/medicaments', medicamentCrud);
app.use('/users', userCrud);




app.listen(3000);