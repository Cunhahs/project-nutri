import express from "express";
import NutritionistController from "../controllers/nutritionistController.js";

const routes = express.Router();

routes.get("/nutritionist", NutritionistController.listNutritionists);
routes.get("/nutritionist/:id", NutritionistController.listNutritionistsById);
routes.post("/nutritionist", NutritionistController.registerNutritionist);
routes.post("/login", NutritionistController.loginNutritionist);
routes.put("/nutritionists/:id", NutritionistController.updateNutritionist);
routes.delete("/nutritionists/:id", NutritionistController.deleteNutritionist);

export default routes;