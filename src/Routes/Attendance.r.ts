import express from "express";
import { issignedin } from "../Middlewares/teacher.middleware.js";
import { markattendance,updateattendance,gettodayattendance,attendancehistory } from "../Controller/attendance.c.js";


const attendancerouter=express.Router();

attendancerouter.post("/mark",issignedin,markattendance)
attendancerouter.put("/update/:id",issignedin,updateattendance)
attendancerouter.get("/:class_name/:date",issignedin,gettodayattendance)
attendancerouter.get("/:reg_no",issignedin,attendancehistory)


export default attendancerouter;