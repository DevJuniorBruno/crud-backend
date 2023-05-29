import {DeleteIdCursoService} from '../services/DeleteCursoService';
import { Request, Response} from 'express';

class DeleteIdController{
    async handle(req:Request, res:Response){
        const {id} = req.params
 
        const cursoService = new DeleteIdCursoService();

        const deleteCurso = await cursoService.execute({
            id
        });

        return res.json(deleteCurso);

    }
}

export { DeleteIdController }


 