const express = require("express");

const router = express.Router();
const students = require("../data/students");

// GET /students - Get all students
router.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        count: students.length,
        students
    });
});

// GET /students/:id - Get student by ID
router.get("/:id", (req, res) => {
    const id = parseInt(req.params.id, 10);

    if (isNaN(id)) {
        return res.status(400).json({
            success: false,
            message: "Student ID must be a number"
        });
    }

    const student = students.find(student => student.id === id);

    if (!student) {
        return res.status(404).json({
            success: false,
            message: "Student not found"
        });
    }

    res.status(200).json({
        success: true,
        student
    });
});

// POST /students - Create a student
router.post("/", (req, res) => {
    const { name, course } = req.body;

    if (!name || !course) {
        return res.status(400).json({
            success: false,
            message: "Name and course are required"
        });
    }

    const newStudent = {
        id: students.length > 0
            ? students[students.length - 1].id + 1
            : 1,
        name,
        course
    };

    students.push(newStudent);

    res.status(201).json({
        success: true,
        message: "Student created successfully",
        student: newStudent
    });
});

// PUT /students/:id - Update a student
router.put("/:id", (req, res) => {
    const id = parseInt(req.params.id, 10);

    if (isNaN(id)) {
        return res.status(400).json({
            success: false,
            message: "Student ID must be a number"
        });
    }

    const student = students.find(student => student.id === id);

    if (!student) {
        return res.status(404).json({
            success: false,
            message: "Student not found"
        });
    }

    const { name, course } = req.body;

    if (!name || !course) {
        return res.status(400).json({
            success: false,
            message: "Name and course are required"
        });
    }

    student.name = name;
    student.course = course;

    res.status(200).json({
        success: true,
        message: "Student updated successfully",
        student
    });
});

// DELETE /students/:id - Delete a student
router.delete("/:id", (req, res) => {
    const id = parseInt(req.params.id, 10);

    if (isNaN(id)) {
        return res.status(400).json({
            success: false,
            message: "Student ID must be a number"
        });
    }

    const index = students.findIndex(student => student.id === id);

    if (index === -1) {
        return res.status(404).json({
            success: false,
            message: "Student not found"
        });
    }

    const deletedStudent = students.splice(index, 1)[0];

    res.status(200).json({
        success: true,
        message: "Student deleted successfully",
        student: deletedStudent
    });
});

module.exports = router;
