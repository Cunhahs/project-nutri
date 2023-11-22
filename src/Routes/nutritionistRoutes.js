import express from "express";
import NutritionistController from "../controllers/nutritionistController.js";
import autenticate from "../controllers/middleware/autenticate.js";

const routes = express.Router();

routes.use(autenticate)

routes.get("/nutritionists", NutritionistController.listNutritionists);
routes.get("/nutritionist/:id", NutritionistController.listNutritionistsById);
routes.put("/nutritionist/:id", NutritionistController.updateNutritionist);
routes.delete("/nutritionist/:id", NutritionistController.deleteNutritionist);

export default routes;