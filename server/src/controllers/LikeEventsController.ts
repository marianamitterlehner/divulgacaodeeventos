import {Request, Response} from 'express';
import db from '../database/connection';

export default class LikeEventController {
    async incrementLike(request:Request, response:Response){
        const { like } = request.body;
        await db('events').insert({
            like
        });

        return response.status(201).send();
    }

    async incrementDesLike(request:Request, response:Response){
        const { deslike } = request.body;
        await db('events').insert({
            deslike
        });

        return response.status(201).send();
    }

}