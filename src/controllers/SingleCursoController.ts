import { Response, Request } from 'express';
import {SingleCursoService} from '../services/SingleCursoService';

class SingleCursoController{
    async handle(req:Request,res:Response){
        const {id} = req.params;

        const listById = new SingleCursoService();

        const listCourse =  await listById.execute(id)

        return res.json(listCourse)

    }
}

export {SingleCursoController}