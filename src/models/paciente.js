import mongoose from "mongoose";

const pacienteSchema = new mongoose.Schema({
    id:{type: mongoose.Schema.Types.ObjectId},
    nome:{type: String, required: true},
    idade:{type: Number},
    telefone:{type: String},
    email:{type: String}
}, {versionKey: false});

const paciente = mongoose.model("paciente", pacienteSchema);

export default paciente;