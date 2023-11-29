import mongoose from "mongoose";
const foodSchema = require('./food');

const dietSchema = new mongoose.Schema({
    breakfast: { type: [foodSchema], required: true },
    lunch: { type: [foodSchema], required: true },
    dinner: { type: [foodSchema], required: true },
})
const diet = mongoose.model("diet", dietSchema);

export default diet;