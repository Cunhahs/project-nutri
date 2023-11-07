import paciente from "../models/paciente.js"

class pacienteController{
    static async listarPacientes(req, res){
        try {
            const listarPacientes = await paciente.find({});
            res.status(200).json(listarPacientes);
        } catch (error) {
            res.status(500).json({message: `${error.message} - falha na requisição`});
        }
    };
    
    static async listarPacientesPorId(req, res){
        try {
            const id = req.params.id;
            const pacienteEncontrado = await paciente.findById(id);
            res.status(200).json(pacienteEncontrado);
        } catch (error) {
            res.status(500).json({message: `${error.message} - falha na atualização do paciente`});
        }
    };

    static async excluirPaciente(req, res){
        try {
            const id = req.params.id;
            await paciente.findByIdAndDelete(id);

            res.status(200).json({message: "Paciente excluído com sucesso"});
        } catch (error) {
            res.status(500).json({message: `${error.message} - falha na exclusão do paciente`});
        }
    };

    static async atualizarPaciente(req, res){
        try {
            const id = req.params.id;
            await paciente.findByIdAndUpdate(id, req.body);
            res.status(200).json(pacienteEncontrado);

        } catch (error) {
            res.status(500).json({message: `${error.message} - falha na requisição do paciente`});
        }
    };

    static async cadastrarPaciente(req, res){
        try {
            const novoPaciente = await paciente.create(req.body);
            res.status(201).json({message: "criado com sucesso.", paciente: novoPaciente});
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha ao cadastrar paciente`});   
        }
    }


};

export default pacienteController;

