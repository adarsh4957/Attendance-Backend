import { signup,signin,profile } from "../Controller/teacher.c.js";
import express from "express";
import { issignedin } from "../Middlewares/teacher.middleware.js";


const teacherrouter= express.Router();

teacherrouter.post("/signup",signup)
teacherrouter.post("/signin",signin)
teacherrouter.get("/profile",issignedin,profile)


export default teacherrouter;

