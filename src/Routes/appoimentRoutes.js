import express from "express";
import appoimentController from "../controllers/appoimentController.js";

const routes = express.Router();

routes.get("/appoiments/:patient_id", appoimentController.listAppoiments);
routes.get("/appoiment/:id", appoimentController.listAppoimentById);
routes.post("/appoiment", appoimentController.registerAppoiment);
routes.put("/appoiment/:id", appoimentController.updateAppoiment);
routes.delete("/appoiment/:id", appoimentController.deleteAppoiment);

export default routes;