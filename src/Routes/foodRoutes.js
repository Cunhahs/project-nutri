import express from "express";
import foodController from "../controllers/foodController.js";

const routes = express.Router();

routes.get("/foods/:nutritionist_id", foodController.listFoods);
routes.get("/food/:id", foodController.listFoodsById);
routes.post("/food", foodController.registerFood);
routes.put("/foods/:id", foodController.updateFood);
routes.delete("/foods/:id", foodController.deleteFood);

export default routes;