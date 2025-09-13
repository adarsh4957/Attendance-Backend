import mongoose from "mongoose";
import { model,Schema } from "mongoose";

const classSchema = new Schema({
  Class_name: {
    type: String,
    required: true,
  },
  teacherId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Teacher",
    required: true
  },
},{timestamps:true});

const Class = model("Class", classSchema);
export default Class;
