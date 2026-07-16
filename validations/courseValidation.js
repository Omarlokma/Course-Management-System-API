import Joi from "joi";

export const validateCreateCourse = (req, res, next) => {
  const schema = Joi.object({
    title: Joi.string().min(3).max(100).required(),

    description: Joi.string().min(10).required(),

    instructorId: Joi.string().hex().length(24).required(),

    maxStudents: Joi.number().integer().min(1).required(),
  });

  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(400).json({
      success: false,
      message: error.details[0].message,
    });
  }

  next();
};

export const validateUpdateCourse = (req, res, next) => {
  const schema = Joi.object({
    title: Joi.string().min(3).max(100),

    description: Joi.string().min(10),

    instructorId: Joi.string().hex().length(24),

    maxStudents: Joi.number().integer().min(1),
  }).min(1);

  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(400).json({
      success: false,
      message: error.details[0].message,
    });
  }

  next();
};