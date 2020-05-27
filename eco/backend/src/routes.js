const express = require('express');
const CaseController = require('./controllers/CaseController');
const ClientController = require('./controllers/ClientController');

const routes = express.Router();

routes.get('/', (req, res) => {
    res.json({message: 'Hello World'});
});

routes.post('/login', (req, res) => {
    setTimeout(()=>{
        res.json({message: 'ok'});
    }, 5000);
});

routes.get('/cases', CaseController.getCases);
routes.post('/submitCase', CaseController.store);
routes.get('/case?*', CaseController.getCase);
routes.post('/saveClient', ClientController.store);
// routes.get('/clients/*', ClientController.getClient);
routes.get('/clients', ClientController.getClients);

module.exports = routes;