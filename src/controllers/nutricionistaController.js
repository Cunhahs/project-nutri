import nutricionista from "../models/Nutricionista.js"

class nutricionistaController{
    static async listarNutricionistas(req, res){
        try {
            const listaNutricionistas = await nutricionista.find({});
            res.status(200).json(listaNutricionistas);
        } catch (error) {
            res.status(500).json({message: `${error.message} - falha na requisição`});
        }
    };

    static async loginNutricionista(req, res){ 
        try {             // check if the user exists 
            const user = await nutricionista.findOne({ email: req.body.email }); 
            if (user) { 
              //check if password matches 
              const result = req.body.senha === user.senha; 
              if (result) { 
                res.status(201).json({message:`autenticação correta`}) 
              } else { 
                res.status(400).json({ error: "senha incorreta" }); 
              } 
            } else { 
              res.status(400).json({ error: "usuário não existe" }); 
            } 
          } catch (error) { 
            res.status(400).json({ error });
    }};

    static async listarNutricionistasPorId(req, res){
        try {
            const id = req.params.id;
            const nutricionistaEncontrado = await nutricionista.findById(id);
            res.status(200).json(nutricionistaEncontrado);
        } catch (error) {
            res.status(500).json({message: `${error.message} - falha na atualização do Nutricionista`});
        }
    };

    static async excluirNutricionista(req, res){
        try {
            const id = req.params.id;
            await nutricionista.findByIdAndDelete(id);

            res.status(200).json({message: "Nutricionista excluído com sucesso"});
        } catch (error) {
            res.status(500).json({message: `${error.message} - falha na exclusão do Nutricionista`});
        }
    };

    static async atualizarNutricionista(req, res){
        try {
            const id = req.params.id;
            await nutricionista.findByIdAndUpdate(id, req.body);
            res.status(200).json(nutricionistaEncontrado);

        } catch (error) {
            res.status(500).json({message: `${error.message} - falha na requisição do Nutricionista`});
        }
    };

    static async cadastrarNutricionista(req, res){
        try {
            const novoNutricionista = await nutricionista.create(req.body);
            res.status(201).json({message: "criado com sucesso.", nutricionista: novoNutricionista});
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha ao cadastrar nutricionista`});   
        }
    }


};

export default nutricionistaController;

