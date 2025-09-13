import Router from "next/router.js";
import express from "express";
import { addstudent,studetails,getallstudents,updatestudent,deletestudent } from "../Controller/student.c.js";
import { issignedin } from "../Middlewares/teacher.middleware.js";

const studentrouter=express.Router()


studentrouter.post("/create",issignedin,addstudent);
studentrouter.get("/:reg_no",issignedin,studetails);
studentrouter.get("/:classname/students",issignedin,getallstudents);
studentrouter.put("/update/:reg_no",issignedin,updatestudent);
studentrouter.delete("/delete/:reg_no",issignedin,deletestudent);


export default studentrouter




