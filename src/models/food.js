import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
    ID: { type: mongoose.Schema.Types.ObjectId },
    nutritionist_id: { type: mongoose.Schema.Types.ObjectId, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    energy: { type: Number },
    protein: { type: Number },
    lipids: { type: Number },
    carbohydrate: { type: Number },
    cholesterol: { type: Number },
    dietary_fiber: { type: Number },
    calcium: { type: Number },
    magnesium: { type: Number },
    vitaminC: { type: Number }
}, { versionKey: false });

const food = mongoose.model("food", foodSchema);

export default food;