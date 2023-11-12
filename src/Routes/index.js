import express from "express";
import nutricionista from "./nutricionistasRoutes.js";
import paciente from "./pacientesRoutes.js";

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("Curso de Node.js"));

    app.use(express.json(), nutricionista, paciente);
}



export default routes;
