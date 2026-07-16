const Student = require("../models/student.model.js")


 const createStudent = async (req, res) => {
    try {
    const student = await Student.create(req.body)
    res.status(201).json({
    message: "Student created successfully",
    student,
});
    } catch (error) {
    res.status(500).json({
    message: error.message,
});
    }
};




 const getAllStudents = async (req, res) => {
    try {
        const students = await Student.find({});

        res.status(200).json({
            students,
        });

    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};




 const getStudentById = async (req, res) => {
    try {
        const { id } = req.params;

        const student = await Student.findById(id);

        if (!student) {
            return res.status(404).json({
                message: "Student not found",
            });
        }

        res.status(200).json({
            student,
        });

    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};




 const updateStudent = async (req, res) => {
    try {
        const { id } = req.params;

        const student = await Student.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true,
        });

        if (!student) {
            return res.status(404).json({
                message: "Student not found",
            });
        }

        res.status(200).json({
            message: "Student updated successfully",
            student,
        });

    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};



 const deleteStudent = async (req, res) => {
    try {
        const { id } = req.params;
        const student = await Student.findByIdAndDelete(id);
        if (!student) {
            return res.status(404).json({
                message: "Student not found",
            });
        }
        res.status(200).json({
            message: "Student deleted successfully",
        });

    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

module.exports = {
    createStudent,
  getAllStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
}