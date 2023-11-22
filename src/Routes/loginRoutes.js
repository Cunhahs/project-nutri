import express from "express";
import NutritionistController from "../controllers/nutritionistController.js";

const routes = express.Router();

routes.post("/login", NutritionistController.loginNutritionist);
routes.post("/nutritionist", NutritionistController.registerNutritionist);

export default routes;