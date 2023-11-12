import express from "express";
import patientController from "../controllers/patientController.js";

const routes = express.Router();

routes.get("/patient", patientController.listPatients);
routes.get("/patient/:id", patientController.listPatientsById);
routes.post("/patient/", patientController.registerPatient);
routes.put("/patients/:id", patientController.updatePatient);
routes.delete("/patients/:id", patientController.deletePatient);

export default routes;