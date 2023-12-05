import mongoose from "mongoose";

const scheduleSchema = new mongoose.Schema(
  {
    ID: { type: mongoose.Schema.Types.ObjectId },
    nutritionist_id: { type: mongoose.Schema.Types.ObjectId, required: true },
    patient_id: { type: mongoose.Schema.Types.ObjectId, required: true },
    start: { type: Date },
    end: { type: Date },
  },
  { versionKey: false }
);

const schedule = mongoose.model("schedule", scheduleSchema);

export default schedule;
