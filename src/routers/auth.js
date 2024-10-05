import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { registerUserSchema } from '../validation/auth.js';
import { registerUserController } from '../controllers/auth.js';
import { validateBody } from '../middlewares/index.js';

const router = Router();

router.post(
  '/register',
  validateBody(registerUserSchema),
  ctrlWrapper(registerUserController),
);

export default router;
