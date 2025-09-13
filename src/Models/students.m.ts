import mongoose from "mongoose";
import { model,Schema } from "mongoose";
import { unique } from "next/dist/build/utils.js";

const studentSchema = new Schema({
  Student_name: {
    type: String,
    required: true,
    trim: true
  },
  reg_no:{
    type:String,
    required:true,
    unique:true
  },
  rollNumber: {
    type: String,
    required: true
  },
  classId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Class",
    required: true
  },
  dateOfBirth: {
    type: String
  },
  gender: {
    type: String,
    enum: ["Male", "Female", "Other"]
  },
  guardianName: {
    type: String
  },
  guardianContact: {
    type: String
  },
},{timestamps:true});


const Student = model("Student", studentSchema);
export default Student;
