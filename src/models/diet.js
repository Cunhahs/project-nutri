import mongoose from "mongoose";
import Food from './food.js';

const dietSchema = new mongoose.Schema({
    breakfast: [],
    lunch: [],
    afternoon_snack: [],
    dinner: [],
    supper: [],
})

const Diet = mongoose.model("Diet", dietSchema);

export default Diet;