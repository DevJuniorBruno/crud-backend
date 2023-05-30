"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCursoController = void 0;
const UpdateCursoService_1 = require("../services/UpdateCursoService");
class UpdateCursoController {
    update(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.params;
            const { name } = request.body;
            try {
                const updateCurso = new UpdateCursoService_1.UpdateCursoService();
                const curso = yield updateCurso.execute(id, name);
                return response.json(curso);
            }
            catch (error) {
                console.error('Erro ao atualizar curso:', error);
                return response.status(500).json({ error: 'Erro ao atualizar curso' });
            }
        });
    }
}
exports.UpdateCursoController = UpdateCursoController;
