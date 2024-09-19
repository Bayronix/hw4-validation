import { Router } from 'express';
import validateBody from '../middlewares/validateBody.js';
import {
  getAllContactsController,
  getContactByIdController,
  getCreateContactController,
  getDeleteContactController,
  patchContactController,
} from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import validateScheme from '../validation/contactsValidation.js';
import { isValidId } from '../middlewares/isValid.js';

const router = Router();

router.get('/contacts', ctrlWrapper(getAllContactsController));

router.get(
  '/contacts/:contactId',
  isValidId,
  ctrlWrapper(getContactByIdController),
);

router.post(
  '/contacts',
  isValidId,
  validateBody(validateScheme),
  ctrlWrapper(getCreateContactController),
);

router.delete('/contacts/:contactId', ctrlWrapper(getDeleteContactController));
router.patch(
  '/contacts/:contactId',
  isValidId,
  validateBody(validateScheme),
  ctrlWrapper(patchContactController),
);

export default router;
