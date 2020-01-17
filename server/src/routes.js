const {Router} = require('express');

const ParticipantsController = require('./controllers/ParticipantsController');
const QuizzQuestionController = require('./controllers/QuizzQuestionController');
const ZoweController = require('./controllers/zoweController');

const routes = Router();

routes.post('/newParticipant',ParticipantsController.store)
routes.get('/participants',ParticipantsController.index)

routes.post('/newQuizzQuestion',QuizzQuestionController.store)
routes.get('/QuizzQuestion',QuizzQuestionController.index)

routes.post('/console',ZoweController.consoleCommand)

module.exports = routes