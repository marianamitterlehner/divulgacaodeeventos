import {Router, response} from 'express';

const routes = Router();

routes.get('/',(request, response) => response.json({message:'ok'}));

export default routes;