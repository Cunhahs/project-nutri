import express from "express";
import cors from "cors";
import conectaNaDataBase from "./config/dbConnect.js";
import routes from "./Routes/index.js";

const conexao = await conectaNaDataBase();

conexao.on("error", (erro) => {
    console.error("erro de conexão", erro);
});

conexao.once("open", () => {
    console.log("Conexao com o banco feita com sucesso");
})

const app = express();

app.use(cors());

routes(app);

export default app;
