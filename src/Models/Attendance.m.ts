import mongoose from "mongoose";
import { model,Schema } from "mongoose";

const attendanceSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
    required: true
  },
  classId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Class",
    required: true
  },
  teacherId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Teacher",
    required: true
  },
  date: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ["Present", "Absent", "Late", "Leave"],
    default: "Present"
  },
},{
  timestamps:true
});

const Attendance = model("Attendance", attendanceSchema);
export default Attendance;
