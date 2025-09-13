import type { Request,Response } from "express";
import Student from "../Models/students.m.js";
import Class from "../Models/class.m.js";



const addstudent=async (req:Request,res:Response)=>{
    const {name,reg_no,rollNumber,classname,dateOfBirth,gender,guardianName,guardianContact}=req.body;
    
    try {
        
        //@ts-ignore
        const classexist=await Class.findOne({Class_name:classname,teacherId:req.teacherId});
        if(!classexist){
            return res.status(403).json({
                message:"Class does not exists",
                success:false
            })
        }
        const studentexist=await Student.findOne({
            reg_no:reg_no
        },{classId:classname});
        if(studentexist){
            return res.status(403).json({
                message:"Student Already Exists with this Reg No.",
            })
        }
                

        const student= await Student.create({
            Student_name:name,
            reg_no:reg_no,
            rollNumber:rollNumber,
            classId:classexist._id,
            dateOfBirth:dateOfBirth,
            gender:gender,
            guardianName:guardianName,
            guardianContact:guardianContact
        })        

        res.json({
            message:"Student Added Succesfully",
            success:true,
            Student:student
        })
    } catch (error) {
        res.status(403).json({
            message:"Error in Adding Students",
            success:false,
            
        })
    }
}

const studetails=async (req:Request,res:Response)=>{
    const reg_no=req.params.reg_no;
    try {
        const student=await Student.findOne({
            reg_no:reg_no
        })
        if(!student){
            return res.status(403).json({
                message:"ReCheck Registration No.",
                success:false
            })
        }
        res.json({
            message:"Student Found",
            success:true,
            Student_details:student
        })
        
    } catch (error) {
        res.status(403).json({
            message:"Error in getting student details",
            success:false
        })
    }
}

const getallstudents=async (req:Request,res:Response)=>{
    const classname=req.params.classname;
    try {
        const class_=await Class.findOne({Class_name:classname})
        const classId=class_?._id;
        const students=await Student.find({classId:classId}).select("Student_name gender reg_no _id ");
        res.json({
            message:"Students Found",
            success:true,
            Class_name:classname,
            classname:students
        })
        

    } catch (error) {
        res.status(403).json({
            message:"Students Not Found",
            success:false
        })
    }
}

const updatestudent=async (req:Request,res:Response)=>{
    const {name,rollNumber,dateOfBirth,gender,guardianName,guardianContact}=req.body;
    const reg_no=req.params.reg_no;
    try {
        if(name){
            await Student.updateOne({reg_no:reg_no},{Student_name:name});
        }
        if(rollNumber){
            await Student.updateOne({reg_no:reg_no},{rollNumber:rollNumber});
        }
        if(dateOfBirth){
            await Student.updateOne({reg_no:reg_no},{dateOfBirth:dateOfBirth});
        }
        if(gender){
            await Student.updateOne({reg_no:reg_no},{gender:gender});
        }
        if(guardianName){
            await Student.updateOne({reg_no:reg_no},{guardianName:guardianName});
        }
        if(guardianContact){
            await Student.updateOne({reg_no:reg_no},{guardianContact:guardianContact});
        }
        const updatedinfo=await Student.findOne({reg_no:reg_no})
        
        res.json({
            message:"Updated Student Succesfully",
            Updated_Student:updatedinfo
        })
        
    } catch (error) {
        res.status(403).json({
            message:"Error in Updating Student Info",
            success:false
        })
    }
    
}

const deletestudent=async (req:Request,res:Response)=>{
    const reg_no=req.params.reg_no;
    try {
        const student=await Student.findOne({reg_no:reg_no})
        if(!student){
            return res.status(403).json({
                message:"Student does not exist",
                success:false
            })
        }
        await Student.deleteOne({reg_no:reg_no});
        res.json({
            message:"Deletion Succesfull",
            success:true
        })
        
    } catch (error) {
        res.status(403).json({
            message:"Error in deletion",
            success:false
        })
    }
}

export {addstudent,studetails,getallstudents,updatestudent,deletestudent}