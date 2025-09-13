# 📌 API Endpoints Documentation

This document lists all available API endpoints for the **Smart Attendance System (MERN)** MVP.  
Each route is grouped by resource: **Teacher, Class, Student, Attendance**.

---

## 👩‍🏫 Teacher Routes

### Register a new teacher
`POST /api/v1/teacher/signup`  
Creates a new teacher account.  
- **Body:** `{ name, email, password }`  

---

### Teacher login
`POST /api/v1/teacher/signin`  
Authenticates teacher and returns JWT token.  
- **Body:** `{ email, password }`

### Teacher Profile
`GET /api/v1/teacher/profile`  
Return the profile of teacher
- **Must be Signed in ** 

---

## 🏫 Class Routes

### Create a class
`POST /api/v1/class/create`  
Teacher creates a new class.  
- **Body:** `{ classname }`  
- **Auth:** Teacher must be signed in

### Returns Classes under a teacher
`POST /api/v1/class/create`   
- **Auth:** Teacher must be signed in 

---

### Get class details
`GET /api/v1/class/:classname`  
Fetch details of a single class (name, teacher, students).  


### Update class details
`GET /api/v1/class/update/:classname`  
Update details of a single class (class name).  

---

### Delete a class
`GET /api/v1/class/delete/:classname`  
Delete a class  
- **Auth:** Teacher must be signed in


---

## 👨‍🎓 Student Routes

### Add a student to a class
`POST /api/v1/student/add`  
Adds a student under a specific class.  
- **Body:** `{ name,reg_no,rollNumber,classname,dateOfBirth,gender,guardianName,guardianContact }`  
- **Auth:** Teacher only  

---

### Get student details
`GET /api/v1/student/:reg_no`  
Returns details of a single student.  
- **Auth:** Teacher only
---

### List all students in a class
`GET /api/v1/student/:classname/students`  
Fetches all students enrolled in a specific class. 
- **Auth:** Teacher only

### Update details of specific student
`PUT /api/v1/student/update/:reg_no`  
Updates details of student   
- **Body:** `{ name,reg_no,rollNumber,dateOfBirth,gender,guardianName,guardianContact }`
- **Auth:** Teacher only

### Delete specific student
`DELETE /api/v1/student/delete/:reg_no`  
Deletes students enrolled in a specific class. 
- **Auth:** Teacher only



---

## 📅 Attendance Routes

### Mark attendance
`POST /api/v1/attendance/mark`  
Marks attendance for a student on a specific date.  
- **Body:** `{ student_name,class_name,date,status }`  
- **Auth:** Teacher only  

---

### Update attendance
`PUT /api/v1/attendance/update/:id`  
Updates an existing attendance record.  
- **Body:** `{ status }`  
- **Auth:** Teacher only  

---

### Get class attendance by date
`GET /api/v1/attendance/:class_name/:date`  
Fetches the attendance sheet for a class on a specific date.  

---

### Get student attendance history
`GET /api/v1/attendance/:reg_no`  
Returns full attendance records for a student.  

---

## 🔒 Notes
- All protected routes require **JWT authentication**.  
- Teachers can only access data for their own classes.  
- Dates must be passed in `YYYY-MM-DD` format for consistency.

## 🚀 How to Run Locally

### 🖥️ Backend
```bash
cd cloned foleder
npm install
npm run dev
```

### Also update Mongodb url in tsconfig.ts file 

