import { Router } from 'express';

import {
  getContactsController,
  getContactByIdController,
  createContactController,
  patchContactController,
  deleteContactController,
} from '../controllers/contacts.js';

import { ctrlWrapper } from '../utils/ctrlWrapper.js';

import { validateBody, isValidId } from '../middlewares/index.js';

import {
  createContactSchema,
  updateContactSchema,
} from '../validation/contacts.js';

const router = Router();

router.get('/', ctrlWrapper(getContactsController));

router.get('/:contactId', isValidId, ctrlWrapper(getContactByIdController));

router.post(
  '/contacts',
  validateBody(createContactSchema),
  ctrlWrapper(createContactController),
);

router.delete('/:contactId', isValidId, ctrlWrapper(deleteContactController));

router.put(
  '/:contactId',
  isValidId,
  validateBody(createContactSchema),
  ctrlWrapper(patchContactController),
);

router.patch(
  '/contacts/:contactId',
  isValidId,
  validateBody(updateContactSchema),
  ctrlWrapper(patchContactController),
);

export default router;
