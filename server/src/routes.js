const {Router} = require('express');

const ParticipantsController = require('./controllers/ParticipantsController');
const ZoweController = require('./controllers/zoweController');

const routes = Router();

routes.post('/newParticipant',ParticipantsController.store)
routes.get('/participants',ParticipantsController.index)

routes.post('/console',ZoweController.consoleCommand)

module.exports = routes