import mongoose from "mongoose";

const scheduleSchema = new mongoose.Schema({
    ID:{type: mongoose.Schema.Types.ObjectId},
    day : {type: String},
    hour_start :{type: String},
    hour_end :{type: String}
}, { versionKey: false });

const schedule = mongoose.model("schedule", scheduleSchema);

export default schedule;