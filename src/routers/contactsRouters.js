import { Router } from 'express';
import { validateBody } from '../middlewares/validateBody.js';
import {
  getAllContactsController,
  getContactByIdController,
  getCreateContactController,
  getDeleteContactController,
  patchContactController,
} from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import validateScheme from '../validation/contactsValidation.js';

const router = Router();

router.get('/contacts', ctrlWrapper(getAllContactsController));

router.get('/contacts/:contactId', ctrlWrapper(getContactByIdController));

router.post(
  '/contacts',
  validateBody(validateScheme),
  ctrlWrapper(getCreateContactController),
);

router.delete('/contacts/:contactId', ctrlWrapper(getDeleteContactController));
router.patch('/contacts/:contactId', ctrlWrapper(patchContactController));

export default router;
