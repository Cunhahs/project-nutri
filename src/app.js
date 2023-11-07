import  express from "express";
import conectaNaDataBase from "./config/dbConnect.js";
import routes from "./Routes/index.js";

const conexao = await conectaNaDataBase();

conexao.on("error", (erro)=> {
    console.error("erro de conexão", erro);
});

conexao.once("open", ()=> {
    console.log("Conexao com o banco feita com sucesso");
})

const app = express();

routes(app);

// app.get("/livros", async (req, res) => {
//     const listaLivros = await livro.find({});
//     res.status(200).json(listaLivros);
// });


 app.delete("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros.splice(index, 1);   
    res.status(200).send("livro removido com sucesso");
 });

export default app;
