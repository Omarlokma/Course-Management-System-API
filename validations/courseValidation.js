import Joi from "joi";

export const validateCreateCourse = (req, res, next) => {
  const schema = Joi.object({
    title: Joi.string().min(3).max(100).required(),
    description: Joi.string().min(10).required(),
    code: Joi.string().alphanum().required(),
    credits: Joi.number().integer().min(1).max(6).required(),
    instructor: Joi.string().hex().length(24).optional(), // Mongo ObjectId
  });

  const { error } = schema.validate(req.body);
  if (error)
    return res
      .status(400)
      .json({ success: false, message: error.details[0].message });

  next();
};

export const validateUpdateCourse = (req, res, next) => {
  const schema = Joi.object({
    title: Joi.string().min(3).max(100),
    description: Joi.string().min(10),
    code: Joi.string().alphanum(),
    credits: Joi.number().integer().min(1).max(6),
    instructor: Joi.string().hex().length(24),
  }).min(1);

  const { error } = schema.validate(req.body);
  if (error)
    return res
      .status(400)
      .json({ success: false, message: error.details[0].message });

  next();
};
