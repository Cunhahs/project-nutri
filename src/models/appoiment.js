import mongoose from "mongoose";
import Diet from "./diet.js";

const appoimentSchema = new mongoose.Schema({
    patient_id: { type: mongoose.Schema.Types.ObjectId, required: true },
    appoiment_date: { type: Date },
    weight: { type: String },
    height: { type: String },
    bmi: { type: String }, // BMI = Body Mass Index
    skinfold_thickness: { type: String },
    growth_curve: { type: String },
    gestational_curve: { type: String },
    diet_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Diet' }
})
const appoiment = mongoose.model("appoiment", appoimentSchema);

export default appoiment;