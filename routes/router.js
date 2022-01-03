import express from 'express';
import { createUser, deleteUser, getUsers, getUserId, updateUser } from '../controllers/controller.js';

const router = express.Router();

// All routes begin with /users
router.get('/', getUsers);

// Adding a new user
router.post('/', createUser);

// Get any user using ID
router.get('/:id', getUserId);

// Delete any user using ID
router.delete('/:id', deleteUser);

// Update any user info
router.patch('/:id', updateUser);

export default router;