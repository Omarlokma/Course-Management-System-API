const Instructor = require("../models/instructor.model.js");

exports.createInstructor = async (req, res) => {
  try {
    const instructor = await Instructor.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        instructor,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

exports.getAllInstructors = async (req, res) => {
  try {
    const instructors = await Instructor.find({});

    res.status(200).json({
      status: "success",
      results: instructors.length,
      data: {
        instructors,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
};

exports.getInstructor = async (req, res) => {
  try {
    const instructor = await Instructor.findById(req.params.id);

    if (!instructor) {
      return res.status(404).json({
        status: "fail",
        message: "Instructor not found",
      });
    }

    res.status(200).json({
      status: "success",
      data: {
        instructor,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
};

exports.updateInstructor = async (req, res) => {
  try {
    const instructor = await Instructor.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      },
    );

    if (!instructor) {
      return res.status(404).json({
        status: "fail",
        message: "Instructor not found",
      });
    }

    res.status(200).json({
      status: "success",
      data: {
        instructor,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

exports.deleteInstructor = async (req, res) => {
  try {
    const instructor = await Instructor.findByIdAndDelete(req.params.id);

    if (!instructor) {
      return res.status(404).json({
        status: "fail",
        message: "Instructor not found",
      });
    }

    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
};
