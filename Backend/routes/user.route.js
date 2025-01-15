import express from 'express';
import  { login, logout, register } from "../controllers/user.controllers.js"
import isAuthenticated from '../middlewares/isAuthenticated.js';




const router = express.Router();

router.post('/register', register);  // Register a new user
router.post('/login', login);        // Login an existing user
router.get('/logout',isAuthenticated,logout);       // Logout an existing user


const userRouter = router;
export default userRouter;