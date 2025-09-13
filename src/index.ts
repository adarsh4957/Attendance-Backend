import express from "express";
import { PORT } from "./tsconfig.js";
import db from "./db.js";
import teacherrouter from "./Routes/teacher.r.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import classrouter from "./Routes/class.r.js";
import studentrouter from "./Routes/student.r.js";
import attendancerouter from "./Routes/Attendance.r.js";

const app=express();



app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

app.use("/api/v1/teacher",teacherrouter)
app.use("/api/v1/class",classrouter)
app.use("/api/v1/student",studentrouter)
app.use("/api/v1/attendance/",attendancerouter)


db();//db connection


app.listen(PORT)

export default app