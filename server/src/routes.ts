import express from 'express';
import UserController from '../src/controllers/UserController';
import EventController from '../src/controllers/EventController';
import LikeEventController from './controllers/LikeEventsController';
import SessionController from './controllers/SessionController';

const userController = new UserController();
const eventController = new EventController();
const likeEventController = new LikeEventController();
const sessionController = new SessionController();

const routes = express.Router();

routes.get('/users', userController.index);
routes.post('/users', userController.create);

routes.post('/events', eventController.create);
routes.get('/events', eventController.index);
routes.delete('/events/:id', eventController.delete);

routes.post('/sessions', sessionController.create);

routes.post('/likeEvents', likeEventController.incrementLike);
routes.post('/likeEvents', likeEventController.incrementDesLike);

export default routes;
