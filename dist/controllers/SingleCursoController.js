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

// src/controllers/SingleCursoController.ts
var SingleCursoController_exports = {};
__export(SingleCursoController_exports, {
  SingleCursoController: () => SingleCursoController
});
module.exports = __toCommonJS(SingleCursoController_exports);

// src/prisma/index.ts
var import_client = require("@prisma/client");
var prismaClient = new import_client.PrismaClient();
var prisma_default = prismaClient;

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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  SingleCursoController
});
