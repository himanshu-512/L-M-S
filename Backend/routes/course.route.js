import express from 'express';
import { createCourse } from '../controllers/course.controllers.js';




const router = express.Router();

router.post('/create', createCourse);  


const courseRouter = router;
export default courseRouter;