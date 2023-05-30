"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/routes.ts
var routes_exports = {};
__export(routes_exports, {
  router: () => router
});
module.exports = __toCommonJS(routes_exports);
var import_express = require("express");

// src/prisma/index.ts
var import_client = require("@prisma/client");
var prismaClient = new import_client.PrismaClient();
var prisma_default = prismaClient;

// src/services/CreateCursoService.ts
var CreateCursoService = class {
  execute(_0) {
    return __async(this, arguments, function* ({ name }) {
      const curso = yield prisma_default.curso.create({
        data: {
          name
        }
      });
      return curso;
    });
  }
};

// src/controllers/CreateCursoController.ts
var CreateCursoController = class {
  handle(req, res) {
    return __async(this, null, function* () {
      const { name } = req.body;
      const createCursoService = new CreateCursoService();
      const curso = yield createCursoService.execute({
        name
      });
      return res.json(curso);
    });
  }
};

// src/services/ListCursosService.ts
var ListCursosService = class {
  execute() {
    return __async(this, null, function* () {
      const cursos = prisma_default.curso.findMany({
        select: {
          id: true,
          name: true
        }
      });
      return cursos;
    });
  }
};

// src/controllers/ListCursosController.ts
var ListCursosController = class {
  handle(req, res) {
    return __async(this, null, function* () {
      const listCursos = new ListCursosService();
      const cursos = yield listCursos.execute();
      return res.json(cursos);
    });
  }
};

// src/services/UpdateCursoService.ts
var UpdateCursoService = class {
  execute(id, name) {
    return __async(this, null, function* () {
      const existingCourse = yield prisma_default.curso.findUnique({ where: { id } });
      if (!existingCourse) {
        throw new Error("Curso n\xE3o encontrado");
      }
      const updatedCourse = yield prisma_default.curso.update({
        where: {
          id
        },
        data: {
          name
        }
      });
      return updatedCourse;
    });
  }
};

// src/controllers/UpdateCursoController.ts
var UpdateCursoController = class {
  update(request, response) {
    return __async(this, null, function* () {
      const { id } = request.params;
      const { name } = request.body;
      try {
        const updateCurso = new UpdateCursoService();
        const curso = yield updateCurso.execute(id, name);
        return response.json(curso);
      } catch (error) {
        console.error("Erro ao atualizar curso:", error);
        return response.status(500).json({ error: "Erro ao atualizar curso" });
      }
    });
  }
};

// src/services/SingleCursoService.ts
var SingleCursoService = class {
  execute(id) {
    return __async(this, null, function* () {
      const existingCourse = yield prisma_default.curso.findMany({
        where: {
          id
        }
      });
      if (!existingCourse) {
        throw new Error("Curso nao encontrado");
      }
      return existingCourse;
    });
  }
};

// src/controllers/SingleCursoController.ts
var SingleCursoController = class {
  handle(req, res) {
    return __async(this, null, function* () {
      const { id } = req.params;
      const listById = new SingleCursoService();
      const listCourse = yield listById.execute(id);
      return res.json(listCourse);
    });
  }
};

// src/services/DeleteCursoService.ts
var DeleteIdCursoService = class {
  execute(_0) {
    return __async(this, arguments, function* ({ id }) {
      const course = yield prisma_default.curso.delete({
        where: {
          id
        }
      });
      return course;
    });
  }
};

// src/controllers/DeleteCursoController.ts
var DeleteIdController = class {
  handle(req, res) {
    return __async(this, null, function* () {
      const { id } = req.params;
      const cursoService = new DeleteIdCursoService();
      const deleteCurso = yield cursoService.execute({
        id
      });
      return res.json(deleteCurso);
    });
  }
};

// src/routes.ts
var router = (0, import_express.Router)();
router.get("/cursos", new ListCursosController().handle);
router.get("/curso/:id", new SingleCursoController().handle);
router.post("/curso", new CreateCursoController().handle);
router.put("/curso/update/:id", new UpdateCursoController().update);
router.delete("/curso/delete/:id", new DeleteIdController().handle);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  router
});
