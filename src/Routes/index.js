import express from "express";
import nutritionist from "./nutritionistRoutes.js";
import patient from "./patientRoutes.js";

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("Curso de Node.js"));

    app.use(express.json(), nutritionist, patient);
}



export default routes;
