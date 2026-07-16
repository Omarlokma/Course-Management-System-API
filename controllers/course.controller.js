import Course from "../models/course.model.js";
import Student from "../models/student.model.js";

export const createCourse = async (req, res) => {
  try {
    const course = new Course(req.body);
    await course.save();
    res.status(201).json(course);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

export const getAllCourses  = async (req, res) => {
  try {
    const courses = await Course.find();
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

export const getCourseById  = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) return res.status(404).json({ error: "Course not found" });
    res.status(200).json(course);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

export const updateCourse  = async (req, res) => {
  try {
    const course = await Course.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!course) return res.status(404).json({ error: "Course not found" });
    res.status(200).json(course);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

export const deleteCourse  = async (req, res) => {
  try {
    const course = await Course.findByIdAndDelete(req.params.id);
    if (!course) return res.status(404).json({ error: "Course not found" });
    res.status(200).json({ message: "Course deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

export const enrollStudent = async (req, res) => {
  try {
    const { courseId } = req.params;
    const { studentId } = req.body;

    const course = await Course.findById(courseId);

    if (!course) {
      return res.status(404).json({
        message: "Course not found",
      });
    }

    const student = await Student.findById(studentId);

    if (!student) {
      return res.status(404).json({
        message: "Student not found",
      });
    }

    if (course.enrolledStudents.includes(studentId)) {
      return res.status(400).json({
        message: "Student already enrolled in this course",
      });
    }

    if (course.enrolledStudents.length >= course.maxStudents) {
      return res.status(400).json({
        message: "Course is full",
      });
    }

    course.enrolledStudents.push(studentId);
    student.courses.push(courseId);

    await course.save();
    await student.save();

    res.status(200).json({
      message: "Student enrolled successfully",
      course,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getCourseStudents = async (req, res) => {
  try {

    const { courseId } = req.params;

    const course = await Course.findById(courseId)
      .populate("enrolledStudents");

    if (!course) {
      return res.status(404).json({
        message: "Course not found",
      });
    }

    res.status(200).json({
      students: course.enrolledStudents,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getStudentCourses = async (req, res) => {
  try {

    const { studentId } = req.params;

    const student = await Student.findById(studentId)
      .populate("courses");

    if (!student) {
      return res.status(404).json({
        message: "Student not found",
      });
    }

    res.status(200).json({
      courses: student.courses,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};