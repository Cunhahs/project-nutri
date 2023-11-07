import mongoose from "mongoose";

const nutricionistaSchema = new mongoose.Schema({
    id:{type: mongoose.Schema.Types.ObjectId},
    nome:{type: String, required: true},
    crn:{type: Number},
    cpf:{type: String},
    email:{type: String},
    telefone:{type: String},
    dataNascimento:{type: String},
    genero:{type: String},
    endereco:{type: String},
    senha:{type: String}
}, {versionKey: false});

const nutricionista = mongoose.model("nutricionista", nutricionistaSchema);

export default nutricionista;