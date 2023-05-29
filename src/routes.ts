import { Router } from 'express';
import { CreateCursoController } from './controllers/CreateCursoController';
import { ListCursosController } from './controllers/ListCursosController';
import  {UpdateCursoController} from './controllers/UpdateCursoController';
import {SingleCursoController} from './controllers/SingleCursoController';
import {DeleteIdController} from './controllers/DeleteCursoController';

const router = Router();

router.get('/cursos', new ListCursosController().handle);

router.get('/curso/:id', new SingleCursoController().handle)

router.post('/curso', new CreateCursoController().handle);

router.put('/curso/update/:id', new UpdateCursoController().update);

router.delete('/curso/delete/:id', new DeleteIdController().handle );



export { router };