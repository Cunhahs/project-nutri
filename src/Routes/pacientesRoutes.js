import express from "express";
import pacienteController from "../controllers/pacienteController.js";

const routes = express.Router();

routes.get("/paciente", pacienteController.listarPacientes);
routes.get("/paciente/:id", pacienteController.listarPacientesPorId);
routes.post("/paciente/", pacienteController.cadastrarPaciente);
routes.put("/pacientes/:id", pacienteController.atualizarPaciente);
routes.delete("/pacientes/:id", pacienteController.excluirPaciente);

export default routes;