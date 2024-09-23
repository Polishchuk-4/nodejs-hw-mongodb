import Joi from 'joi';

export const createContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).required().messages({
    'string.base': 'Username should be a string',
    'string.min': 'Username should have at least {#limit} characters',
    'string.max': 'Username should have at most {#limit} characters',
    'any.required': 'Username is required',
  }),
  phoneNumber: Joi.string()
    .pattern(/^[0-9]{9,15}$/)
    .required()
    .messages({
      'string.pattern.base': 'PhoneNumber should be between 9 and 15 digits',
      'any.required': 'PhoneNumber is required',
    }),
  email: Joi.string().email().messages({
    'string.email': 'Email should be in a valid format (user@gmail.com)',
  }),
  isFavorite: Joi.boolean().default(false).messages({
    'boolean.base': 'Favorite should be a boolean',
  }),
  contactType: Joi.string()
    .valid('work', 'home', 'personal')
    .default('personal')
    .required()
    .messages({
      'any.only': 'ContactType should be one of [work, home, personal]',
    }),
});

export const updateContactSchema = Joi.object({
  name: Joi.string().min(3).max(20),
  phoneNumber: Joi.string().pattern(/^[0-9]{9,15}$/),
  email: Joi.string().email(),
  isFavorite: Joi.boolean().default(false),
  contactType: Joi.string()
    .valid('work', 'home', 'personal')
    .default('personal'),
});
