import mongoose from "mongoose";

const nutricionistaSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    name: { type: String, required: true },
    crn: { type: String },
    cpf: { type: String },
    email: { type: String },
    phone: { type: String },
    birth_date: { type: String },
    gender: { type: String },
    password: { type: String }
}, { versionKey: false });

const nutricionista = mongoose.model("nutricionista", nutricionistaSchema);

export default nutricionista;