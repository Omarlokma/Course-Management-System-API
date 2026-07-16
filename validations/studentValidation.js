import Joi from "joi";

export const validateCreateStudent = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().min(2).max(50).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    level: Joi.string().optional(),
    enrolledCourses: Joi.array()
      .items(Joi.string().hex().length(24))
      .optional(),
  });

  const { error } = schema.validate(req.body);
  if (error)
    return res
      .status(400)
      .json({ success: false, message: error.details[0].message });

  next();
};

export const validateUpdateStudent = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().min(2).max(50),
    email: Joi.string().email(),
    password: Joi.string().min(6),
    level: Joi.string(),
    enrolledCourses: Joi.array().items(Joi.string().hex().length(24)),
  }).min(1);

  const { error } = schema.validate(req.body);
  if (error)
    return res
      .status(400)
      .json({ success: false, message: error.details[0].message });

  next();
};
