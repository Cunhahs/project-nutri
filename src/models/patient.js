import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    name: { type: String, required: true },
    phone: { type: String },
    mobile: { type: String },
    birth_date: { type: String },
    gender: { type: String },
    email: { type: String },
    photo: { type: String },
    weight: { type: String },
    height: { type: String },
    bmi: { type: String }, // BMI = Body Mass Index
    skinfold_thickness: { type: String },
    growth_curve: { type: String },
    gestational_curve: { type: String }
}, { versionKey: false });

const patient = mongoose.model("patient", patientSchema);

export default patient;
