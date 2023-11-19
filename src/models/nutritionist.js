import mongoose from "mongoose";

const nutritionistSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    name: { type: String, required: true },
    crn: { type: String },
    cpf: { type: String },
    email: { type: String },
    phone: { type: String },
    mobile: { type: String },
    birth_date: { type: String },
    gender: { type: String },
    password: { type: String },
    cep: { type: String },
    address: { type: String },
    address_number: { type: String },
    complement: { type: String },
    neighborhood: { type: String },
    city: { type: String },
    uf: { type: String },
}, { versionKey: false });

const nutritionist = mongoose.model("nutritionist", nutritionistSchema);

export default nutritionist;