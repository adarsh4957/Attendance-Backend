import express from "express";
import { createclass,getallclasses,getclass,updateclass,deleteclass } from "../Controller/class.c.js";
import { issignedin } from "../Middlewares/teacher.middleware.js";

const classrouter=express.Router();

classrouter.post("/create",issignedin,createclass)
classrouter.get("/all",issignedin,getallclasses)
classrouter.get("/:classname",issignedin,getclass)
classrouter.put("/update/:classname",issignedin,updateclass)
classrouter.get("/delete/:classname",issignedin,deleteclass)


export default classrouter;