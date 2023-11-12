import express from "express";
import cors from "cors";
import connectDatabase from "./config/dbConnect.js";
import routes from "./Routes/index.js";

const connection = await connectDatabase();

connection.on("error", (erro) => {
    console.error("Erro de conexão: ", erro);
});

connection.once("open", () => {
    console.log("Conexão com o banco feita com sucesso");
})

const app = express();

app.use(cors());

routes(app);

// app.get("/livros", async (req, res) => {
//     const listaLivros = await livro.find({});
//     res.status(200).json(listaLivros);
// });


// app.delete("/livros/:id", (req, res) => {
//     const index = buscaLivro(req.params.id);
//     livros.splice(index, 1);
//     res.status(200).send("livro removido com sucesso");
// });

export default app;
