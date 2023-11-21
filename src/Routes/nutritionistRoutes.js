import express from "express";
import NutritionistController from "../controllers/nutritionistController.js";

const routes = express.Router();

routes.post("/login", NutritionistController.loginNutritionist);
routes.post("/nutritionist", NutritionistController.registerNutritionist);
routes.get("/nutritionists", NutritionistController.listNutritionists);
routes.get("/nutritionist/:id", NutritionistController.listNutritionistsById);
routes.put("/nutritionist/:id", NutritionistController.updateNutritionist);
routes.delete("/nutritionist/:id", NutritionistController.deleteNutritionist);

export default routes;