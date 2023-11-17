import express from "express";
import scheduleController from "../controllers/scheduleController.js";

const routes = express.Router();

routes.get("/schedule", scheduleController.listSchedules);
routes.get("/schedule/:id", scheduleController.listSchedulesById);
routes.post("/schedule", scheduleController.registerSchedule);
routes.put("/schedules/:id", scheduleController.updateSchedule);
routes.delete("/schedules/:id", scheduleController.deleteSchedule);

export default routes;