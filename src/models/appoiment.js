import mongoose from "mongoose";

const appoimentSchema = new mongoose.Schema({
    weight: { type: String },
    height: { type: String },
    bmi: { type: String }, // BMI = Body Mass Index
    skinfold_thickness: { type: String },
    growth_curve: { type: String },
    gestational_curve: { type: String }
})
const appoiment = mongoose.model("appoiment", appoimentSchema);

export default appoiment;