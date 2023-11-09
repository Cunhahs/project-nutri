import express from "express";
import nutricionistaController from "../controllers/nutricionistaController.js";

const routes = express.Router();

routes.get("/nutricionista", nutricionistaController.listarNutricionistas);
routes.get("/nutricionista/:id", nutricionistaController.listarNutricionistasPorId);
routes.post("/nutricionista/", nutricionistaController.cadastrarNutricionista);
routes.post("/login", nutricionistaController.loginNutricionista);
routes.put("/nutricionistas/:id", nutricionistaController.atualizarNutricionista);
routes.delete("/nutricionistas/:id", nutricionistaController.excluirNutricionista);

export default routes;