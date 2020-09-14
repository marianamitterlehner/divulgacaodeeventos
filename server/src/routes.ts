import express from 'express';
import UserController from '../src/controllers/UserController';
import EventController from '../src/controllers/EventController';

const userController = new UserController();
const eventController = new EventController();

const routes = express.Router();

routes.get('/users', userController.index);
routes.post('/users', userController.create);

routes.post('/events', eventController.create);
routes.get('/events', eventController.index);
routes.delete('/events/:id', eventController.delete);

export default routes;
