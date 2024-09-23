import Joi from 'joi';

export const createContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).required().message({
    'string.base': 'Username should be a string',
    'string.min': 'Username should have at least {#limit} characters',
    'string.max': 'Username should have at most {#limit} characters',
    'any.required': 'Username is required',
  }),
  phoneNumber: Joi.string()
    .pattern(/^[0-9]{9,15}$/)
    .required()
    .message({
      'string.pattern.base': 'PhoneNumber should be between 9 and 15 digits',
      'any.required': 'PhoneNumber is required',
    }),
  email: Joi.string().email().message({
    'string.email': 'Email should be in a valid format (user@gmail.com)',
  }),
  isFavorite: Joi.boolean().default(false).message({
    'boolean.base': 'Favorite should be a boolean',
  }),
  contactType: Joi.string()
    .valid('work', 'home', 'personal')
    .default('personal')
    .required()
    .message({
      'any.only': 'ContactType should be one of [work, home, personal]',
      'any.required': 'ContactType is required',
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
