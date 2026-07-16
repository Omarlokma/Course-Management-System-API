import Joi from "joi";

export const validateCreateInstructor = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    courses: Joi.array().items(Joi.string().hex().length(24)).optional(),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res
      .status(400)
      .json({ status: "fail", message: error.details[0].message });
  }

  next();
};

export const validateUpdateInstructor = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string(),
    email: Joi.string().email(),
    password: Joi.string().min(6),
    courses: Joi.array().items(Joi.string().hex().length(24)),
  }).min(1);

  const { error } = schema.validate(req.body);
  if (error) {
    return res
      .status(400)
      .json({ status: "fail", message: error.details[0].message });
  }

  next();
};
