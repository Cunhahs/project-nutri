import express from "express";
import scheduleController from "../controllers/scheduleController.js";

const routes = express.Router();

routes.post("/schedule", scheduleController.registerSchedule);
routes.get("/schedules/:nutritionist_id", scheduleController.listSchedules);
routes.get("/schedule/:id", scheduleController.listSchedulesById);
routes.put("/schedule/:id", scheduleController.updateSchedule);
routes.delete("/schedule/:id", scheduleController.deleteSchedule);

export default routes;