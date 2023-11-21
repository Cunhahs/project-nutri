import express from "express";
import patientController from "../controllers/patientController.js";

const routes = express.Router();

routes.post("/patient", patientController.registerPatient);
routes.get("/patients/:nutritionist_id", patientController.listPatients);
routes.get("/patient/:id", patientController.listPatientsById);
routes.put("/patient/:id", patientController.updatePatient);
routes.delete("/patient/:id", patientController.deletePatient);

export default routes;