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
exports.ListCursosController = void 0;
const ListCursosService_1 = require("../services/ListCursosService");
class ListCursosController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const listCursos = new ListCursosService_1.ListCursosService();
            const cursos = yield listCursos.execute();
            return res.json(cursos);
        });
    }
}
exports.ListCursosController = ListCursosController;
